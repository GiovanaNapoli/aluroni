import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import theme from 'styles/Tema.module.scss';

import Filtros from './Filtros';
import Ordenador, {OpcoesOrdenador} from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [search, setSearch] = useState('');
  const [filtro, setFiltros] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={theme.titulo}>Cardápio</h3>
      <Buscador search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltros={setFiltros} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens filtro={filtro} busca={search} ordenador={ordenador} />
    </section>
  );
}