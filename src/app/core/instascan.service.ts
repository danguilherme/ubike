import { Injectable } from '@angular/core';
import * as Instascan from 'instascan';

@Injectable({
  providedIn: 'root',
})
export class InstascanService {
  private _scanner;

  constructor() {}

  scan(element: HTMLVideoElement): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this._scanner) this.stop();

      this._scanner = new Instascan.Scanner({
        video: element,
        scanPeriod: 5,
        mirror: false,
      });

      this._scanner.addListener('scan', (content: string) => resolve(content));

      Instascan.Camera.getCameras()
        .then((cameras: Camera[]) => {
          try {
            if (cameras.length > 0) {
              const backCamera = cameras.find(c => this.isBackCamera(c));
              this._scanner.start(backCamera || cameras[0]);
            } else {
              reject('No cameras found.');
            }
          } catch (e) {
            return reject(e);
          }
        })
        .catch(function(e) {
          reject(e);
        });
    });
  }

  stop() {
    if (this._scanner) {
      this._scanner.stop();
      this._scanner = undefined;
    }
  }

  private isBackCamera(camera: Camera) {
    return (camera.name || '').toLocaleLowerCase().includes('back');
  }
}

export interface Camera {
  id: string;
  name: string;
}
