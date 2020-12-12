import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPrintModule} from 'ngx-print';

import { CommandesRoutingModule } from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
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
  NbTreeGridModule,
  NbAutocompleteModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { LocalSharedModule } from "../shared/local-shared.module";
import { FicheCommandeComponent } from './fiche/fiche-commande.component';
import { FormCommandeComponent } from './fiche/form-commande/form-commande.component';
import { PrintingComponent } from './printing/printing.component';

@NgModule({
  declarations: [CommandesComponent, ListCommandesComponent, FicheCommandeComponent, FormCommandeComponent, PrintingComponent],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    LocalSharedModule,
    NbTreeGridModule,
    NbAutocompleteModule,
    NgxPrintModule,

  ]
})
export class CommandesModule { }
