import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div data-testid="App">
      <h1>SHOP MODULE</h1>
      <Outlet />
    </div>
  );
};
