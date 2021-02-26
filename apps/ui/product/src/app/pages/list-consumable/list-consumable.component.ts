import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { PopConsumableComponent } from './pop-consumable/pop-consumable.component';
import { ConsumableHeaders } from '../../utils/grid-headers';
import { Consumable } from '@tanglass-erp/core/product';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import * as ConsumableActions from '@TanglassStore/product/lib/actions/consumable.actions';
import * as ConsumableSelectors from '@TanglassStore/product/lib/selectors/consumable.selectors';

@Component({
  selector: 'ngx-list-consumable',
  templateUrl: './list-consumable.component.html',
  styleUrls: ['./list-consumable.component.scss'],
})
export class ListConsumableComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  data$: Observable<Consumable[]>=this.store.select(ConsumableSelectors.getAllConsumables);;

  agGrid: AgGridAngular;
  columnId = 'id';
  columnDefs;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.store.dispatch(ConsumableActions.loadConsumables());

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
      ...ConsumableHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopConsumableComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {
          this.store.dispatch(ConsumableActions.addConsumable({consumable : result}));

        } else {} // Update
      }
    });
  }
}
