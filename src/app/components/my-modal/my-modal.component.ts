import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent {
  @Input() visible = false;

  @Output() visibleChange = new EventEmitter();
}
