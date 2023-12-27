import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { primaryRoutes, secondaryRoutes } from './routes';
import { Menu, Footer } from 'components';
import { PaginaPadrao } from 'pages';

export default function AppRoutes(){
  return(
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          {primaryRoutes.map((route) => (
            <Route key={route.id} path="/" element={<PaginaPadrao />}>
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
          {secondaryRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}