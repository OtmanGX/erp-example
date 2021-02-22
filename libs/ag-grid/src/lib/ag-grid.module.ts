import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { MatEditComponent } from './components/mat-edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from '@tanglass-erp/material';
import 'ag-grid-enterprise';
import { ExportBottomSheetComponent } from './components/export-bottom-sheet/export-bottom-sheet.component';
import { LinkComponent } from './components/link.component';
import { RouterModule } from '@angular/router';

export const MODULES = [
  MaterialModule,
  AgGridModule
];

@NgModule({
  declarations: [MainGridComponent, MatEditComponent, ExportBottomSheetComponent, LinkComponent],
  imports: [...MODULES, AgGridModule.withComponents(
    [MatEditComponent, LinkComponent]), RouterModule],
  exports: [...MODULES, MainGridComponent],
  providers: [DatePipe]
})
export class MainAgGridModule {

}
