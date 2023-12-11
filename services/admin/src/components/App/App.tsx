import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div data-testid="App">
      <h1>ADMIN MODULE</h1>
      <Outlet />
    </div>
  );
};
