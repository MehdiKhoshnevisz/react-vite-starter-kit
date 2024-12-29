import React from 'react';

import Index from '@/app/index';
import NotFound from '@/app/not-found';

const useApp = () => {
  const routes = [
    {
      path: '/',
      element: React.createElement(Index)
    },
    {
      path: '*',
      element: React.createElement(NotFound)
    }
  ];

  return { routes };
};

export default useApp;
