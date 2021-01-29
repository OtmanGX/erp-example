import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { ServiceConfig } from '@tanglass-erp/core/product';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { ServiceHeaders } from '../../../utils/grid-headers';
import { PopServiceComponent } from './pop-service/pop-service.component';
import * as ServiceGroupActions from '@TanglassStore/product/lib/actions/servicesConfig.actions';
import { getSelectedServiceConfig } from '@TanglassStore/product/lib/selectors/serviceConfig.selectors';

@Component({
  selector: 'ngx-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit, GridView {
  // AgGrid
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';

  // Card
  title = 'Service';
  id: string;
  //data$: Observable<any> = of();
  data$ = this.store.select(getSelectedServiceConfig);

  data: ServiceConfig;
  passedData: any;

  constructor(private store: Store<AppState>,
              private location: Location,
              public dialog: MatDialog) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch(loadServiceById);
    this.store.dispatch(ServiceGroupActions.loadServiceConfigById({id: this.id}));

    this.data$.subscribe(value => {
      this.data = value;
      this.passedData = [
        { label: 'Nom', value: value?.name },
        { label: 'Etiquette d\'usine', value: value?.labelFactory },
        { label: 'Paramètres', value: null },
      ];
    });
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...ServiceHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }
  eventTriggering(event: any) {
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

  openDialog(action: any, data: any) {
    const params = this.data?.params ?? '[]'; // params to parse and extract
    const dataToPass = {service: data, params: params};
      const dialogRef = this.dialog.open(PopServiceComponent, {
        width: '1000px',
        panelClass: 'panel-dialog',
        data: dataToPass,
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Store action dispatching
          if (action === Operations.add) {
          } else {}
        }
      });
    }

}
