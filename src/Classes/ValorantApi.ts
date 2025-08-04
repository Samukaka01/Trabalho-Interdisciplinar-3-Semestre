
import { IArma } from '../Interfaces/IArma';
import { Mapa } from './Mapa';
import { Arma } from './Armas';
import AgenteBase from './AgenteBase';
import { Controlador } from './Controlador';
import { Duelista } from './Duelista';
import { Sentinela } from './Sentinela';
import { Iniciador } from './Iniciador';
import { AgenteApiData } from './AgenteApiData';
import { MapaApiData } from './MapaApiData';

class ValorantApiService {
  private baseUrl = 'https://valorant-api.com/v1';
  private language = 'pt-BR';

  async fetchAgentes(): Promise<AgenteBase[]> {
    const response = await fetch(`${this.baseUrl}/agents?isPlayableCharacter=true&language=${this.language}`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar agentes: ${response.statusText}`);
    }
    const data = await response.json();

    return data.data.map((agenteData: AgenteApiData) => {
      if (!agenteData.role || !agenteData.role.displayName) {
        console.warn(`Dados de função (role) ausentes ou incompletos para o agente: ${agenteData.displayName}. Retornando dado bruto.`);
        return agenteData as unknown as AgenteBase; 
      }
      switch (agenteData.role.displayName) {
        case 'Controlador':
          return new Controlador(agenteData);
        case 'Duelista':
          return new Duelista(agenteData);
        case 'Sentinela':
          return new Sentinela(agenteData);
        case 'Iniciador':
          return new Iniciador(agenteData);
        default:
          console.warn(`Papel desconhecido para o agente: ${agenteData.displayName} (${agenteData.role.displayName}). Retornando dado bruto.`);
          return agenteData as AgenteBase; 
      }
    });
  }

  async fetchArmas(): Promise<Arma[]> {
    const response = await fetch(`${this.baseUrl}/weapons?language=${this.language}`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar armas: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data.map((armaData: IArma) => new Arma(armaData));
  }

  async fetchMapas(): Promise<Mapa[]> {
    const response = await fetch(`${this.baseUrl}/maps?language=${this.language}`);
    if (!response.ok) {
      throw new Error(`Falha ao buscar mapas: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data.map((mapaData: MapaApiData) => new Mapa(mapaData));
  }
}

export const valorantApiService = new ValorantApiService();