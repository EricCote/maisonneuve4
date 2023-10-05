import Home from './homepage/Home';

import FundamentalsFr from './decks/1-fundmentals.fr.mdx';
import FundamentalsEn from './decks/1-fundmentals.en.mdx';
import ComponentsFr from './decks/2-components.fr.mdx';
import RouterFr from './decks/3-react-router.fr.mdx';
import RouterEn from './decks/3-react-router.en.mdx';
import StateFr from './decks/4-state.fr.mdx';
import LoadingFr from './decks/5-loading.fr.mdx';
import ManageStateFr from './decks/6-manage-state.fr.mdx';
import AdvancedFr from './decks/7-advanced.fr.mdx';
import InstallEn from './decks/install.en.mdx';
import InstallFr from './decks/install.fr.mdx';
import PlanFr from './decks/plan.fr.mdx';

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
              { path: 'en/install', element: <InstallEn /> },
              { path: 'fr/install', element: <InstallFr /> },
              { path: 'fr/plan', element: <PlanFr /> },
              { path: 'en/fundamentals', element: <FundamentalsEn /> },
              { path: 'fr/fundamentals', element: <FundamentalsFr /> },
              { path: 'fr/components', element: <ComponentsFr /> },
              { path: 'en/react-router', element: <RouterEn /> },
              { path: 'fr/react-router', element: <RouterFr /> },
              { path: 'fr/state', element: <StateFr /> },
              { path: 'fr/loading', element: <LoadingFr /> },
              { path: 'fr/manage-state', element: <ManageStateFr /> },
              { path: 'fr/advanced', element: <AdvancedFr /> },
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
