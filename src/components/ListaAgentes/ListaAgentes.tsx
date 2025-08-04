import React, { useState } from 'react';
import AgenteModal from '../AgenteModal/AgenteModal';
import AgenteCard from '../AgenteCard/AgenteCard';
import ListarGenerico from '../ListarGenerico/ListarGenerico';
import { AgenteApiData } from '../../Classes/AgenteApiData';


interface Props {
  agentes: AgenteApiData[];
}

const ListaAgentes: React.FC<Props> = ({ agentes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [agenteSelecionado, setAgenteSelecionado] = useState<AgenteApiData | null>(null);

  function abrirModal(agente: AgenteApiData) {
    setAgenteSelecionado(agente);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setAgenteSelecionado(null);
  }

  return (
    <div>
      <ListarGenerico<AgenteApiData>
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