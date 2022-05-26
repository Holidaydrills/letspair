export class Task {
  public id: string;
  public description: string;
  public order: number;
  public laneId?: string;
  public isCurrentlyDragged?: boolean;

  constructor(
    id: string,
    description: string,
    order: number,
    laneId?: string,
    isCurrentlyDragged?: boolean
  ) {
    this.id = id;
    this.description = description;
    this.order = order;
    this.laneId = laneId;
    this.isCurrentlyDragged = isCurrentlyDragged;
  }
}
