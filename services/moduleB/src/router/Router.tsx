import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App/App';
import { Shop } from '@/pages/shop';

const routes = [
  {
    path: '/moduleB',
    element: <App />,
    children: [
      {
        path: 'main',
        element: (
          <Suspense fallback="Loading...">
            <Shop />
          </Suspense>
        )
      },
      {
        path: 'second',
        element: (
          <Suspense fallback="Loading...">
            <div>Second</div>
          </Suspense>
        )
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;
