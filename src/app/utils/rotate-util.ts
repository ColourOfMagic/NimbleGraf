import {Line, Point} from '../model/primitive/primitive.model';

export class RotateUtil {
  static rotateX(point: Point, angle: number) {
    const pointArray = point.toArray();
    const radAngle = -angle * Math.PI / 180;
    const matrix = [
      [1, 0, 0],
      [0, Math.cos(radAngle), -Math.sin(radAngle)],
      [0, Math.sin(radAngle), Math.cos(radAngle)],
    ];
    const rez = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      rez[0] += matrix[0][i] * pointArray[i];
      rez[1] += matrix[1][i] * pointArray[i];
      rez[2] += matrix[2][i] * pointArray[i];
    }
    return new Point(rez[0], rez[1], rez[2]);
  }

  static rotateLineX(line: Line, angle: number) {
    return new Line(this.rotateX(line.point1, angle), this.rotateX(line.point2, angle));
  }
}

