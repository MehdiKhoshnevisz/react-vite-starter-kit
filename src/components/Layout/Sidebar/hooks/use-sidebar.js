const useSidebar = () => {
  const links = [
    {
      to: '/production-line',
      icon: 'crane',
      title: 'خط تولید'
    },
    {
      to: '/materials',
      icon: 'package',
      title: 'ورود مواد اولیه'
    }
  ];

  const nonActiveClass = 'text-slate-600';
  const activeClass = 'text-primary bg-slate-100 rounded';
  const defaultClass = 'flex gap-2 items-center px-3 py-2';

  const generateNavLinkClass = isActive =>
    `${isActive ? activeClass : nonActiveClass} ${defaultClass}`;

  return { links, generateNavLinkClass };
};

export default useSidebar;
