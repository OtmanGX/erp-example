import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDraftFacade, Amount } from "@tanglass-erp/store/sales";
import { debounceTime } from 'rxjs/operators';
import {displayedAmountsColumns  } from "../../../utils/grid-headers";
import {Column, ColumnType } from '@tanglass-erp/material';
import { MatDialog } from '@angular/material/dialog';
import {PopPaymentComponent  } from "../payment/payment.component";
import { Operations } from '@tanglass-erp/ag-grid';

@Component({
  selector: 'ngx-amounts-order',
  templateUrl: './amounts-order.component.html',
  styleUrls: ['./amounts-order.component.scss']
})
export class AmountsOrderComponent implements OnInit {
  displayedColumns: Array<Column> =displayedAmountsColumns;
  dataSource: Amount[];
  amountsByCompanySub = this.facade.amounts$;
  @ViewChild(MatTable, { static: true }) table: MatTable<Amount>;
  @Input() isCardMode: boolean = false;

  constructor(
    private dialog: MatDialog,
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
 
  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopPaymentComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {

        } else { } // Update
      }
    });
  }

}
