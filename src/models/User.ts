export class User {
  public id: string;
  public name: string;
  public order: number;
  public laneId?: string;

  constructor(id: string, name: string, order: number, laneId?: string) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.laneId = laneId;
  }
}
