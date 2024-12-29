import { Link } from 'react-router';

function Layout({ children }) {
  return (
    <div>
      <aside className="p-4">
        <Link to="/production-line" className="block">
          <span>خط تولید</span>
        </Link>
        <Link to="/materials" className="block">
          <span>مواد اولیه</span>
        </Link>
      </aside>

      {children}
    </div>
  );
}

export default Layout;
