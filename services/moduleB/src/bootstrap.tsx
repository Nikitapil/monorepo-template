import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/Router';
import '@packages/shared/styles/styles.scss';

const root = document.getElementById('root') as HTMLElement;

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
