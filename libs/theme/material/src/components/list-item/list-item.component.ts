import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList, TemplateRef, ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { CardItem } from '../../interfaces/card-item';

@Component({
  selector: 'ngx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() data: Array<CardItem>;
  @Input() gap = "50px";
  @ContentChild(TemplateRef) templateVariable: TemplateRef<any>;
  constructor() {
  }

  ngOnInit(): void {
    // this.viewContainer.insert(this.allViews[0]);
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.templateVariable);
    console.log(this.templateVariable.elementRef);

  }

}
