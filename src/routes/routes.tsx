
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';

export default [
  {
    id: 'root',
    path: '/',
    element: <Inicio />,
  },
  {
    id: 'cardapio',
    path: 'cardapio',
    element: <Cardapio />,
  },
  {
    id: 'sobre',
    path: 'sobre',
    element: <Sobre />
  },
  {
    id: 'not_found',
    path: '*',
    element: <NotFound />
  }
];