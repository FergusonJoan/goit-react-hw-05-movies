import { Outlet } from 'react-router-dom';
import { NavLink, Header, Nav, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header className={'header'}>
        <Nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavList>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
