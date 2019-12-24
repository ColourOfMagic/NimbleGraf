import {Line, Point} from '../model/primitive/primitive.model';
import {AxisRotate} from '../model/base-model';

export class RotateUtil {
  static rotatePoint(point: Point, rotate: AxisRotate) {
    const angleX = this.toRadAngle(rotate.angleX);
    const angleY = this.toRadAngle(rotate.angleY);
    const angleZ = this.toRadAngle(rotate.angleZ);
    const matrixX = [
      [1, 0, 0],
      [0, Math.cos(angleX), -Math.sin(angleX)],
      [0, Math.sin(angleX), Math.cos(angleX)],
    ];
    const matrixY = [
      [Math.cos(angleY), 0, Math.sin(angleY)],
      [0, 1, 0],
      [-Math.sin(angleY), 0, Math.cos(angleY)],
    ];
    const matrixZ = [
      [Math.cos(angleZ), -Math.sin(angleZ), 0],
      [Math.sin(angleZ), Math.cos(angleZ), 0],
      [0, 0, 1],
    ];
    const resultMatrix = this.multiple(matrixZ, this.multiple(matrixX, matrixY));

    const pointArray = point.toArray();
    const rez = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rez[i] += resultMatrix[i][j] * pointArray[j];
      }
    }

    return new Point(rez[0], rez[1], rez[2]);
  }

  static rotateLine(line: Line, rotate: AxisRotate) {
    return new Line(this.rotatePoint(line.point1, rotate), this.rotatePoint(line.point2, rotate));
  }

  static toRadAngle(angle: number): number {
    return angle * Math.PI / 180;
  }

  static multiple(m1, m2) {
    const result = [];
    for (let i = 0; i < m1.length; i++) {
      result[i] = [];
      for (let j = 0; j < m2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < m1[0].length; k++) {
          sum += m1[i][k] * m2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

}

