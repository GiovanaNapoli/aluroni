import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface IOrdenador {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador ({ordenador, setOrdenador}: IOrdenador){
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome

  return (
    <button className={classNames({
      [styles.ordenador]: true,
      [styles['ordenador--ativo']]: ordenador !== ''
    })} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
      <span>{nomeOrdenador || 'Ordernar por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map(({nome, value}) => (
          <div 
            className={styles.ordenador__option} 
            key={value} 
            onClick={() => setOrdenador(value)}>
            {nome}
          </div>
        ))}
      </div>
    </button>
  )
}