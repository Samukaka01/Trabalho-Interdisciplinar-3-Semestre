import { IArmaDamageRange } from "./IArmaDamageRange"; 

export interface IWeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  reloadTimeSeconds: number;
  shotgunPelletCount?: number; 
  wallPenetration: string;
  firstBulletAccuracy: number;
  damageRanges: IArmaDamageRange[];
}