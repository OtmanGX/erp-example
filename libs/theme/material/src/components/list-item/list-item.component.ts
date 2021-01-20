import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import { CardItem } from '../../interfaces/card-item';
import { TypeTemplateDirective } from '../../directives/type-template';

@Component({
  selector: 'ngx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements AfterContentInit {
  @Input() data: Array<CardItem>;
  @Input() gap = "50px";
  @ContentChildren(TypeTemplateDirective)
    private typeTemplateDirectives: QueryList<TypeTemplateDirective>;
  private templates: any;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.templates = new Object();
    this.typeTemplateDirectives.forEach(item => {
      this.templates[item.typeTemplate] = item.templateRef;
    });
  }

}
