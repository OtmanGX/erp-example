import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { MatEditComponent } from './components/mat-edit/mat-edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '@tanglass-erp/material';
import 'ag-grid-enterprise';
import { ExportBottomSheetComponent } from './components/export-bottom-sheet/export-bottom-sheet.component';

export const MODULES = [
  MaterialModule,
  AgGridModule
];

@NgModule({
  declarations: [MainGridComponent, MatEditComponent, ExportBottomSheetComponent],
  imports: [...MODULES, AgGridModule.withComponents([MatEditComponent])],
  exports: [...MODULES, AgGridModule, MainGridComponent, MatEditComponent],
  providers: [DatePipe]
})
export class MainAgGridModule {

}
