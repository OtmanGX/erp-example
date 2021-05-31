import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { PopGlasseComponent } from './pop-glasse/pop-glasse.component';
import { GlassHeaders } from '../../utils/grid-headers';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import * as GlassActions from '@TanglassStore/product/lib/actions/glass.actions';
import * as GlassSelectors from '@TanglassStore/product/lib/selectors/glass.selectors';

@Component({
  selector: 'ngx-list-matierePremiere',
  templateUrl: './list-glasse.component.html',
  styleUrls: ['./list-glasse.component.scss'],
})
export class ListGlasseComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;

  data$ = this.store.select(GlassSelectors.getAllGlasses);;

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
    this.store.dispatch(GlassActions.loadGlasses());
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
      ...GlassHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(action , data = {}) {
    const dialogRef = this.dialog.open(PopGlasseComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {
          this.store.dispatch(GlassActions.addGlass({glass : result}));

        } else {}
      }
    });
  }
}
