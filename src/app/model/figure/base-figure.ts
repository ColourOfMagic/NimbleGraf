import {Primitive} from '../primitive/primitive.model';

export abstract class BaseFigure {
  color: string;
  primitives: Primitive[];

  protected constructor(color: string) {
    this.color = color;
    this.primitives = [];
  }

  abstract getPrimitives(): Primitive[];
}
