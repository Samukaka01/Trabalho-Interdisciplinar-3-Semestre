export class Habilidade {
  public uuid: string;
  public displayName: string;
  public description: string;
  public displayIcon: string;
  public slot: string;

  constructor(data: { uuid?: string; displayName: string; description: string; displayIcon: string; slot: string; }) {
    this.uuid = data.uuid || this.generateUuid();
    this.displayName = data.displayName;
    this.description = data.description;
    this.displayIcon = data.displayIcon;
    this.slot = data.slot;
  }

  private generateUuid(): string {
    return crypto.randomUUID();
  }
}