import { IAgente } from '../Interfaces/IAgente';
import AgenteBase from './AgenteBase';

export class Duelista extends AgenteBase {
  constructor(data: IAgente) {
    super(data);
  }

  public getCaracteristicaUnicaDoPapel(): string {
    return `Este é um Agente **Duelista**, responsável por iniciar os confrontos e conseguir abates para o time. Eles são agressivos e focados em entrar no local da bomba.`;
  }
}