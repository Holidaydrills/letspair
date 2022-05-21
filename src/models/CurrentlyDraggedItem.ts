export class CurrentlyDraggedItem {
  public elementType: string;
  public elementId: string;
  public sourceArea: string;
  constructor(elementType: string, elementId: string, sourceArea: string) {
    this.elementType = elementType;
    this.elementId = elementId;
    this.sourceArea = sourceArea;
  }
}
