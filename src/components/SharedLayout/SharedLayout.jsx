import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import './sharedLayout.scss';

const SharedLayout = () => {
  return (
    <>
      <header className={'header'}>
        <nav>
          <ul className={'navlist'}>
            <li className={'navItem'}>
              <NavLink to="/" className={'navlink'}>Home</NavLink>
            </li>
            <li className={'navItem'}>
              <NavLink to="/movies" className={'navlink'}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
