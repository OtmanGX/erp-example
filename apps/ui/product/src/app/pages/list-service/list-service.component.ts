import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Operations } from '@tanglass-erp/ag-grid';
import { PopServiceConfigComponent } from './pop-service-config/pop-service-config.component';

@Component({
  selector: 'ngx-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  data$: Observable<any>;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(action, data= {}) {
    const dialogRef = this.dialog.open(PopServiceConfigComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
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
