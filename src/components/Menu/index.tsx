import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
export default function Menu () {

  const rotas = [{
    label: 'Ínicio',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/Cardapio'
  }, {label: 'Sobre', to: '/Sobre'}];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a className={styles.menu__list} href={rota.to}>{rota.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}