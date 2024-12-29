import React from 'react';
import { Routes, Route } from 'react-router';
import routes from '@/routes';

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const ElementComponent = route.element;
        const LayoutComponent = route.layout || React.Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <LayoutComponent>
                <ElementComponent />
              </LayoutComponent>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
