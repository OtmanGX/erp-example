import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopSalePointsComponent } from '@TanglassUi/management/pages/sale-points/pop-sale-points/pop-sale-points.component';
import * as SalePointActions from '@TanglassStore/management/lib/actions/salePoint.actions';
import * as SalePointSelectors from '@TanglassStore/management/lib/selectors/sale-point.selectors';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { SalePointHeaders } from '@TanglassUi/management/utils/grid-headers';


@Component({
  selector: 'tanglass-erp-sale-points',
  templateUrl: './sale-points.component.html',
  styleUrls: ['./sale-points.component.scss'],
})
export class SalePointsComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.store.select(SalePointSelectors.getAllSalePoints);

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(SalePointActions.loadSalePoints());
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
        if (action === Operations.add) {
          this.store.dispatch(SalePointActions.addSalePoint({ salePoint: result }));
        } else if (action === Operations.update) {
          result['id'] = data['id'];
          this.store.dispatch(SalePointActions.updateSalePoint({ salePoint: result }));
        }
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
      case Operations.update:
        this.openDialog(event.action, event.data);
        break;
      case Operations.delete:
        this.store.dispatch(SalePointActions.removeSalePoint({ salePointId: event.data[0].id }));
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...SalePointHeaders,
  { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
