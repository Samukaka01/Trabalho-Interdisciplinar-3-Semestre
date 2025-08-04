import React from 'react';
import styles from './MapaModal.module.css';
import ModalGenerico from '../ModalGenerico/ModalGenerico';
// Remova a importação de MapaApiData e CalloutApiData se não forem mais usadas diretamente aqui
// import { MapaApiData } from '../../Interfaces/MapaApiData'; 
// import { CalloutApiData } from '../../Interfaces/MapaCalloutApiData'; 

// Importe a classe de domínio Mapa
import { Mapa } from '../../Classes/Mapa'; // Ajuste o caminho conforme a localização da sua classe Mapa
import { CalloutApiData } from '../../Classes/CalloutApiData';
// Você ainda pode precisar do CalloutApiData para tipar os callouts dentro da classe Mapa,
// então se for o caso, mantenha a importação:



interface Props {
  // O componente agora recebe uma instância da classe de domínio Mapa
  mapa: Mapa; 
  onClose: () => void;
}

const MapaModal: React.FC<Props> = ({ mapa, onClose }) => {
  if (!mapa) {
    return null;
  }

  return (
    <ModalGenerico onClose={onClose} modalContentClassName={styles.mapaModalContent}>
      <div className={styles.modalHeader}>
        {/* Acesse as propriedades via getters se necessário, ou diretamente se forem públicas */}
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
        {/* Lembre-se que narrativeDescription e tacticalDescription não tinham getters na sua última lista.
            Se você quiser exibi-los, precisa adicionar getters públicos na classe Mapa.
            Para este exemplo, vou mantê-los comentados ou removidos se não existirem.
            Se você os readicionou à classe Mapa (com getters), pode descomentar. */}
        {/* {mapa.narrativeDescription && <p>{mapa.narrativeDescription}</p>} */}
        {/* {mapa.tacticalDescription && <p>{mapa.tacticalDescription}</p>} */}

        {mapa.callouts && mapa.callouts.length > 0 && (
          <>
            <h4>Locais de Interesse (Callouts):</h4>
            <ul className={styles.calloutsList}>
              {mapa.callouts.map((callout: CalloutApiData, index: number) => (
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