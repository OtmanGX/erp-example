import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-amount-card',
  templateUrl: './amount-card.component.html',
  styleUrls: ['./amount-card.component.scss']
})
export class AmountCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  @Input() link: string;
  constructor() { }

  ngOnInit(): void {
  }

}
