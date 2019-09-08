import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasUtilService {

  getCanvas(elementId: string): HTMLCanvasElement {
    return document.getElementById(elementId) as HTMLCanvasElement;
  }

}
