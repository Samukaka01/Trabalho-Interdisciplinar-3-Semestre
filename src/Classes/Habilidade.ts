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

 
   private gerarUuid(){
    return crypto.randomUUID();

   }
  }