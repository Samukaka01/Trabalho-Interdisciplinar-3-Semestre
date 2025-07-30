import React, { useState } from 'react';
import AgenteModal from '../AgenteModal/AgenteModal';
import AgenteCard from '../AgenteCard/AgenteCard';
import ListarGenerico from '../ListarGenerico/ListarGenerico';
import { IAgente } from '../../Interfaces/IAgente';


interface Props {
  agentes: IAgente[];
}

const ListaAgentes: React.FC<Props> = ({ agentes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [agenteSelecionado, setAgenteSelecionado] = useState<IAgente | null>(null);

  function abrirModal(agente: IAgente) {
    setAgenteSelecionado(agente);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setAgenteSelecionado(null);
  }

  return (
    <div>
      <ListarGenerico<IAgente>
        items={agentes}
        renderItem={(agente) => <AgenteCard agente={agente} />}
        onItemClick={abrirModal}
      />

      {modalOpen && agenteSelecionado && (
        <AgenteModal agente={agenteSelecionado} onClose={fecharModal} />
      )}
    </div>
  );
};

export default ListaAgentes;