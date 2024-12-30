import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-7 border-b-1">
      <NavLink to="/" className="font-black text-lg text-slate-900">
        کیمیا دانش الوند
      </NavLink>
      <div className="">profile dropdown</div>
    </header>
  );
};

export default Header;
