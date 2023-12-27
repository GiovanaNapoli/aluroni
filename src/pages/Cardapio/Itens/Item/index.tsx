import styles from './item.module.scss';
import { TagsPrato } from 'components';
import { Prato } from 'types/prato';

export default function Item (item: Prato){
  const {description, photo, title} = item;

  return (
    <div className={styles.item}>
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