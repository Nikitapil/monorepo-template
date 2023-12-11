import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div data-testid="App">
      <h1>MODULE A</h1>
      <Outlet />
    </div>
  );
};
