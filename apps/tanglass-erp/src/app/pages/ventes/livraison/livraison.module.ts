import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { LivraisonRoutingModule } from './livraison-routing.module';
import { LivraisonComponent } from './livraison.component';
import { CreateBonLivraisonComponent } from './create-bon-livraison/create-bon-livraison.component';
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
import { SharedModule } from "../../shared/shared.module";
import { ListLivraisonsComponent } from './list-livraisons/list-livraisons.component';
import { FormBonLivraisonComponent } from './create-bon-livraison/form-bon-livraison/form-bon-livraison.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { DragDropModule } from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [LivraisonComponent, CreateBonLivraisonComponent, ListLivraisonsComponent, FormBonLivraisonComponent],
  imports: [
    CommonModule,
    LivraisonRoutingModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbButtonModule,
    NbDatepickerModule,
    SharedModule,
    NgMultiSelectDropDownModule,
    DragDropModule,
    ReactiveFormsModule,
    Ng2SmartTableModule

  ]
})
export class LivraisonModule { }
