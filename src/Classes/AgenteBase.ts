import { IAgente } from '../Interfaces/IAgente'; 
import { IPesquisavel } from '../Interfaces/IPesquisavel';
import { Habilidade } from './Habilidade'; 
import { IRoleData } from '../Interfaces/IRoleData';
import { IAbilityData } from '../Interfaces/IAbilityData'; 


abstract class AgenteBase implements IAgente, IPesquisavel {
  private _uuid: string;
  private _displayName: string;
  private _description: string;
  private _displayIcon: string;
  private _fullPortrait: string;
  private _background: string;
  private _abilitiesData: IAbilityData[]; 
  private _habilidadesInstanciadas: Habilidade[]; 
  protected _role: IRoleData;

  constructor(data: IAgente) {
    this._uuid = data.uuid;
    this._displayName = data.displayName;
    this._description = data.description;
    this._displayIcon = data.displayIcon;
    this._fullPortrait = data.fullPortrait;
    this._background = data.background;
    this._abilitiesData = data.abilities; 
    this._habilidadesInstanciadas = data.abilities.map(abilData => new Habilidade(abilData)); 
    this._role = data.role;
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

  public get abilities(): IAbilityData[] { 
    return this._abilitiesData; 
  }

  public get habilidades(): Habilidade[] { 
    return this._habilidadesInstanciadas; 
  } 

  public get role(): IRoleData { 
    return this._role; 
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