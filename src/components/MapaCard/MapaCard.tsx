import React from 'react';
import styles from './MapaCard.module.css'; 
import CardGenerico from '../CardGenerico/CardGenerico';
import { IMapa } from '../../Interfaces/IMapa';

interface Props {
  mapa: IMapa;
}

const MapaCard: React.FC<Props> = ({ mapa }) => {
  return (
    <CardGenerico
      imageUrl={mapa.listViewIcon || mapa.displayIcon} 
      title={mapa.displayName}
      
      cardClassName={styles.mapaCardCustom} 
      imageClassName={styles.mapaCardImage} 
    />
  );
};

export default MapaCard;