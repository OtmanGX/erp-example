import { Component, OnInit, ViewChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView } from '@tanglass-erp/ag-grid';
import { MainGridComponent } from '@tanglass-erp/ag-grid';
import { PopGlasseComponent } from './pop-glasse/pop-glasse.component';
import { Glasse } from '@TanglassCore/models/produit/glasse.model';


@Component({
  selector: 'ngx-list-matierePremiere',
  templateUrl: './list-glasse.component.html',
  styleUrls: ['./list-glasse.component.scss'],
})
export class ListGlasseComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  data$: Observable<Glasse[]>;
  agGrid: AgGridAngular;
  columnId = 'id';
  columnDefs;

  constructor(
    private dialog: MatDialog,
    private matierePremiereService: MatierePremiereMockService
  ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.getMp();
    this.data$ = of([]);
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  getMp() {
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
      ...Glasse.columnDefs(),
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(data = {}, action = 'add') {
    const dialogRef = this.dialog.open(PopGlasseComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === 'add') {
          this.matierePremiereService.addNewOne(result).subscribe(
            value => console.log(value)
          );
        } else {}
      }
    });
  }
}
