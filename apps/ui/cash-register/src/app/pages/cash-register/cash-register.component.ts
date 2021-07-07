import { Component, OnInit } from '@angular/core';
import { CardConfig } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit {

  balance: CardConfig =
    {
      icon: "account_balance",
      title: "Solde",
      subtitle: "10000 MAD",
      color: "primary",
      down: false,
      withAction:false,
    }
    ;
  constructor() { }

  ngOnInit(): void {
  }

}
