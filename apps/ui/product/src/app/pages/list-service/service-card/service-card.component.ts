import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { ServiceHeaders, } from '../../../utils/grid-headers';
import { PopServiceComponent } from './pop-service/pop-service.component';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
import { DetailedServiceConfig, ServiceConfig } from '@TanglassStore/product/index';
import * as ServiceGroupActions from '@TanglassStore/product/lib/actions/servicesConfig.actions';
import { getSelectedServiceConfig } from '@TanglassStore/product/lib/selectors/serviceConfig.selectors';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent extends ModelCardComponent implements GridView {
  // AgGrid
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';

  // Card
  title = 'Service';
  data$ = this.store.select(getSelectedServiceConfig)
    .pipe(filter(data => !!data));
  services$: any;
  data: ServiceConfig;

  constructor(private store: Store<AppState>,
              public route: ActivatedRoute,
              public dialog: MatDialog) {
    super(route);
    this.setColumnDefs();

  }


  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  afterComplete() {
  }

  dispatch(): void {
    this.store.dispatch(ServiceGroupActions.loadServiceConfigById({id: this.id}));
    // this.store.dispatch(loadServiceById({id: this.id}));
  }

  passData(data: DetailedServiceConfig) {
    this.services$ = of(data.services.map(service => service));
    return [
      { label: 'Nom', value: data?.name },
      { label: 'Etiquette d\'usine', value: data?.labelFactory },
      { label: 'Paramètres', value: data?.params },
    ];
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
            console.log(result);
            this.store.dispatch(ServiceGroupActions.addNewItem({
              item : {
                service: { serviceConfigid : this.id },
                product: result.product
              }}));
          } else {}
        }
      });
    }

}
