import { AgenteApiData } from './AgenteApiData';
import AgenteBase from './AgenteBase';

export class Iniciador extends AgenteBase {
  constructor(data: AgenteApiData) {
    super(data);
  }

  public getCaracteristicaUnicaDoPapel(): string {
    return `Este é um Agente **Iniciador**, encarregado de revelar a posição dos inimigos e desorganizá-los para facilitar a entrada do time.`;
  }
}