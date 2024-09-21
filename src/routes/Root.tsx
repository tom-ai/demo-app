import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">
              <strong>Demo App</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/tempo-tool">Tempo Tool</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
