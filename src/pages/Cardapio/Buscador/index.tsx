import styles from './Buscador.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscador ({search, setSearch}: Props) {
  return (
    <div className={styles.buscador}>
      <input 
        value={search} 
        onChange={(event) => setSearch(event.target.value)} 
        placeholder='Buscar' />
      <CgSearch size={20} color="#4c4d5e" />
    </div>);
}