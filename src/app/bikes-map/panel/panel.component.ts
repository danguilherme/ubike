import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dock } from '../../core/models/dock';

@Component({
  selector: 'ub-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() dock: Dock;
  @Output() select = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
