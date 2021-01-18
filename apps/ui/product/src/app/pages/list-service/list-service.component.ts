import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopServiceComponent } from './pop-service/pop-service.component';
import { Operations } from '@tanglass-erp/ag-grid';

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
    const dialogRef = this.dialog.open(PopServiceComponent, {
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
