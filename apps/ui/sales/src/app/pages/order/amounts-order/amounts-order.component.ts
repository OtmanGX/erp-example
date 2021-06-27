import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDraftFacade, Amount } from "@tanglass-erp/store/sales";
import { displayedAmountsColumns } from "../../../utils/grid-headers";
import { Column } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-amounts-order',
  templateUrl: './amounts-order.component.html',
  styleUrls: ['./amounts-order.component.scss']
})
export class AmountsOrderComponent implements OnInit {
  displayedColumns: Array<Column>=displayedAmountsColumns;

  dataSource: Amount[] = [];
  amountsByCompanySub = this.productFacade.amounts$;
  payments
  order_id

  @ViewChild(MatTable, { static: true }) table: MatTable<Amount>;
  @Input() isCardMode: boolean ;

  constructor(
    private productFacade: ProductDraftFacade,
  ) { }

  ngOnInit(): void {
    this.productFacade.amounts$.subscribe(
      data => this.dataSource = data ?? []
    )
  }




}