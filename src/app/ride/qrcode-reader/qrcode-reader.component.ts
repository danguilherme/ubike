import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';

import { InstascanService } from '../../core/instascan.service';

@Component({
  selector: 'ub-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.scss'],
})
export class QrcodeReaderComponent implements OnInit {
  @ViewChild('video') videoEl: ElementRef;

  @Output() scan = new EventEmitter();

  constructor(
    private location: Location,
    private instascan: InstascanService,
  ) {}

  ngOnInit() {
    this.instascan
      .scan(this.videoEl.nativeElement)
      .then(content => this.onScan(content))
      .catch(console.error);
  }

  onScan(content: string) {
    this.instascan.stop();
    this.scan.emit(content);
  }

  cancel() {
    this.instascan.stop();
    this.location.back();
  }
}
