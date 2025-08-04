import { IPesquisavel } from '../Interfaces/IPesquisavel';
import { MapaApiData } from './MapaApiData'; // Assumindo que CalloutApiData está em MapaApiData.ts
import { CalloutApiData } from './CalloutApiData';

export class Mapa implements IPesquisavel {
  private _uuid: string;
  private _displayName: string;
  private _coordinates: string;
  private _displayIcon: string;
  private _listViewIcon: string;
  private _splash: string;
  private _assetPath: string;
  private _mapUrl: string; 
  private _xMultiplier: number;
  private _yMultiplier: number;
  private _xScalarBias: number;
  private _yScalarBias: number;
  private _callouts: CalloutApiData[] | null;

  constructor(data: MapaApiData) {
    this._uuid = data.uuid;
    this._displayName = data.displayName || '';
    this._coordinates = data.coordinates || '';
    this._displayIcon = data.displayIcon;
    this._listViewIcon = data.listViewIcon;
    this._splash = data.splash;
    this._assetPath = data.assetPath;
    this._mapUrl = data.mapUrl; 
    this._xMultiplier = data.xMultiplier;
    this._yMultiplier = data.yMultiplier;
    this._xScalarBias = data.xScalarBias;
    this._yScalarBias = data.yScalarBias;
    this._callouts = data.callouts || [];
  }


  public get uuid(): string {
    return this._uuid;
  }

  public get displayName(): string {
    return this._displayName;
  }

  public get coordinates(): string {
    return this._coordinates;
  }

  public get displayIcon(): string {
    return this._displayIcon;
  }

  public get listViewIcon(): string {
    return this._listViewIcon;
  }

  public get splash(): string {
    return this._splash;
  }

  public get assetPath(): string {
    return this._assetPath;
  }

  public get mapUrl(): string {
    return this._mapUrl;
  }

  public get xMultiplier(): number {
    return this._xMultiplier;
  }

  public get yMultiplier(): number {
    return this._yMultiplier;
  }

  public get xScalarBias(): number {
    return this._xScalarBias;
  }

  public get yScalarBias(): number {
    return this._yScalarBias;
  }

  public get callouts(): CalloutApiData[] | null {
    return this._callouts;
  }

  public pesquisarPorCriterio(criterio: string): boolean {
    const lowerCaseCriterio = criterio.toLowerCase().trim();
    if (lowerCaseCriterio === '') {
      return false;
    }
    const nomeMapa = this.displayName.toLowerCase();
    const coordenadas = this.coordinates.toLowerCase();

    const calloutsNomes = this.callouts
      ? this.callouts.map(c => c.regionName.toLowerCase()).join(' ')
      : '';

    return (
      nomeMapa.includes(lowerCaseCriterio) ||
      coordenadas.includes(lowerCaseCriterio) ||
      calloutsNomes.includes(lowerCaseCriterio)
    );
  }
}