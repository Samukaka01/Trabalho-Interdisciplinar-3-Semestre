import React, { useState } from 'react';
import ArmaCard from '../ArmaCard/ArmaCard'; 
import ListarGenerico from '../ListarGenerico/ListarGenerico'; 
import { IArma } from '../../Interfaces/IArma';
import ArmaModal from '../ArmaModal/ArmaModal';

interface Props {
  armas: IArma[]; 
}

const ListaArmas: React.FC<Props> = ({ armas }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [armaSelecionada, setArmaSelecionada] = useState<IArma | null>(null);

  function abrirModal(arma: IArma) {
    setArmaSelecionada(arma);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setArmaSelecionada(null);
  }

  return (
    <div>
      <ListarGenerico<IArma> 
        items={armas}
        renderItem={(arma) => <ArmaCard arma={arma} />} 
        onItemClick={abrirModal} 
      />

      {modalOpen && armaSelecionada && (
        <ArmaModal arma={armaSelecionada} onClose={fecharModal} />
      )}
    </div>
  );
};

export default ListaArmas;