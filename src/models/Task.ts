export class Task {
  public id: string;
  public description: string;
  public order: number;
  public laneId?: string;

  constructor(id: string, description: string, order: number, laneId?: string) {
    this.id = id;
    this.description = description;
    this.order = order;
    this.laneId = laneId;
  }
}
