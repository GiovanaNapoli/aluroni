import {Inicio, Cardapio, NotFound, Prato, Sobre} from 'pages';

export const primaryRoutes = [
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
  
];

export const secondaryRoutes = [
  {
    id: 'notFound',
    path: '*',
    element: <NotFound />
  },
  {
    id: 'prato',
    path: 'prato/:id',
    element: <Prato />
  }
];
