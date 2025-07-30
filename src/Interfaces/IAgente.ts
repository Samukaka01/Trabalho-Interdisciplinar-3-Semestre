export interface IAgente {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  background: string;
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }[];
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
}