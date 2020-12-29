import { AfterViewInit } from '@angular/core';
import { MainGridComponent } from '../components/main-grid/main-grid.component';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

export interface GridView extends AfterViewInit {
  mainGrid: MainGridComponent;
  data$: Observable<any>;
  agGrid: AgGridAngular;
  columnId: string;
  columnDefs;
  setColumnDefs(): void;
  eventTriggering(event);
  openDialog?(action, data);
}
