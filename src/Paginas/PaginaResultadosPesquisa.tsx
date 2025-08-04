import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mapa } from '../Classes/Mapa'; 
import ListaAgentes from '../components/ListaAgentes/ListaAgentes';
import ListaArmas from '../components/ListarArmas/ListarArmas';
import ListaMapas from '../components/ListarMapas/ListarMapas';
import AgenteBase from '../Classes/AgenteBase'; 
import { Arma } from '../Classes/Armas'; 

interface PaginaResultadosPesquisaProps {
  todosAgentes: AgenteBase[];
  todasArmas: Arma[];
  todosMapas: Mapa[];
}

const PaginaResultadosPesquisa: React.FC<PaginaResultadosPesquisaProps> = ({ todosAgentes, todasArmas, todosMapas }) => {
  const [parametrosPesquisa] = useSearchParams();
  const termoPesquisa = parametrosPesquisa.get('q') || '';

  const [agentesFiltrados, setAgentesFiltrados] = useState<AgenteBase[]>([]);
  const [armasFiltradas, setArmasFiltradas] = useState<Arma[]>([]);
  const [mapasFiltrados, setMapasFiltradas] = useState<Mapa[]>([]);

  useEffect(() => {
    if (termoPesquisa.trim() !== '') {
      setAgentesFiltrados(todosAgentes.filter(agente => agente.pesquisarPorCriterio(termoPesquisa)));
      setArmasFiltradas(todasArmas.filter(arma => arma.pesquisarPorCriterio(termoPesquisa)));
      setMapasFiltradas(todosMapas.filter(mapa => mapa.pesquisarPorCriterio(termoPesquisa)));
    } else {
      setAgentesFiltrados([]);
      setArmasFiltradas([]);
      setMapasFiltradas([]);
    }
  }, [termoPesquisa, todosAgentes, todasArmas, todosMapas]); 
  return (
    <div className="search-results-container">
      <h1 className="search-results-title">Resultados da Pesquisa para "{termoPesquisa}"</h1>
      {termoPesquisa.trim() === '' ? (
        <p className="search-results-empty-message">Por favor, digite algo na barra de pesquisa para encontrar agentes, armas ou mapas.</p>
      ) : (
        <>
          <h2 className="search-results-subtitle">Agentes</h2>
          {agentesFiltrados.length > 0 ? (
            <ListaAgentes agentes={agentesFiltrados} />
          ) : (
            <p className="search-results-no-data-message">Nenhum agente encontrado com o critério "{termoPesquisa}".</p>
          )}

          <h2 className="search-results-subtitle">Armas</h2>
          {armasFiltradas.length > 0 ? (
            <ListaArmas armas={armasFiltradas} />
          ) : (
            <p className="search-results-no-data-message">Nenhuma arma encontrada com o critério "{termoPesquisa}".</p>
          )}

          <h2 className="search-results-subtitle">Mapas</h2>
          {mapasFiltrados.length > 0 ? (
            <ListaMapas mapas={mapasFiltrados} />
          ) : (
            <p className="search-results-no-data-message">Nenhum mapa encontrado com o critério "{termoPesquisa}".</p>
          )}

          {agentesFiltrados.length === 0 && armasFiltradas.length === 0 && mapasFiltrados.length === 0 && (
            <p className="search-results-no-total-results">
              Nenhum resultado encontrado para "{termoPesquisa}" em Agentes, Armas ou Mapas.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default PaginaResultadosPesquisa;