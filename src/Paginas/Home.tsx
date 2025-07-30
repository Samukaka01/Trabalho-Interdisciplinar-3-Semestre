
import { RepositorioValorant } from '../Classes/RepositorioValorant';
import './Home.css';
import React, { useEffect } from 'react';


const Home: React.FC = () => {

  useEffect(() => {
    const verificarInstanciacaoDoRepositorio = async () => {
      try {
        console.log("--- Verificando Instanciação do Repositório na Home ---");

        const agentes = await RepositorioValorant.getAgentes();
        console.log(`Agentes instanciados no Repositório: ${agentes.length} encontrados.`);
        if (agentes.length > 0) {
          console.log("Exemplo de Agente instanciado:", agentes[0].displayName);
          console.log(`Exemplo de descrição de papel do Agente: ${agentes[0].getDescricaoPapel()}`);
          console.log(`Exemplo de característica única do papel: ${agentes[0].getCaracteristicaUnicaDoPapel()}`);
        }

        const armas = await RepositorioValorant.getArmas();
        console.log(`Armas instanciadas no Repositório: ${armas.length} encontradas.`);
        if (armas.length > 0) {
          console.log("Exemplo de Arma instanciada:", armas[0].displayName);
        }

        const mapas = await RepositorioValorant.getMapas();
        console.log(`Mapas instanciados no Repositório: ${mapas.length} encontrados.`);
        if (mapas.length > 0) {
          console.log("Exemplo de Mapa instanciado:", mapas[0].displayName);
        }

        console.log("--- Verificação do Repositório Concluída ---");

      } catch (error) {
        console.error("Erro ao verificar a instanciação do Repositório:", error);
      }
    };

    verificarInstanciacaoDoRepositorio();
  }, []); 

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Projeto Valorant</h1>
      </header>

      <section className="disciplines-info">
        <p>Este site é um trabalho acadêmico desenvolvido para as disciplinas de:</p>
        <ul>
          <li><strong>POO2 (Programação Orientada a Objetos II)</strong></li>
          <li><strong>Arquitetura de Software</strong></li>
          <li><strong>Desenvolvimento Front-End II</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;