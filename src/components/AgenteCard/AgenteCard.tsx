import React from 'react';
import styles from './AgenteCard.module.css'; 
import CardGenerico from '../CardGenerico/CardGenerico';
import { AgenteApiData } from '../../Classes/AgenteApiData';



interface Props {
  agente: AgenteApiData;
}

const AgenteCard: React.FC<Props> = ({ agente }) => {
  return (
    <CardGenerico
      imageUrl={agente.displayIcon}
      title={agente.displayName}
      cardClassName={styles.agenteCardCustom} 
      imageClassName={styles.agenteCardImage} 
    />
  );
};

export default AgenteCard;