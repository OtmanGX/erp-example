import { Component, OnInit } from '@angular/core';
import { CardConfig } from '@tanglass-erp/material';
import { CashBoxFacade } from '@tanglass-erp/store/cash-register';
import { CashBox } from '@tanglass-erp/core/cash-register';
import { ActivatedRoute } from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'ngx-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit {
  cashbox_id: number;
  salepoint_id: string;

  cashBox: CashBox;
  cashBox$ = this.cashBoxFacade.selectedCashBox$;
  get payments$() {
    return of(this.cashBox?.payments);
  }
  balanceCard: CardConfig =
    {
      icon: "account_balance",
      title: "Solde",
      subtitle: "0 MAD",
      color: "primary",
      down: false,
      withAction:false,
    };

  constructor(
    private cashBoxFacade:CashBoxFacade,
    private route:ActivatedRoute
  ) {
  this.salepoint_id = this.route.snapshot.paramMap.get('salepoint');
  this.cashbox_id = parseInt(this.route.snapshot.paramMap.get('cashbox'), 10);
  }

  ngOnInit(): void {
    this.cashBox$.subscribe(value => {
      this.cashBox = value;
      this.balanceCard.subtitle = value?.balance.toFixed(2) + ' MAD';
    });
    this.cashBoxFacade.loadCashBoxById(this.cashbox_id, this.salepoint_id);
  }

}
