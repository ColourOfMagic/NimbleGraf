export interface RenderSettings {
  position: RenderPosition;
}

export interface PositionedPoint {
  x: number;
  y: number;
}

export enum RenderPosition {
  Front,
  Top,
  Right
}
