import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import * as leftPad from 'left-pad';

@Component({
  selector: 'ub-timer',
  template: `
  {{formattedElapsedTime}}
  `,
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  readonly MS_PER_MINUTE = 60000;
  elapsedTime: number;

  @Input() start: Date;

  get formattedElapsedTime() {
    const p = v => leftPad(v, 2, 0);
    const t = new Date(this.elapsedTime);
    const h = t.getUTCHours();
    const m = t.getUTCMinutes();
    const s = t.getUTCSeconds();
    const hs = h ? `${p(h)}:` : '';
    return `${hs}${p(m)}:${p(s)}`;
  }

  constructor() {}

  ngOnInit() {
    this.updateView();
    interval(1000).subscribe(() => {
      this.updateView();
    });
  }

  updateView(): any {
    const startTime = +this.start;
    const now = +new Date();
    const elapsed = new Date(now - startTime);

    this.elapsedTime = elapsed.valueOf();
  }
}
