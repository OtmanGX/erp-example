import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DevisRoutingModule } from "./devis-routing.module";
import { DevisComponent } from "./devis.component";
import { ListDevisComponent } from "./list-devis/list-devis.component";
import { FicheDevisComponent } from "./fiche-devis/fiche-devis.component";
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
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { LocalSharedModule } from "../shared/local-shared.module";
import { SharedModule } from "../../shared/shared.module";
import { FormDevisComponent } from "./fiche-devis/form-devis/form-devis.component";

@NgModule({
  declarations: [
    DevisComponent,
    ListDevisComponent,
    FicheDevisComponent,
    FormDevisComponent,
  ],
  imports: [
    CommonModule,
    DevisRoutingModule,
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
    SharedModule,

  ],
})
export class DevisModule {}
