import { IMapa } from '../Interfaces/IMapa';
import { IMapaCallout } from '../Interfaces/IMapaCallout';
import { IPesquisavel } from '../Interfaces/IPesquisavel';

export class Mapa implements IMapa, IPesquisavel {
  private _uuid: string;
  private _displayName: string;
  private _coordinates: string;
  private _splash: string;
  private _callouts: IMapaCallout[];
  private _assetPath: string;
  private _displayIcon: string; 
  private _listViewIcon: string; 
  private _xMultiplier: number; 
  private _yMultiplier: number; 
  private _xScalarMultiplier: number; 
  private _yScalarMultiplier: number; 
  private _narrativeDescription?: string; 
  private _tacticalDescription?: string; 

  constructor(data: IMapa) {
    this._uuid = data.uuid;
    this._displayName = data.displayName || ''; 
    this._coordinates = data.coordinates || ''; 
    this._splash = data.splash;
    this._callouts = data.callouts || []; 
    this._assetPath = data.assetPath;
    this._narrativeDescription = data.narrativeDescription; 
    this._tacticalDescription = data.tacticalDescription; 
    this._displayIcon = data.displayIcon;
    this._listViewIcon = data.listViewIcon;
    this._xMultiplier = data.xMultiplier;
    this._yMultiplier = data.yMultiplier;
    this._xScalarMultiplier = data.xScalarMultiplier;
    this._yScalarMultiplier = data.yScalarMultiplier;
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

  public get splash(): string { 
    return this._splash; 
  }

  public get callouts(): IMapaCallout[] { 
    return this._callouts; 
  } 

  public get assetPath(): string { 
    return this._assetPath; 
  }

  public get displayIcon(): string { 
    return this._displayIcon; 
  }

  public get listViewIcon(): string { 
    return this._listViewIcon; 
  }

  public get xMultiplier(): number { 
    return this._xMultiplier; 
  }

  public get yMultiplier(): number { 
    return this._yMultiplier; 
  }

  public get xScalarMultiplier(): number { 
    return this._xScalarMultiplier; 
  }

  public get yScalarMultiplier(): number { 
    return this._yScalarMultiplier; 
  }

  public get narrativeDescription(): string | undefined {
    return this._narrativeDescription; 
  } 

  public get tacticalDescription(): string | undefined { 
    return this._tacticalDescription; 
  } 

  public pesquisarPorCriterio(criterio: string): boolean {
    const lowerCaseCriterio = criterio.toLowerCase().trim(); 
    if (lowerCaseCriterio === '') {
      return false;
    }
    return this.displayName.toLowerCase().includes(lowerCaseCriterio);
  }
}