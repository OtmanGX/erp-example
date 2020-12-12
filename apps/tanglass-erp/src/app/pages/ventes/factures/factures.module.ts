import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceFicheComponent } from './invoice-fiche/invoice-fiche.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import {
  NbActionsModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbFormFieldModule,
  NbTooltipModule,
  NbButtonModule,
  NbDatepickerModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
@NgModule({
  declarations: [FacturesComponent, InvoicesListComponent, InvoiceFicheComponent],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbButtonModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    DragDropModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule
  ]
})
export class FacturesModule { }
