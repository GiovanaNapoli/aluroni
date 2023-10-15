import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';

export default function AppRoutes(){
  return(
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}