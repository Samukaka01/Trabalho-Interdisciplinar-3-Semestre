import React from 'react';
import styles from './MapaCard.module.css'; 
import CardGenerico from '../CardGenerico/CardGenerico';
import { Mapa } from '../../Classes/Mapa'; 

interface Props {
  mapa: Mapa;
}

const MapaCard: React.FC<Props> = ({ mapa }) => {
  return (
    <CardGenerico
      imageUrl={mapa.splash} 
      title={mapa.displayName}
      cardClassName={styles.mapaCardCustom} 
      imageClassName={styles.mapaCardImage} 
    />
  );
};

export default MapaCard;