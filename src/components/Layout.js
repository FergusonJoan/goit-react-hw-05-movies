import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className={'header'}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <>
          <p>Footer text</p>
        </>
      </footer>
    </>
  );
};

export default Layout;
