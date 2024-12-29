import { Routes, Route } from 'react-router';
import useApp from './hooks';
import React from 'react';

function App() {
  const { routes } = useApp();

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
