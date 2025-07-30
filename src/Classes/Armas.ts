import { IArma } from '../Interfaces/IArma';
import { IArmaDamageRange } from '../Interfaces/IArmaDamageRange';
import { IPesquisavel } from '../Interfaces/IPesquisavel';

export class Arma implements IArma, IPesquisavel {
  private _uuid: string;
  private _displayName: string;
  private _category: string;
  private _defaultSkinUuid: string; 
  private _displayIcon: string;
  private _killStreamIcon: string;
  private _assetPath: string;
  private _weaponStats?: { 
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    reloadTimeSeconds: number;
    shotgunPelletCount?: number;
    wallPenetration: string;
    firstBulletAccuracy: number;
    damageRanges: IArmaDamageRange[];
  };
  private _shopData?: {
    cost: number;
    category: string;
    categoryText: string;
  }; 
  private _skins: any[]; 

  constructor(data: IArma) {
    this._uuid = data.uuid;
    this._displayName = data.displayName;
    this._category = data.category;
    this._defaultSkinUuid = data.defaultSkinUuid;
    this._displayIcon = data.displayIcon;
    this._killStreamIcon = data.killStreamIcon;
    this._assetPath = data.assetPath;
    this._weaponStats = data.weaponStats; 
    this._shopData = data.shopData;
    this._skins = data.skins;
  }

  
  public get uuid(): string { 
    return this._uuid; 
  }

  public get displayName(): string { 
    return this._displayName; 
  }

  public get category(): string { 
    return this._category; 
  }

  public get defaultSkinUuid(): string { 
    return this._defaultSkinUuid; 
  }

  public get displayIcon(): string { 
    return this._displayIcon; 
  }

  public get killStreamIcon(): string { 
    return this._killStreamIcon; 
  }

  public get assetPath(): string { 
    return this._assetPath; 
  }

  public get weaponStats(): { 
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    reloadTimeSeconds: number;
    shotgunPelletCount?: number;
    wallPenetration: string;
    firstBulletAccuracy: number;
    damageRanges: IArmaDamageRange[];
  } | undefined { 
    return this._weaponStats; 
  }

  public get shopData(): {
    cost: number;
    category: string;
    categoryText: string;
  } | undefined { 
    return this._shopData; 
  } 
  
  public get skins(): any[] { 
    return this._skins; 
  }

  public pesquisarPorCriterio(criterio: string): boolean {
    const lowerCaseCriterio = criterio.toLowerCase().trim();
    
    if (lowerCaseCriterio === '') {
      return false; 
    }
    return this.displayName.toLowerCase().includes(lowerCaseCriterio) ||
           this.category.toLowerCase().includes(lowerCaseCriterio);
  }
}