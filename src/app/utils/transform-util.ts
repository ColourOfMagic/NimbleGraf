import {Line, Point} from '../model/primitive/primitive.model';
import {
  AxonometricParameters,
  ObliqueParameters,
  PerspectiveParameters,
  RenderSettings,
  ScalingParameters,
  TransferParameters
} from '../model/base-model';
import {RotateUtil} from './rotate-util';
import * as math from 'mathjs';

export class TransformUtil {

  static transform(point3D: Point, settings: RenderSettings): Point {
    const rotatedPoint = RotateUtil.rotatePoint(point3D, settings.angles);
    let result = this.transfer(rotatedPoint, settings.transferParameters);
    result = this.scaling(result, settings.scalingParameters);
    result = this.processAxonometric(result, settings.axonometricParameters);
    result = this.processOblique(result, settings.obliqueParameters);
    result = this.processPerspective(result, settings.perspectiveParameters);
    return result;
  }

  static transfer(point: Point, param: TransferParameters): Point {
    const transferMatrix = math.matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [param.x, param.y, param.z, 1]
    ]);
    const result = math.multiply(point.toLibMatrix(), transferMatrix);
    return Point.toPoint(result._data);
  }

  static scaling(point: Point, param: ScalingParameters): Point {
    const scalingMatrix = math.matrix([
      [param.x, 0, 0, 0],
      [0, param.y, 0, 0],
      [0, 0, param.z, 0],
      [0, 0, 0, 1]
    ]);
    const result = math.multiply(point.toLibMatrix(), scalingMatrix);
    return Point.toPoint(result._data);
  }

  static processAxonometric(point: Point, param: AxonometricParameters): Point {
    const psi = RotateUtil.toRadAngle(param.psi);
    const varphi = RotateUtil.toRadAngle(param.varphi);
    const axonometrixMatrix = math.matrix([
      [Math.cos(psi), Math.sin(varphi) * Math.sin(psi), 0, 0],
      [0, Math.cos(varphi), 0, 0],
      [Math.sin(psi), -Math.sin(varphi) * Math.cos(psi), 0, 0],
      [0, 0, 0, 1]
    ]);
    let resultPoint: Point = null;
    if (param.use) {
      const resultMatrix = math.multiply(point.toLibMatrix(), axonometrixMatrix);
      resultPoint = Point.toPoint(resultMatrix._data);
    } else {
      resultPoint = point;
    }
    return resultPoint;
  }

  static processOblique(point: Point, param: ObliqueParameters): Point {
    const alpha = RotateUtil.toRadAngle(param.alpha);
    const obliqueMatrix = math.matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [param.l * Math.cos(alpha), param.l * Math.sin(alpha), 0, 0],
      [0, 0, 0, 1]
    ]);
    let resultPoint: Point = null;
    if (param.use) {
      const resultMatrix = math.multiply(point.toLibMatrix(), obliqueMatrix);
      resultPoint = Point.toPoint(resultMatrix._data);
    } else {
      resultPoint = point;
    }
    return resultPoint;
  }

  static processPerspective(point: Point, param: PerspectiveParameters): Point {
    const perspectiveMatrix = math.matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 1 / param.d ],
      [0, 0, 0, 0]
    ]);
    let resultPoint: Point = null;
    if (param.use) {
      const resultMatrix = math.multiply(point.toLibMatrix(), perspectiveMatrix);
      resultPoint = Point.toPoint(resultMatrix._data);
    } else {
      resultPoint = point;
    }
    return resultPoint;
  }

  static transformLine(line: Line, settings: RenderSettings): Line {
    return new Line(this.transform(line.point1, settings), this.transform(line.point2, settings));
  }
}
