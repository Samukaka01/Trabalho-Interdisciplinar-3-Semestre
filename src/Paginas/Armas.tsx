import React, { useState, useEffect } from 'react';
import ListaArmas from '../components/ListarArmas/ListarArmas';
import { RepositorioValorant } from '../Classes/RepositorioValorant';
import { Arma } from '../Classes/Armas';


const Armas: React.FC = () => {
  const [todasAsArmas, setTodasAsArmas] = useState<Arma[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArmas = async () => {
      try {
        setLoading(true);
        const fetched = await RepositorioValorant.getArmas();
        setTodasAsArmas(fetched);
      } catch (err: any) {
        console.error("Erro ao buscar armas:", err);
        setError(`Não foi possível carregar as armas: ${err.message || 'Erro desconhecido'}`);
      } finally {
        setLoading(false);
      }
    };
    fetchArmas();
  }, []);

  if (loading) return <p>Carregando armas...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div className="armas-container">
      <h1>Armas do Valorant</h1>
      {todasAsArmas.length > 0 ? ( 
        <ListaArmas armas={todasAsArmas} />
      ) : (
        <p>Nenhuma arma encontrada.</p>
      )}
    </div>
  );
};

export default Armas;