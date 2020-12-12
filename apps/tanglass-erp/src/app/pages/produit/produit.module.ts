import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProduitRoutingModule } from "./produit-routing.module";
import { ProduitComponent } from "./produit.component";
import { ListGlassComponent } from "./list-glass/list-glass.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbLayoutModule,
  NbFormFieldModule,
  NbTooltipModule,
  NbAccordionModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ListServicesComponent } from "./list-services/list-services.component";
import { ListAccessoiresComponent } from "./list-accessoires/list-accessoires.component";
import { ListConsommableComponent } from "./list-consommable/list-consommable.component";
import { PopAccessoireComponent } from "./list-accessoires/pop-accessoire/pop-accessoire.component";
import { PopGlassComponent } from "./list-glass/pop-glass/pop-glass.component";
import { AccessoireRenderComponent } from "./list-accessoires/accessoire-render.component";
import { SharedModule } from "../shared/shared.module";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { CoupeComponent } from "./list-services/coupe/coupe.component";
import { BordPolisComponent } from "./list-services/bord-polis/bord-polis.component";
import { TrousComponent } from "./list-services/trous/trous.component";
import { EncochesComponent } from "./list-services/encoches/encoches.component";
import { TracageComponent } from "./list-services/tracage/tracage.component";
import { BiseautageComponent } from "./list-services/biseautage/biseautage.component";
import { TrempageComponent } from "./list-services/trempage/trempage.component";
import { BombageComponent } from "./list-services/bombage/bombage.component";
import { SablageComponent } from "./list-services/sablage/sablage.component";
import { GravageComponent } from "./list-services/gravage/gravage.component";
import { AluminiumComponent } from "./list-services/aluminium/aluminium.component";
import { PopCoupeComponent } from "./list-services/coupe/pop-coupe/pop-coupe.component";
import { PopTrousComponent } from "./list-services/trous/pop-trous/pop-trous.component";
import { PopBombageComponent } from "./list-services/bombage/pop-bombage/pop-bombage.component";
import { PopBiseautageComponent } from "./list-services/biseautage/pop-biseautage/pop-biseautage.component";
import { PopEncochesComponent } from "./list-services/encoches/pop-encoches/pop-encoches.component";
import { PopTrempageComponent } from "./list-services/trempage/pop-trempage/pop-trempage.component";
import { PopAluminiumComponent } from "./list-services/aluminium/pop-aluminium/pop-aluminium.component";
import { PopGravageComponent } from "./list-services/gravage/pop-gravage/pop-gravage.component";
import { PopSablageComponent } from "./list-services/sablage/pop-sablage/pop-sablage.component";
import { PopBordPolisComponent } from "./list-services/bord-polis/pop-bord-polis/pop-bord-polis.component";
import { PoseComponent } from './list-services/pose/pose.component';
import { PopPoseComponent } from './list-services/pose/pop-pose/pop-pose.component';
import { BasedServiceComponent } from "./list-services/based-service.component";
import { BasedConsommableComponent } from './list-consommable/based-consommable.component';
import { ListSystemeApparentComponent } from './list-systemeApparent/list-systeme-apparent.component';
import { PopSystemeApparentComponent } from './list-systemeApparent/pop-systeme-apparent/pop-systeme-apparent.component';
import { BaguetteComponent } from './list-consommable/baguette/baguette.component';
import { FilmComponent } from './list-consommable/film/film.component';
import { PopConsommablePiecesComponent } from './list-consommable/pieces/pop-consommable-pieces/pop-consommable-pieces.component';
import { PopDoubleVitrageComponent } from './list-consommable/film/pop-double-vitrage/pop-double-vitrage.component';
import { PiecesComponent } from './list-consommable/pieces/pieces.component';
import { PopStadipComponent } from './list-consommable/baguette/pop-stadip/pop-stadip.component';
import { TubeInoxComponent } from './list-consommable/tube-inox/tube-inox.component';
import { PeintureComponent } from './list-consommable/peinture/peinture.component';
import { UchannelComponent } from './list-consommable/uchannel/uchannel.component';
import { PopUchannelComponent } from './list-consommable/uchannel/pop-uchannel/pop-uchannel.component';
import { PopPeintureComponent } from './list-consommable/peinture/pop-peinture/pop-peinture.component';
import { PopInoxComponent } from './list-consommable/tube-inox/pop-inox/pop-inox.component';

@NgModule({
  declarations: [
    ProduitComponent,
    ListGlassComponent,
    ListServicesComponent,
    ListAccessoiresComponent,
    ListConsommableComponent,
    PopAccessoireComponent,
    PopGlassComponent,
    AccessoireRenderComponent,
    CoupeComponent,
    BordPolisComponent,
    TrousComponent,
    EncochesComponent,
    TracageComponent,
    BiseautageComponent,
    TrempageComponent,
    BombageComponent,
    SablageComponent,
    GravageComponent,
    AluminiumComponent,
    PopCoupeComponent,
    PopTrousComponent,
    PopBombageComponent,
    PopBiseautageComponent,
    PopEncochesComponent,
    PopTrempageComponent,
    PopAluminiumComponent,
    PopGravageComponent,
    PopSablageComponent,
    PopBordPolisComponent,
    PoseComponent,
    PopPoseComponent,
    BasedServiceComponent,
    BasedConsommableComponent,
    ListSystemeApparentComponent,
    PopSystemeApparentComponent,
    BaguetteComponent,
    FilmComponent,
    PiecesComponent,
    PopDoubleVitrageComponent,
    PopConsommablePiecesComponent,
    PopStadipComponent,
    TubeInoxComponent,
    PeintureComponent,
    UchannelComponent,
    PopUchannelComponent,
    PopPeintureComponent,
    PopInoxComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbTabsetModule,
    NbLayoutModule,
    NbFormFieldModule,
    NbTooltipModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule,
    NbAccordionModule,
  ],
})
export class ProduitModule {}
