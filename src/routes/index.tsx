import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';
import Menu from 'components/Menu';
import PaginaPadrao from 'pages/PaginaPadrao';

export default function AppRoutes(){
  return(
    <main>
      <Router>
        <Menu />
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path="/" element={<PaginaPadrao />}>
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
        </Routes>
      </Router>
    </main>
  );
}