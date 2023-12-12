import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div data-testid="App">
      <h1 className={styles.title}>MODULE A</h1>
      <Outlet />
    </div>
  );
};
