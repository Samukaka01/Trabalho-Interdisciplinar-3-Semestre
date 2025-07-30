  import React from 'react';
  import styles from './MapaModal.module.css';
  import ModalGenerico from '../ModalGenerico/ModalGenerico';
  import { IMapa, IMapaCallout } from '../../Interfaces/IMapa';

  interface Props {
    mapa: IMapa;
    onClose: () => void;
  }

  const MapaModal: React.FC<Props> = ({ mapa, onClose }) => {
    if (!mapa) {
      return null;
    }

    return (
      <ModalGenerico onClose={onClose} modalContentClassName={styles.mapaModalContent}>
        <div className={styles.modalHeader}>
          {mapa.splash && (
            <img
              src={mapa.splash}
              alt={`Imagem do Mapa ${mapa.displayName}`}
              className={styles.mapaSplash}
            />
          )}
        </div>
        <div className={styles.modalBody}>
          <h2>{mapa.displayName}</h2>
          {mapa.coordinates && <p><strong>Coordenadas:</strong> {mapa.coordinates}</p>}
          {mapa.narrativeDescription && <p>{mapa.narrativeDescription}</p>}
          {mapa.tacticalDescription && <p>{mapa.tacticalDescription}</p>}

          {mapa.callouts && mapa.callouts.length > 0 && (
            <>
              <h4>Locais de Interesse (Callouts):</h4>
              <ul className={styles.calloutsList}>
                {mapa.callouts.map((callout: IMapaCallout, index: number) => (
                  <li key={index}>
                    <strong>{callout.regionName}</strong> ({callout.superRegionName})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </ModalGenerico>
    );
  };

  export default MapaModal;