import { Component, Input, OnInit } from '@angular/core';
import { CardConfig } from '../../../interfaces/card-config';

@Component({
  selector: 'ngx-amount-card',
  templateUrl: './amount-card.component.html',
  styleUrls: ['./amount-card.component.scss']
})
export class AmountCardComponent implements OnInit {
  @Input() config: CardConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
