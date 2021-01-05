import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopSalePointsComponent } from '@TanglassUi/management/sale-points/pop-sale-points/pop-sale-points.component';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { SalePoint } from '@tanglass-erp/core/management'


@Component({
  selector: 'ngx-sale-points',
  templateUrl: './sale-points.component.html',
  styleUrls: ['./sale-points.component.scss'],
})
export class SalePointsComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$: Observable<SalePoint[]>;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopSalePointsComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === 'add') {
          this.store.dispatch(SalePointActions.addSalePoint({ salePoint: result }));
        } else {}
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    console.log(event);
    switch (event.action) {
      case 'add':
      case 'edit':
        this.openDialog(event.action, event.data);
        break;
      case 'delete':
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
