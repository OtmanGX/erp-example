import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopProviderComponent } from './pop-provider/pop-provider.component';
import { ProviderHeaders } from '../../utils/grid-headers';

import * as ProviderActions from '@TanglassStore/contact/lib/actions/provider.actions';
import * as ProviderSelectors from '@TanglassStore/contact/lib/selectors/provider.selectors';


@Component({
  selector: 'tanglass-erp-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.store.select(ProviderSelectors.getAllProviders);

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(ProviderActions.loadProviders());
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopProviderComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        if (action === Operations.add) {
          // It will return 3 forms
          // Main Informations Form
          // Adresses Form
          // Contacts Form
          this.store.dispatch(ProviderActions.addProvider({provider: result}))
        } else {}
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    console.log(event);
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

  setColumnDefs(): void {
    this.columnDefs = [
      ...ProviderHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
