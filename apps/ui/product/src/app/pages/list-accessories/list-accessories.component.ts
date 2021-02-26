import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { PopAccessoriesComponent } from './pop-accessories/pop-accessories.component';
import { AccessoryHeaders } from '../../utils/grid-headers';
import * as AccessorySelectors from '@TanglassStore/product/lib/selectors/accessory.selectors';
import * as AccessoryActions from '@TanglassStore/product/lib/actions/accessory.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'ngx-list-consumable',
  templateUrl: './list-accessories.component.html',
  styleUrls: ['./list-accessories.component.scss'],
})
export class ListAccessoriesComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  data$ = this.store.select(AccessorySelectors.getAllAccessories);
  agGrid: AgGridAngular;
  columnId = 'id';
  columnDefs;

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.store.dispatch(AccessoryActions.loadAccessories());
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  eventTriggering(event: any) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
      case Operations.update:
        this.openDialog(event.action, event.data);
        break;
      case Operations.delete:
        break;
      // ...
    }
  }

  setColumnDefs() {
    this.columnDefs = [
      ...AccessoryHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn" },
    ];
  }



  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopAccessoriesComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {

          this.store.dispatch(AccessoryActions.addAccessory({ accessory: result }));
        } else { } // Update
      }
    });
  }
}
