import { Component, Input } from '@angular/core';
import {
  GridPermissions,
  GridView,
  MainGridComponent,
  Operations,
} from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PaymentsHeaders } from '@TanglassUi/cash-register/utils/grid-headers';
import { MatDialog } from '@angular/material/dialog';
import { DialogPaymentComponent } from '@TanglassUi/cash-register/components/dialog-payment/dialog-payment.component';
import { CashBoxFacade } from '@tanglass-erp/store/cash-register';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-payments-grid',
  templateUrl: './payments-grid.component.html',
  styleUrls: ['./payments-grid.component.scss'],
})
export class PaymentsGridComponent implements GridView {
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  @Input() data$;
  mainGrid: MainGridComponent;
  permissions: GridPermissions = {
    delete: false,
    update: false,
  };

  constructor(
    public dialog: MatDialog,
    private cashBoxFacade: CashBoxFacade,
    private route: ActivatedRoute) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(DialogPaymentComponent, {
      width: '800px',
      panelClass: 'panel-dialog',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        if (action === Operations.add) {
          this.cashBoxFacade.addPayment(result);
        }
    });
  }

  eventTriggering(event) {
    switch (event.action) {
      case Operations.add:
        this.openDialog(event.action, {
          payment: {
            ...event.data,
            payment_method: 'Espèce',
          },
          salepoint: this.route.snapshot.paramMap.get('salepoint')
        });
        break;
    }
  }

  ngAfterViewInit(): void {}

  setColumnDefs(): void {
    this.columnDefs = PaymentsHeaders;
  }
}
