import { Routes, Route } from 'react-router';
import useApp from './hooks';

function App() {
  const { routes } = useApp();

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
}

export default App;
