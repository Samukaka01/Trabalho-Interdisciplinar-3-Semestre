import { AgenteApiData } from './AgenteApiData';
import AgenteBase from './AgenteBase';

export class Sentinela extends AgenteBase {
  constructor(data: AgenteApiData) {
    super(data); 
  }

  public getCaracteristicaUnicaDoPapel(): string {
    return `Este é um Agente **Sentinela**, especialista em bloquear áreas, dar suporte e vigiar flancos. Eles controlam o mapa e garantem a segurança do time.`;
  }
}