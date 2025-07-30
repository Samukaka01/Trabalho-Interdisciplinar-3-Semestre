import React from 'react';
import styles from './AgenteModal.module.css'; 
import ModalGenerico from '../ModalGenerico/ModalGenerico';
import { IAgente } from '../../Interfaces/IAgente';

interface Props {
  agente: IAgente;
  onClose: () => void;
}

const AgenteModal: React.FC<Props> = ({ agente, onClose }) => {
  return (
    <ModalGenerico onClose={onClose} modalContentClassName={styles.agenteModalContent}>
      <div className={styles.agenteContentWrapper}> 
        {agente.fullPortrait && (
          <img
            src={agente.fullPortrait}
            alt={agente.displayName}
            className={styles.fullPortrait}
          />
        )}
        <div className={styles.agenteTextContent}>
          <h2>{agente.displayName}</h2>
          <p><strong>Descrição:</strong> {agente.description || 'Sem descrição'}</p>
          <p><strong>Função:</strong> {agente.role?.displayName || 'Desconhecida'}</p>
          <h4>Habilidades:</h4>
          <ul className={styles.abilitiesList}>
            {agente.abilities.map((hab, index) => (
              <li key={index}>
                <img src={hab.displayIcon} alt={hab.displayName} className={styles.abilityIcon} />
                <strong>{hab.displayName}:</strong> {hab.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ModalGenerico>
  );
};

export default AgenteModal;