export class User {
  public id: string;
  public name: string;
  public laneId?: string;
  public notAvailable?: boolean;

  constructor(
    id: string,
    name: string,
    laneId?: string,
    notAvailable?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.laneId = laneId ?? "";
    this.notAvailable = notAvailable ?? false;
  }
}
