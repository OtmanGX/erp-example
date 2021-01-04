import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView } from '@tanglass-erp/ag-grid';
import { MainGridComponent } from '@tanglass-erp/ag-grid';
import { PopServiceGlasseComponent } from './pop-service-glasse/pop-service-glasse.component';
import { ServiceGlasse } from '@tanglass-erp/core/product';


@Component({
  selector: 'ngx-list-consumable',
  templateUrl: './list-service-glasse.component.html',
  styleUrls: ['./list-service-glasse.component.scss'],
})
export class ListServiceGlasseComponent implements OnInit, GridView {
  @ViewChild(MainGridComponent) mainGrid;
  data$: Observable<ServiceGlasse[]>;
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
      ...ServiceGlasse.columnDefs(),
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(data = {}, action = 'add') {
    const dialogRef = this.dialog.open(PopServiceGlasseComponent, {
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
