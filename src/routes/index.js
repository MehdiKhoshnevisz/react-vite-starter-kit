import Index from '@/app/index';
import NotFound from '@/app/not-found';
import Materials from '@/app/Materials';
import ProductionLine from '@/app/production-line';
import ProductionLineDetails from '@/app/production-line-details';
import LayoutPure from '@/components/LayoutPure';

export default [
  {
    path: '/',
    element: Index
  },
  {
    path: '*',
    element: NotFound,
    layout: LayoutPure
  },
  {
    path: '/production-line',
    element: ProductionLine
  },
  {
    path: '/production-line-details/:id',
    element: ProductionLineDetails
  },
  {
    path: '/materials',
    element: Materials
  }
];
