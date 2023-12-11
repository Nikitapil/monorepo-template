import { Link, Outlet } from 'react-router-dom';
import { moduleARoutes, shopRoutes } from '@packages/shared';

export const App = () => {
  return (
    <div data-testid="App">
      <h1>HOST MODULE</h1>
      <Link to={moduleARoutes.about}>About</Link>
      <br />
      <Link to={shopRoutes.main}>Shop</Link>
      <br />
      <Link to={shopRoutes.second}>Shop2</Link>
      <Outlet />
    </div>
  );
};
