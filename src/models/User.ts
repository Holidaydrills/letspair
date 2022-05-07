export class User {
  public id: string;
  public name: string;
  public laneId?: string;

  constructor(id: string, name: string, laneId?: string) {
    this.id = id;
    this.name = name;
    this.laneId = laneId;
  }
}
