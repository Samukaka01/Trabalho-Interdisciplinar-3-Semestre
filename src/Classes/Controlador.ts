import { IAgente } from '../Interfaces/IAgente';
import AgenteBase from './AgenteBase';

export class Controlador extends AgenteBase {
  constructor(data: IAgente) {
    super(data);
  }

  public getCaracteristicaUnicaDoPapel(): string {
    return `Este é um Agente **Controlador**, que usa suas habilidades para moldar o campo de batalha, bloquear linhas de visão e criar oportunidades estratégicas para o time.`;
  }
}