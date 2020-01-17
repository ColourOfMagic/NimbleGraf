import {EventEmitter} from '@angular/core';

export class MotionService {
  private startX = 0;
  private startY = 0;
  private readonly FRAMES = 20;
  public changed: EventEmitter<Shift> = new EventEmitter<Shift>();

  constructor(private canvas: HTMLElement, private multiplier: number) {
    canvas.addEventListener('mousedown', (event) => this.startEvent(event));
    canvas.addEventListener('mouseup', (event) => this.endEvent(event));
    canvas.addEventListener('touchstart', (event) => this.startEvent(event));
    canvas.addEventListener('touchend', (event) => this.endEvent(event));
  }

  private startEvent(event: UIEvent) {
    this.setPoint(this.getPoint(event));
  }

  private endEvent(event: UIEvent) {
    this.process(this.getPoint(event));
  }

  private setPoint(point: Point) {
    this.startX = point.clientX;
    this.startY = point.clientY;
  }

  private process(point: Point) {
    const xMotion = (point.clientY - this.startY) * this.multiplier;
    const yMotion = (point.clientX - this.startX) * this.multiplier;

    const frames = 10;
    const xStep = xMotion / frames;
    const yStep = yMotion / frames;

    this.animation(0, this.changed, xStep, yStep);
  }

  private getPoint(event: UIEvent): Point {
    if (event instanceof TouchEvent) {
      return event.changedTouches[0];
    } else if (event instanceof MouseEvent) {
      return event;
    }
  }

  private animation(index: number, event: EventEmitter<Shift>, xStep: number, yStep: number) {
    if (index < this.FRAMES) {
      event.emit(new Shift(xStep, yStep));
      setTimeout(() => this.animation(++index, event, xStep, yStep), 50);
    }
  }
}

export class Shift {
  constructor(public x: number, public y: number) {
  }
}

interface Point {
  clientY: number;
  clientX: number;
}
