import { AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView } from '@tanglass-erp/ag-grid';
import { MainGridComponent } from '@tanglass-erp/ag-grid';
import { Consumable } from '../../../../../../libs/tanglass-core/src/models/produit/consommable.model';
import { PopConsumableComponent } from './pop-consumable/pop-consumable.component';


@Component({
  selector: 'ngx-list-consumable',
  templateUrl: './list-consumable.component.html',
  styleUrls: ['./list-consumable.component.scss'],
})
export class ListConsumableComponent implements GridView {
  @ContentChild(MainGridComponent) mainGrid;
  data$: Observable<Consumable[]>;
  agGrid: AgGridAngular;
  columnId = 'id';
  columnDefs;

  constructor(
    private dialog: MatDialog,
  ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.getMp();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  getMp() {
    // this.data$ = this.matierePremiereService.getAll();
  }

  eventTriggering(event: any) {
    // Store Action Dispatching
    console.log(event);
    switch (event.action) {
      case 'add':
      case 'edit':
        this.openDialog(event.data, event.action);
        break;
      case 'delete':
        break;
      // ...
    }
  }

  setColumnDefs() {
    this.columnDefs = [
      ...Consumable.COLUMN_DEFS,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(data = {}, action = 'add') {
    const dialogRef = this.dialog.open(PopConsumableComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === 'add') {

        } else {} // Update
      }
    });
  }
}
