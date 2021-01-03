import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView } from '@tanglass-erp/ag-grid';
import { MainGridComponent } from '@tanglass-erp/ag-grid';
import { PopAccessoriesComponent } from './pop-accessories/pop-accessories.component';
import { Accessory } from '@TanglassCore/models/produit/accessoire.model';


@Component({
  selector: 'ngx-list-consumable',
  templateUrl: './list-accessories.component.html',
  styleUrls: ['./list-accessories.component.scss'],
})
export class ListAccessoriesComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  data$: Observable<Accessory[]>;
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
      ...Accessory.columnDefs(),
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(data = {}, action = 'add') {
    const dialogRef = this.dialog.open(PopAccessoriesComponent, {
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
