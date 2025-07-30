import React, { useState, useEffect } from 'react';
import AgenteBase from '../Classes/AgenteBase';
import ListaAgentes from '../components/ListaAgentes/ListaAgentes'; 
import { RepositorioValorant } from '../Classes/RepositorioValorant';


const Agentes: React.FC = () => {
  const [todosOsAgentes, setTodosOsAgentes] = useState<AgenteBase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgentes = async () => {
      try {
        setLoading(true);
        const fetched = await RepositorioValorant.getAgentes(); 
        setTodosOsAgentes(fetched);
      } catch (err: any) { 
        console.error("Erro ao buscar agentes:", err);
        setError(`Não foi possível carregar os agentes: ${err.message || 'Erro desconhecido'}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAgentes();
  }, []);

  if (loading) return <p>Carregando agentes...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div>
      <h1>Agentes do Valorant</h1> 
      {todosOsAgentes.length > 0 ? ( 
        <ListaAgentes agentes={todosOsAgentes} /> 
      ) : (
        <p>Nenhum agente encontrado.</p>
      )}
    </div>
  );
};

export default Agentes;