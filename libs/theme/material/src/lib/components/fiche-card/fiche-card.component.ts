import { Component, Input,  Output,
  EventEmitter } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'ngx-fiche-card',
  templateUrl: './fiche-card.component.html',
  styleUrls: ['./fiche-card.component.scss']
})
export class FicheCardComponent {
  @Input() title: string = '';
  @Input() data: Array<any>;
  @Input() gap = "50px";
  @Input() withToolbar = true;
  @Output() triggerEvent = new EventEmitter<{action: string, data?: any}>();

  constructor() { }
  triggerAction(action: string, data?) {
    this.triggerEvent.emit({
      action,
      data
    });
  }
  // TransPorting event from child to parent !!
  eventTriggering(event) {
    this.triggerAction(event);
  }
}
