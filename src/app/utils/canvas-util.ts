export class CanvasUtilService {

  static getCanvas(elementId: string): HTMLCanvasElement {
    return document.getElementById(elementId) as HTMLCanvasElement;
  }
}
