import React from 'react';
import CardGenerico from '../CardGenerico/CardGenerico'; 
import styles from './ArmaCard.module.css'; 
import { IArma } from '../../Interfaces/IArma';

interface Props {
  arma: IArma;
}

const ArmaCard: React.FC<Props> = ({ arma }) => {
  return (
    <CardGenerico
      imageUrl={arma.displayIcon} 
      title={arma.displayName} 
      cardClassName={styles.armaCardCustom} 
      imageClassName={styles.armaCardImage} 
    />
  );
};

export default ArmaCard;