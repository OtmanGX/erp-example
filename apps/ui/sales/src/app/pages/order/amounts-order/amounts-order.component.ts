import { Component, OnInit, ViewChild, Input ,OnChanges} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDraftFacade, Amount, PaymentsFacade, OrdersFacade } from "@tanglass-erp/store/sales";
import { debounceTime } from 'rxjs/operators';
import { displayedAmountsColumns,displayedAmounts_PaymentsColumns } from "../../../utils/grid-headers";
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
  displayedColumns_CardMode: Array<Column>=displayedAmounts_PaymentsColumns;
  displayedColumns_EditMode: Array<Column>=displayedAmountsColumns;

  dataSource: Amount[] = [];
  amountsByCompanySub = this.productFacade.amounts$;
  payments
  order_id

  @ViewChild(MatTable, { static: true }) table: MatTable<Amount>;
  @Input() isCardMode: boolean ;

  constructor(
    private dialog: MatDialog,
    private productFacade: ProductDraftFacade,
    private paymentFacade: PaymentsFacade,
    private orderFacade:OrdersFacade,
  ) { }

  ngOnInit(): void {
    this.orderFacade.selectedOrderId$.subscribe(id=>this.order_id=id)
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