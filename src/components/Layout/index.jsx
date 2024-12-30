import Header from './Header';
import Sidebar from './Sidebar';

const Layout = props => {
  const { children } = props;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-[6]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
