export class CurrentlyDraggedItem {
  public elementType: DraggableElementType;
  public elementId: string;
  public from: DropArea;
  constructor(
    elementType: DraggableElementType,
    elementId: string,
    from: DropArea
  ) {
    this.elementType = elementType;
    this.elementId = elementId;
    this.from = from;
  }
}
