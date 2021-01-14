import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() data: Array<any>;
  @Input() gap = "50px";
}
