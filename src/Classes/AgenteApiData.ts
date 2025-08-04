import { FuncaoApiData } from './FuncaoApiData';
import { HabilidadeApiData } from './HabilidadeApiData';

export type AgenteApiData = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  background: string;
  role: FuncaoApiData;             
  abilities: HabilidadeApiData[];  
};