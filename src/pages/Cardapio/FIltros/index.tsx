import filtros from './filtros.json'
import styles from './Filtros.module.scss'

type OpcaoProps = typeof filtros[0]

export default function Filtros() {

  const selecionarFiltro = ({id, label}: OpcaoProps) => {}

  return (
    <div className={styles.filtros}>
      {filtros.map(({id, label}) => (
        <button className={styles.filtros__filtro} key={id} onClick={() => selecionarFiltro({id, label})}>{label}</button>
      ))}
    </div>
  )
}