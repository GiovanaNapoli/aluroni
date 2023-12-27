import React from 'react';
import filtros from '../../../data/filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';
import { Filtro } from 'types/filtros';

interface IFiltros {
  filtro: number | null;
  setFiltros: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltros}: IFiltros) {

  const selecionarFiltro = ({id}: Filtro) => {
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