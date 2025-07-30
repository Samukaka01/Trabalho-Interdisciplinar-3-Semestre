// src/components/MapaCard/MapaCard.tsx
import React from 'react';
import styles from './MapaCard.module.css'; // Mantenha para estilos específicos de MapaCard
import CardGenerico from '../CardGenerico/CardGenerico';
import { IMapa } from '../../Interfaces/IMapa';

interface Props {
  mapa: IMapa;
}

const MapaCard: React.FC<Props> = ({ mapa }) => {
  return (
    <CardGenerico
      imageUrl={mapa.listViewIcon || mapa.displayIcon} // Use uma das duas opções de ícone
      title={mapa.displayName}
      // O onClick será gerenciado pelo ListaMapas
      cardClassName={styles.mapaCardCustom} // Opcional: para estilos específicos deste card
      imageClassName={styles.mapaCardImage} // Opcional: para estilos específicos da imagem
    />
  );
};

export default MapaCard;