import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDraftFacade, Amount, PaymentsFacade } from "@tanglass-erp/store/sales";
import { debounceTime } from 'rxjs/operators';
import { displayedAmountsColumns } from "../../../utils/grid-headers";
import { Column, ColumnType } from '@tanglass-erp/material';
import { MatDialog } from '@angular/material/dialog';
import { PopPaymentComponent } from "../payment/payment.component";
import { Operations } from '@tanglass-erp/ag-grid';

@Component({
  selector: 'ngx-amounts-order',
  templateUrl: './amounts-order.component.html',
  styleUrls: ['./amounts-order.component.scss']
})
export class AmountsOrderComponent implements OnInit {
  displayedColumns: Array<Column> = displayedAmountsColumns;
  dataSource: Amount[] = [];
  amountsByCompanySub = this.productFacade.amounts$;
  payments

  @ViewChild(MatTable, { static: true }) table: MatTable<Amount>;
  @Input() isCardMode: boolean = false;
  @Input() order_id: number;

  constructor(
    private dialog: MatDialog,
    private productFacade: ProductDraftFacade,
    private paymentFacade: PaymentsFacade,
  ) { }

  ngOnInit(): void {
    this.order_id ? this.paymentFacade.loadOrderPayments(this.order_id) : null;
    this.productFacade.amounts$.subscribe(
      data => this.dataSource = data ?? []
    )
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
          this.paymentFacade.addPayment({...result,order_id:this.order_id})
        } else { } // Update
      }
    });
  }
}
