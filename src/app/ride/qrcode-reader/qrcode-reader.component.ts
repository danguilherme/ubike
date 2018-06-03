import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InstascanService } from '../../core/instascan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ub-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.scss'],
})
export class QrcodeReaderComponent implements OnInit {
  @ViewChild('video') videoEl: ElementRef;

  constructor(private instascan: InstascanService, private router: Router) {}

  ngOnInit() {
    this.instascan
      .scan(this.videoEl.nativeElement)
      .then(content => this.onScan(content))
      .catch(console.log);
  }

  onScan(id: string) {
    this.instascan.stop();
    // TODO: start ride, go to timer
    this.router.navigate(['login']);
  }

  cancel() {
    this.instascan.stop();
  }
}
