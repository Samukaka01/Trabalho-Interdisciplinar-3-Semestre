import React, { useState } from 'react';
import styles from './ListarMapas.module.css';
import { Mapa } from '../../Classes/Mapa'; 
import MapaModal from '../MapaModal/MapaModal';
import MapaCard from '../MapaCard/MapaCard'; 
import ListarGenerico from '../ListarGenerico/ListarGenerico'; 
interface ListarMapasProps {
  mapas: Mapa[];
}

const ListarMapas: React.FC<ListarMapasProps> = ({ mapas }) => {
  const [mapaSelecionado, setMapaSelecionado] = useState<Mapa | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = (mapa: Mapa) => {
    setMapaSelecionado(mapa);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setMapaSelecionado(null);
  };

  return (
    <div> 
      <ListarGenerico<Mapa> 
        items={mapas}
        renderItem={(mapa) => <MapaCard mapa={mapa} />} 
        onItemClick={abrirModal} 
        containerClassName={styles.mapasGrid} 
      />

      {modalOpen && mapaSelecionado && (
        <MapaModal mapa={mapaSelecionado} onClose={fecharModal} />
      )}
    </div>
  );
};

export default ListarMapas;