import { CalloutApiData } from "./CalloutApiData";

export type MapaApiData = {
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarBias: number;
  yScalarBias: number;
  
  callouts: CalloutApiData[] | null; 
};