import { HabilidadeApiData } from "./HabilidadeApiData";

export class Habilidade {
  public uuid: string; 
  public displayName: string;
  public description: string;
  public displayIcon: string;
  public slot: string;

  constructor(data: HabilidadeApiData) {
    this.uuid = this.gerarUuid(); 
    this.displayName = data.displayName;
    this.description = data.description;
    this.displayIcon = data.displayIcon;
    this.slot = data.slot;
  }

 
  private gerarUuid(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public getInfoCompleta(): string {
    return `[${this.slot}] ${this.displayName}: ${this.description}`;
  }
}