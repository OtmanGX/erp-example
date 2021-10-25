import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Operations } from '@tanglass-erp/ag-grid';
import { PopServiceConfigComponent } from './pop-service-config/pop-service-config.component';
import * as ServiceGroupeSelectors from '@TanglassStore/product/lib/selectors/serviceConfig.selectors';
import * as ServiceGroupeActions from '@TanglassStore/product/lib/actions/servicesConfig.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  data$ = this.store.select(ServiceGroupeSelectors.getAllServiceConfigs);
  viewActions: boolean = false;

  constructor(private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ServiceGroupeActions.loadServiceConfigs());

  }


  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopServiceConfigComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching

        if (action === Operations.add) {
          this.store.dispatch(ServiceGroupeActions.addServiceConfig({ serviceConfig: result }));
        } else { }
      }
    });
  }

}
