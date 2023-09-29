import Home from './homepage/Home';

import RouterEn from './decks/react-router.en.mdx';
import RouterFr from './decks/react-router.fr.mdx';
import FundamentalsFr from './decks/fundmentals.fr.mdx';
import FundamentalsEn from './decks/fundmentals.en.mdx';
import TestEn from './decks/test.en.mdx';

import GotoPopup from './components/GotoPopup';
import { createBrowserRouter, Outlet, useParams } from 'react-router-dom';

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
            path: '/:lang?',
            element: <Language />,
            children: [
              { path: 'en/test', element: <TestEn /> },
              { path: 'en/fundamentals', element: <FundamentalsEn /> },
              { path: 'fr/fundamentals', element: <FundamentalsFr /> },
              { path: 'en/react-router', element: <RouterEn /> },
              { path: 'fr/react-router', element: <RouterFr /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

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
