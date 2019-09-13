export interface RenderSettings {
  position: RenderPosition;
  angles: AxisRotate;
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

export interface AxisRotate {
  angleX: number;
  angleY: number;
  angleZ: number;
}
