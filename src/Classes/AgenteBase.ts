import { IPesquisavel } from '../Interfaces/IPesquisavel';
import { Habilidade } from './Habilidade';
import { Funcao } from './Funcao';
import { AgenteApiData } from './AgenteApiData';

abstract class AgenteBase implements IPesquisavel {
  private _uuid: string;
  private _displayName: string;
  private _description: string;
  private _displayIcon: string;
  private _fullPortrait: string;
  private _background: string;
  protected _role: Funcao;
  protected _abilities: Habilidade[];


  constructor(data: AgenteApiData) {
    this._uuid = data.uuid;
    this._displayName = data.displayName;
    this._description = data.description;
    this._displayIcon = data.displayIcon;
    this._fullPortrait = data.fullPortrait;
    this._background = data.background;
 
    this._role = new Funcao(data.role);
    this._abilities = data.abilities.map(abilData => new Habilidade(abilData));
  }

  
  public get uuid(): string {
     return this._uuid; 
    }
  public get displayName(): string {
     return this._displayName; 
    }
  public get description(): string {
     return this._description; 
    }
  public get displayIcon(): string {
     return this._displayIcon; 
    }
  public get fullPortrait(): string {
     return this._fullPortrait; 
    }
  public get background(): string {
     return this._background; 
    }

  
  public get role(): Funcao {
     return this._role; 
    }
  public get abilities(): Habilidade[] {
     return this._abilities; 
    }

 
  public getDescricaoPapel(): string {
    return `Este é um agente do tipo ${this.role.displayName}.`;
  }


  public abstract getCaracteristicaUnicaDoPapel(): string;

  
  public pesquisarPorCriterio(criterio: string): boolean {
    const lowerCaseCriterio = criterio.toLowerCase().trim();
    if (lowerCaseCriterio === '') {
      return false;
    }
    const nomeAgente = this.displayName.toLowerCase();
    const nomePapel = this.role.displayName.toLowerCase(); 

    return (
      nomeAgente.includes(lowerCaseCriterio) ||
      nomePapel.includes(lowerCaseCriterio)
    );
  }
}

export default AgenteBase;