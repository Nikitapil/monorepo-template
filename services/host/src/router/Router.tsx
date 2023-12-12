import { createBrowserRouter } from 'react-router-dom';
// @ts-ignore
import moduleBRoutes from 'moduleB/Router';
// @ts-ignore
import moduleARoutes from 'moduleA/Router';
import { App } from '@/components/App/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...moduleBRoutes, ...moduleARoutes]
  }
]);
