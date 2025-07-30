import { IArmaDamageRange } from "./IArmaDamageRange";

export interface IArma {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string; 
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats?: { 
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    reloadTimeSeconds: number;
    
    shotgunPelletCount?: number;
    wallPenetration: string;
    firstBulletAccuracy: number;
    damageRanges: IArmaDamageRange[];
  };
  shopData?: {
    cost: number;
    category: string;
    categoryText: string;
    
  };
  skins: any[]; 
}