import Index from '@/app/index';
import NotFound from '@/app/not-found';
import LayoutPure from '@/components/Layouts/LayoutPure';

const useApp = () => {
  const routes = [
    {
      path: '/',
      element: Index,
      layout: LayoutPure
    },
    {
      path: '*',
      element: NotFound
    }
  ];

  return { routes };
};

export default useApp;
