import { IArmaDamageRange } from "./IArmaDamageRange";
import { IWeaponStats } from "./IWeaponStats";

export interface IArma {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string; 
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats?: IWeaponStats
  shopData?: {
    cost: number;
    category: string;
    categoryText: string;
    
  };
  skins: any[]; 
}