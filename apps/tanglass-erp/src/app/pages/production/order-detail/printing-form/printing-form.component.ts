import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@TanglassCore/models/production/productionOrder.model';

@Component({
  selector: 'ngx-printing-form',
  templateUrl: './printing-form.component.html',
  styleUrls: ['./printing-form.component.scss'],
})
export class PrintingFormComponent implements OnInit {
  @Input() articles: Article[];
  constructor() {}

  ngOnInit(): void {}
}
