import logo from 'assets/logo.svg'
import styles from './item.module.scss'

type IItem = {

}

export default function Item (){
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={logo} alt="img" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>macarrão</h2>
          <p>descricao</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>Massa</div>
          <div className={styles.item__porcao}>400g</div>
          <div className={styles.item__qtdpessoas}>serve 2 pessoas</div>
          <div className={styles.item__valor}>R$10.00</div>
        </div>
      </div>
    </div>
  )
}