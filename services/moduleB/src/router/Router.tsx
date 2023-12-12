import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { TestComponent } from '@packages/shared';
import { Main } from '@/pages/main';
import { App } from '@/components/App/App';

const routes = [
  {
    path: '/moduleB',
    element: <App />,
    children: [
      {
        path: 'main',
        element: (
          <Suspense fallback="Loading...">
            <Main />
          </Suspense>
        )
      },
      {
        path: 'second',
        element: (
          <Suspense fallback="Loading...">
            <div>
              <TestComponent />
            </div>
          </Suspense>
        )
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;
