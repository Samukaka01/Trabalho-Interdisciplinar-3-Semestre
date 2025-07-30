import React, { useState, useEffect } from 'react';
import { Mapa } from '../Classes/Mapa';
import ListaMapas from '../components/ListarMapas/ListarMapas';
import { RepositorioValorant } from '../Classes/RepositorioValorant';


const Mapas: React.FC = () => {
  const [todosOsMapas, setTodosOsMapas] = useState<Mapa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMapas = async () => {
      try {
        setLoading(true);
        const fetched = await RepositorioValorant.getMapas();
        setTodosOsMapas(fetched);
      } catch (err: any) {
        console.error("Erro ao buscar mapas:", err);
        setError(`Não foi possível carregar os mapas: ${err.message || 'Erro desconhecido'}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMapas();
  }, []);

  if (loading) return <p>Carregando mapas...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div className="mapas-container">
      <h1>Mapas do Valorant</h1>
      {todosOsMapas.length > 0 ? ( 
        <ListaMapas mapas={todosOsMapas} />
      ) : (
        <p>Nenhum mapa encontrado.</p>
      )}
    </div>
  );
};

export default Mapas;