import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type OpcaoProps = typeof filtros[0]

interface IFiltros {
  filtro: number | null;
  setFiltros: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltros}: IFiltros) {

  const selecionarFiltro = ({id}: OpcaoProps) => {
    if (filtro === id) return setFiltros(null);
    return setFiltros(id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map(({id, label}) => (
        <button 
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === id
          })} 
          key={id} 
          onClick={() => selecionarFiltro({id, label})}>
          {label}
        </button>
      ))}
    </div>
  );
}