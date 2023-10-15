
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';

export default [
  {
    id: 'root',
    path: '/',
    element: <Inicio />,
  },
  {
    id: 'cardapio',
    path: '/cardapio',
    element: <Cardapio />,
  },
];