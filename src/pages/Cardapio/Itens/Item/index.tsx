import styles from './item.module.scss';
import { TagsPrato } from 'components';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/prato';

export default function Item (item: Prato){
  const {description, photo, title, id} = item;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...item} />
      </div>
    </div>
  );
}