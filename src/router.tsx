import Home from './homepage/Home';
import GotoPopup from './components/slides/GotoPopup';

import Sandpack from './components/Sandpack';

import Diagram from './components/slides/Diagram';

import Illustration from './components/slides/Illustration';
import { createBrowserRouter, Outlet, useParams } from 'react-router-dom';
import { lazy, memo, Suspense, useCallback, useMemo, useState } from 'react';
import Status from './decks/6-manage-state.fr.mdx';

const components = {
  Sandpack,
  Diagram,
  Illustration,
  TwoColumns({ className, children, style }: any) {
    return (
      <aside
        className={className}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 10,
          ...style,
        }}
      >
        {children}
      </aside>
    );
  },
  // wrapper({ children }: any) {
  //   useEffect(() => {
  //     if (location.hash.length > 1) {
  //       location.hash = '#120';
  //     }
  //   });
  //   return <>{children}</>;
  // },

  Hint({ toggle, children }: any) {
    let { lang } = useParams();
    lang = lang ?? 'en';
    toggle = toggle ?? lang === 'fr' ? 'Indice' : 'Hint';
    return (
      <details>
        <summary className='btn-link link-info'>{toggle}</summary>
        {children}
      </details>
    );
  },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
    //errorElement: <ErrorBoundary />,

    children: [
      { index: true, element: <Home /> },
      {
        index: false,
        element: (
          <>
            <GotoPopup />
            <article>
              <Outlet />
            </article>
          </>
        ),
        children: [
          {
            path: 'status',
            element: <Status components={components} />,
          },
          {
            path: 'decks/:lang/',
            element: <Language />,
            children: [
              {
                path: ':id',
                element: <MyLoader />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

function MyLoader() {
  const { id, lang } = useParams();

  const MyMdx = useMemo(
    () => lazy(() => import(`./decks/${id}.${lang}.mdx`)),
    [id, lang]
  );

  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <MyMdx components={components} />
    </Suspense>
  );
}

function Language() {
  // Get the lang param from the URL.
  let { lang } = useParams();
  lang = lang ?? 'en';
  document.documentElement.lang = lang;
  return (
    <>
      <Outlet />
    </>
  );
}
