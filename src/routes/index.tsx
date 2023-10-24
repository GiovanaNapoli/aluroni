import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';
import Menu from 'components/Menu';

export default function AppRoutes(){
  return(
    <Router>
      <Menu />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}