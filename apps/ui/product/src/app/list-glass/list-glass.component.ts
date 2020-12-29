import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { GridView } from '@tanglass-erp/ag-grid';
import { MainGridComponent } from '@tanglass-erp/ag-grid';
import { PopGlassComponent } from './pop-glass/pop-glass.component';
import { MatièrePremière } from '@TanglassCore/models/produit/matiere_premiere.model';


@Component({
  selector: 'ngx-list-matierePremiere',
  templateUrl: './list-glass.component.html',
  styleUrls: ['./list-glass.component.scss'],
})
export class ListGlassComponent implements OnInit, GridView, AfterViewInit {
  @ViewChild(MainGridComponent) mainGrid;
  data$: Observable<MatièrePremière[]>;
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
  }

  getMp() {
    this.data$ = this.matierePremiereService.getAll();
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

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  setColumnDefs() {
    this.columnDefs = [
      { field: 'code', headerName: 'Code', type: "textColumn"},
      { field: 'libelle', headerName: 'Libellé', type: "textColumn"},
      { field: 'type', headerName: 'Type'},
      { field: 'color', headerName: 'Couleur'},
      { field: 'prix_default', headerName: 'Prix de Vente', type: "numberColumn"},
      { field: 'prix_max', headerName: 'Prix max', type: "numberColumn"},
      { field: 'prix_min', headerName: 'Prix min', type: "numberColumn"},
      { field: 'prix_Achat', headerName: 'Prix d\'Achat', type: "numberColumn"},
      { field: 'companie', headerName: 'Société'},
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }


  openDialog(data = {}, action = 'add') {
    const dialogRef = this.dialog.open(PopGlassComponent, {
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
