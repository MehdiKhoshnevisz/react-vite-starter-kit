import { Icon } from '@iconify/react';
import { NavLink } from 'react-router';
import useSidebar from './hooks/use-sidebar';

const Sidebar = () => {
  const { links, generateNavLinkClass } = useSidebar();

  return (
    <aside className="flex-1 flex flex-col gap-2 py-8 px-6">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) => generateNavLinkClass(isActive)}
        >
          <Icon icon={`hugeicons:${link.icon}`} fontSize={26} />
          <span className="text-sm">{link.title}</span>
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
