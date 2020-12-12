import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputRenderComponent } from "./input-render-component/input-render.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  NbActionsModule,
  NbCardModule,
  NbIconModule,
  NbTooltipModule,
  NbButtonModule,
  NbSelectModule,
  NbLayoutModule,
  NbContextMenuModule,
  NbTreeGridModule,
  NbAccordionModule,
  NbFormFieldModule,
  NbInputModule,
} from "@nebular/theme";

import { Ng2SmartTableModule } from "ng2-smart-table";
import { PickMatierePremiereComponent } from "./pick-matierePremiere/pick-matierePremiere.component";
import { SelectRenderComponent } from "./for-select-render-component/select-render.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { UniSelectRenderComponent } from "./select-render-component/uni-select-render.component";
import { ActionsRenderComponent } from "./actions-render-component/actions-render.component";
import { SharedModule } from "../../shared/shared.module";
import { NbUserModule } from "@nebular/theme";
import { InputPriceRenderComponent } from "./input-render-component/input-price-render.component";
import { PopWarnComponent } from "./pop-warn/pop-warn.component";
import { PickAccessoiresComponent } from "./pick-accessoires/pick-accessoires.component";
import { CoupeComponent } from "./pick-services/components/coupe.component";
import { BordPolisComponent } from "./pick-services/components/bord-polis.component";
import { AluminiumComponent } from "./pick-services/components/aluminium.component";
import { BombageComponent } from "./pick-services/components/bombage.component";
import { EncocheComponent } from "./pick-services/components/encoche.component";
import { GravageComponent } from "./pick-services/components/gravage.component";
import { SablageComponent } from "./pick-services/components/sablage.component";
import { TrempageComponent } from "./pick-services/components/trempage.component";
import { TrousComponent } from "./pick-services/components/trous.component";
import { PoseComponent } from "./pick-services/components/pose.component";
import { InputDimensionsRenderComponent } from "./input-render-dimensions/input-render-dimensions.component";
import { BaseServiceComponent } from './pick-services/components/base-service.component';
import { PickServiceComponent } from './pick-services/pick-service.component';
import {BiseautageComponent}  from './pick-services/components/biseautage.component';
import { SelectDiametreComponent } from './for-select-render-component/select-diametre.component';
import { PickConsommablesComponent } from './pick-consommables/pick-consommables.component';
import { PickVerreClientComponent } from './pick-verre-client/pick-verre-client.component';
import { BaseConsommableComponent } from './pick-consommables/components/base-consommable.component';
import { BaguetteComponent } from './pick-consommables/components/baguette.component';
import { FilmComponent } from './pick-consommables/components/film.component';
import { PieceComponent } from './pick-consommables/components/piece.component';
import { PickSystemApparentComponent } from './pick-system-apparent/pick-system-apparent.component';
import { PeintureComponent } from './pick-consommables/components/peinture.component';
import { UchannelComponent } from './pick-consommables/components/uchannel.component';
import { TubeInoxComponent } from './pick-consommables/components/tube-inox.component';
@NgModule({
  declarations: [
    InputRenderComponent,
    PickMatierePremiereComponent,
    SelectRenderComponent,
    UniSelectRenderComponent,
    ActionsRenderComponent,
    InputPriceRenderComponent,
    PopWarnComponent,
    PickAccessoiresComponent,
    CoupeComponent,
    BordPolisComponent,
    AluminiumComponent,
    BombageComponent,
    EncocheComponent,
    GravageComponent,
    SablageComponent,
    TrempageComponent,
    TrousComponent,
    PoseComponent,
    InputDimensionsRenderComponent,
    BaseServiceComponent,
    PickServiceComponent,
    BiseautageComponent,
    SelectDiametreComponent,
    PickConsommablesComponent,
    PickVerreClientComponent,
    BaseConsommableComponent,
    BaguetteComponent,
    FilmComponent,
    PieceComponent,
    PickSystemApparentComponent,
    PeintureComponent,
    UchannelComponent,
    TubeInoxComponent,
  ],
  imports: [
    CommonModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbTooltipModule,
    NbButtonModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    RouterModule,
    NbSelectModule,
    NbLayoutModule,
    NbContextMenuModule,
    NbTreeGridModule,
    NbAccordionModule,
    NbUserModule,
    NbFormFieldModule,
    NbInputModule,
  ],
  exports: [
    PickMatierePremiereComponent,
    SelectRenderComponent,
    UniSelectRenderComponent,
    PopWarnComponent,
    PickAccessoiresComponent,
    CoupeComponent,
    BordPolisComponent,
    AluminiumComponent,
    BombageComponent,
    EncocheComponent,
    GravageComponent,
    SablageComponent,
    TrempageComponent,
    TrousComponent,
    PoseComponent,
    InputRenderComponent,
    InputDimensionsRenderComponent,
    BaseServiceComponent,
    PickServiceComponent,
    PickConsommablesComponent,
    PickVerreClientComponent,
    BaguetteComponent,
    PickSystemApparentComponent,


  ],
})
export class LocalSharedModule {}
