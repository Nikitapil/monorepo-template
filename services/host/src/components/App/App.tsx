import { Link, Outlet } from 'react-router-dom';
import { moduleARoutes, moduleBRoutes } from '@packages/shared';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div data-testid="App">
      <h1 className={styles.title}>HOST MODULE</h1>
      <Link to={moduleARoutes.about}>About(ModuleA)</Link>
      <br />
      <Link to={moduleBRoutes.main}>Main(ModuleB)</Link>
      <br />
      <Link to={moduleBRoutes.second}>Second(ModuleB)</Link>
      <Outlet />
    </div>
  );
};
