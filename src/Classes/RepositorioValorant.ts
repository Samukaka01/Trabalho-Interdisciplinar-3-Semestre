import { Mapa } from './Mapa';
import { Sentinela } from './Sentinela'; 
import { Duelista } from './Duelista';
import { Iniciador } from './Iniciador';
import { Controlador } from './Controlador';
import AgenteBase from './AgenteBase';
import { valorantApiService } from './ValorantApi';
import { Arma } from './Armas';

export class RepositorioValorant {
  private static _agentes: AgenteBase[] | null = null;
  private static _armas: Arma[] | null = null;
  private static _mapas: Mapa[] | null = null;

  public static async getAgentes(): Promise<AgenteBase[]> {
    if (RepositorioValorant._agentes) {
      console.log("Retornando agentes do cache...");
      return RepositorioValorant._agentes;
    }

    console.log("Buscando agentes da API e instanciando...");
    const agentesData = await valorantApiService.fetchAgentes(); 

    const agentesInstanciados = agentesData.map(data => {
      switch (data.role?.displayName) { 
        case 'Sentinela':
          return new Sentinela(data);
        case 'Duelista':
          return new Duelista(data);
        case 'Iniciador':
          return new Iniciador(data);
        case 'Controlador':
          return new Controlador(data);
        default:
          throw new Error(`Erro ao instanciar agente: Papel desconhecido ou ausente para "${data.displayName || 'Nome Desconhecido'}". Papel recebido: "${data.role?.displayName || 'Nulo'}".`);
      }
    });

    RepositorioValorant._agentes = agentesInstanciados;
    return agentesInstanciados;
  }

  public static async getArmas(): Promise<Arma[]> {
    if (RepositorioValorant._armas) {
      console.log("Retornando armas do cache...");
      return RepositorioValorant._armas;
    }

    console.log("Buscando armas da API e instanciando...");
    const armasData = await valorantApiService.fetchArmas(); 
    const armasInstanciadas = armasData.map(data => new Arma(data)); 

    RepositorioValorant._armas = armasInstanciadas;
    return armasInstanciadas;
  }

  public static async getMapas(): Promise<Mapa[]> {
    if (RepositorioValorant._mapas) {
      console.log("Retornando mapas do cache...");
      return RepositorioValorant._mapas;
    }

    console.log("Buscando mapas da API e instanciando...");
    const mapasData = await valorantApiService.fetchMapas(); 
    const mapasInstanciados = mapasData.map(data => new Mapa(data)); 

    RepositorioValorant._mapas = mapasInstanciados;
    return mapasInstanciados;
  }

  public static clearCache(): void {
    RepositorioValorant._agentes = null;
    RepositorioValorant._armas = null;
    RepositorioValorant._mapas = null;
    console.log("Cache do RepositorioValorant limpo.");
  }
}