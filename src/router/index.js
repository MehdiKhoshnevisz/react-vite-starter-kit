import Index from '@/app/index';
import NotFound from '@/app/not-found';
import LayoutPure from '@/components/Layouts/LayoutPure';

export default [
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
