import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-fiche-card',
  templateUrl: './fiche-card.component.html',
  styleUrls: ['./fiche-card.component.scss']
})
export class FicheCardComponent {
  @Input() title: string = '';
  @Input() data: Array<any>;
  @Input() gap = "50px";
  constructor() { }

}
