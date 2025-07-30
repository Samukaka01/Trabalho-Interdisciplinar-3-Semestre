import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Paginas/Home';
import { Header } from './components/Header/Header';
import './App.module.css'; 
import Footer from './components/Footer/Footer';
import { Mapa } from './Classes/Mapa';
import AgenteBase from './Classes/AgenteBase';
import Agentes from './Paginas/Agentes';
import Armas from './Paginas/Armas';
import Mapas from './Paginas/Mapa'; 
import { Arma } from './Classes/Armas'; 
import { RepositorioValorant } from './Classes/RepositorioValorant'; 
import PaginaResultadosPesquisa from './Paginas/PaginaResultadosPesquisa';

const ConteudoApp: React.FC = () => { 
  const [criterioPesquisa, setCriterioPesquisa] = useState<string>(''); 
  const [todosAgentes, setTodosAgentes] = useState<AgenteBase[]>([]); 
  const [todasArmas, setTodasArmas] = useState<Arma[]>([]); 
  const [todosMapas, setTodosMapas] = useState<Mapa[]>([]); 
  const [carregandoDadosGlobais, setCarregandoDadosGlobais] = useState<boolean>(true); 
  const [erroDadosGlobais, setErroDadosGlobais] = useState<string | null>(null); 

  const navegar = useNavigate(); 

  
  useEffect(() => {
    const carregarTodosOsDados = async () => { 
      try {
        setCarregandoDadosGlobais(true);
        setErroDadosGlobais(null);

        const [agentes, armas, mapas] = await Promise.all([
          RepositorioValorant.getAgentes(),
          RepositorioValorant.getArmas(),
          RepositorioValorant.getMapas(),
        ]);

        setTodosAgentes(agentes);
        setTodasArmas(armas);
        setTodosMapas(mapas);

      } catch (error: any) {
        console.error("Erro ao carregar dados globais para pesquisa:", error);
        setErroDadosGlobais(`Erro ao carregar dados: ${error.message || 'Verifique sua conexão ou tente novamente.'}`);
      } finally {
        setCarregandoDadosGlobais(false);
      }
    };
    carregarTodosOsDados();
  }, []); 

  const lidarComMudancaPesquisa = (criterio: string) => { 
    setCriterioPesquisa(criterio);
    navegar(`/search?q=${encodeURIComponent(criterio)}`); 
  };

  
  if (carregandoDadosGlobais) { 
    return (
      <div className="app-container">
        <Header onSearchChange={lidarComMudancaPesquisa} currentSearch={criterioPesquisa} /> 
        <main className="app-content" style={{ textAlign: 'center', padding: '50px' }}>
          <p>Carregando dados do Valorant para pesquisa global...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (erroDadosGlobais) { 
    return (
      <div className="app-container">
        <Header onSearchChange={lidarComMudancaPesquisa} currentSearch={criterioPesquisa} /> 
        <main className="app-content" style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
          <p>{erroDadosGlobais}</p> 
          <p>Não foi possível carregar os dados essenciais para o aplicativo. Por favor, tente recarregar a página.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header onSearchChange={lidarComMudancaPesquisa} currentSearch={criterioPesquisa} /> 
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/armas" element={<Armas />} />
          <Route path="/mapas" element={<Mapas />} />

          <Route
            path="/search"
            element={
              <PaginaResultadosPesquisa 
                todosAgentes={todosAgentes} 
                todasArmas={todasArmas}   
                todosMapas={todosMapas}    
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


function App() {
  return <ConteudoApp />; 
}

export default App;