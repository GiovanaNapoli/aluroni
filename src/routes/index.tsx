import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';
import Menu from 'components/Menu';
import PaginaPadrao from 'pages/PaginaPadrao';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

export default function AppRoutes(){
  return(
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path="/" element={<PaginaPadrao />}>
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}