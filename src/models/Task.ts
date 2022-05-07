export class Task {
  public id: string;
  public description: string;
  public laneId?: string;

  constructor(id: string, description: string, laneId?: string) {
    this.id = id;
    this.description = description;
    this.laneId = laneId;
  }
}
