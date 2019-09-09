export interface RenderSettings {
  position: RenderPosition;
}

export interface PositionedPoint {
  x: number;
  y: number;
}

export interface PositionedLine {
  p1: PositionedPoint;
  p2: PositionedPoint;
}

export enum RenderPosition {
  Front,
  Top,
  Right
}
