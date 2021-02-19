import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  Output,
  EventEmitter
} from '@angular/core';
import { GroupItems } from '../../interfaces/group-items';
import { TypeTemplateDirective } from '../../directives/type-template';

@Component({
  selector: 'ngx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements AfterContentInit {
  @Input() data: Array<GroupItems>;
  @Input() gap = "50px";
  @Output() triggerEvent = new EventEmitter<{action: string, data?: any}>();

  @ContentChildren(TypeTemplateDirective)
  private typeTemplateDirectives: QueryList<TypeTemplateDirective>;
  private templates: any;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.templates = {};
    this.typeTemplateDirectives.forEach(item => {
      this.templates[item.typeTemplate] = item.templateRef;
    });
  }
  triggerAction(action: string, data?) {
    this.triggerEvent.emit({
      action,
      data
    });
  }
}
