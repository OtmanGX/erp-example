import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDraftFacade, Amount } from "@tanglass-erp/store/sales";
import { debounceTime } from 'rxjs/operators';
import {displayedAmountsColumns  } from "../../../utils/grid-headers";
import {Column, ColumnType } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-amounts-order',
  templateUrl: './amounts-order.component.html',
  styleUrls: ['./amounts-order.component.scss']
})
export class AmountsOrderComponent implements OnInit {
  displayedColumns: Array<Column> =displayedAmountsColumns;
  dataSource: Amount[];
  amountsByCompanySub = this.facade.amounts$;
  isCardMode=false;
  @ViewChild(MatTable, { static: true }) table: MatTable<Amount>;

  constructor(
    private facade: ProductDraftFacade,
  ) { }

  ngOnInit(): void {
    this.facade.amounts$.pipe(debounceTime(500)).subscribe(
      data =>
      {  this.dataSource =data??[] ;}
    )
  }

  ngOnChanges() {
  }

  getTotalCost() {
    // return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
