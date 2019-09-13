import {Point} from './primitive/primitive.model';

export interface RenderSettings {
  renderPosition: RenderPosition;
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

export class RenderPosition {
  position: Position;
  offset: Point;
}

export enum Position {
  Front,
  Top,
  Right
}

export interface AxisRotate {
  angleX: number;
  angleY: number;
  angleZ: number;
}
