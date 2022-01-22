export class User {
  public id: string;
  public name: string;
  public laneId: string;
  public isOut: boolean;

  constructor(id: string, name: string, laneId?: string, isOut?: boolean) {
    this.id = id;
    this.name = name;
    this.laneId = laneId ?? "";
    this.isOut = isOut ?? false;
  }
}
