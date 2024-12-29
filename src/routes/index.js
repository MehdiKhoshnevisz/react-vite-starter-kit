import Index from '@/app/index';
import NotFound from '@/app/not-found';
import Materials from '@/app/Materials';
import ProductionLine from '@/app/production-line';
import ProductionLineDetails from '@/app/production-line-details';

import Layout from '@/components/Layout';

export default [
  {
    path: '/',
    element: Index,
    layout: Layout
  },
  {
    path: '/production-line',
    element: ProductionLine,
    layout: Layout
  },
  {
    path: '/production-line-details/:id',
    element: ProductionLineDetails,
    layout: Layout
  },
  {
    path: '/materials',
    element: Materials,
    layout: Layout
  },
  {
    path: '*',
    element: NotFound
  }
];
