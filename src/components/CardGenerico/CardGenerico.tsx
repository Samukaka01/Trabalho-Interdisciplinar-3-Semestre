import React from 'react';
import styles from './CardGenerico.module.css';

interface Props {
  imageUrl: string;
  title: string;
  onClick?: () => void; 
  cardClassName?: string; 
  imageClassName?: string; 
}

const CardGenerico: React.FC<Props> = ({ imageUrl, title, onClick, cardClassName, imageClassName }) => {
  return (
    <div className={`${styles.card} ${cardClassName || ''}`} onClick={onClick}>
      <img src={imageUrl} alt={title} className={`${styles.cardImage} ${imageClassName || ''}`} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

export default CardGenerico;