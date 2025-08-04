import { AgenteApiData } from './AgenteApiData';
import AgenteBase from './AgenteBase';

export class Duelista extends AgenteBase {
  constructor(data: AgenteApiData) {
    super(data);
  }

  public getCaracteristicaUnicaDoPapel(): string {
    return `Este é um Agente **Duelista**, responsável por iniciar os confrontos e conseguir abates para o time. Eles são agressivos e focados em entrar no local da bomba.`;
  }
}