import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>To-Do</h1>
        <nav className={styles.nav} aria-label="Main">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            end
          >
            All
          </NavLink>
          <NavLink
            to="/active"
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            Active
          </NavLink>
          <NavLink
            to="/completed"
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            Completed
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
