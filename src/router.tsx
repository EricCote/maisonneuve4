import Home from './homepage/Home';
import GotoPopup from './components/GotoPopup';
import { createBrowserRouter, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Status from './decks/4-state.fr.mdx';

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
          { path: 'status', element: <Status></Status> },
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

  const [jsx, setJsx] = useState(<></>);
  useEffect(() => {
    Loading();
  });
  async function Loading() {
    const Result = await import(`./decks/${id}.${lang}.mdx`);
    setJsx(Result.default);
  }
  return jsx;
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
