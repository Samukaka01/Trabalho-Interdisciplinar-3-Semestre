import React, { useState } from 'react';
import { IMapa } from '../../Interfaces/IMapa';
import MapaCard from '../MapaCard/MapaCard';
import MapaModal from '../MapaModal/MapaModal';
import ListarGenerico from '../ListarGenerico/ListarGenerico';


interface Props {
  mapas: IMapa[];
}

const ListaMapas: React.FC<Props> = ({ mapas }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mapaSelecionado, setMapaSelecionado] = useState<IMapa | null>(null);

  function abrirModal(mapa: IMapa) {
    setMapaSelecionado(mapa);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setMapaSelecionado(null);
  }

  return (
    <div>
      <ListarGenerico<IMapa>
        items={mapas}
        renderItem={(mapa) => <MapaCard mapa={mapa} />}
        onItemClick={abrirModal}
      />

      {modalOpen && mapaSelecionado && (
        <MapaModal mapa={mapaSelecionado} onClose={fecharModal} />
      )}
    </div>
  );
};

export default ListaMapas;