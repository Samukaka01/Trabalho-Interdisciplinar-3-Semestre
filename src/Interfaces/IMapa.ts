export interface IMapa {
  uuid: string;
  displayName: string;
  coordinates: string;
  splash: string;
  callouts: IMapaCallout[]; 
  assetPath: string;
  
  displayIcon: string; 
  listViewIcon: string; 
  xMultiplier: number; 
  yMultiplier: number; 
  xScalarMultiplier: number; 
  yScalarMultiplier: number; 
  narrativeDescription?: string; 
  tacticalDescription?: string; 
}


export interface IMapaCallout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  };
}