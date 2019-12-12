import {Point} from './primitive/primitive.model';

export interface RenderSettings {
  renderPosition: RenderPosition;
  angles: AxisRotate;
  modelSettings: ModelSettings;
  transferParameters: TransferParameters;
  scalingParameters: ScalingParameters;
  axonometricParameters: AxonometricParameters;
  obliqueParameters: ObliqueParameters;
  perspectiveParameters: PerspectiveParameters;
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
  basePoint: Point;
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

export interface ModelSettings {
  length: number;
  width: number;
  height: number;
  cylinderRadius: number;
  quality: number;
}

export interface TransferParameters {
  x: number;
  y: number;
  z: number;
}

export interface ScalingParameters {
  x: number;
  y: number;
  z: number;
}

export interface AxonometricParameters {
  use: boolean;
  psi: number;
  varphi: number;
}

export interface ObliqueParameters {
  use: boolean;
  l: number;
  alpha: number;
}

export interface PerspectiveParameters {
  use: boolean;
  d: number;
}
