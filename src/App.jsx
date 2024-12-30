import React from 'react';
import { Routes, Route } from 'react-router';
import routes from '@/routes';
import LayoutDefault from '@/components/Layout';

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Component = route.element;
        const Layout = route?.layout || LayoutDefault;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
