import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { ListGlassComponent } from './list-glass/list-glass.component';
import { ListAccessoiresComponent } from './list-accessoires/list-accessoires.component';
import { ListConsommableComponent } from './list-consommable/list-consommable.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { CoupeComponent } from './list-services/coupe/coupe.component';
import { BordPolisComponent } from './list-services/bord-polis/bord-polis.component';
import { TrousComponent } from './list-services/trous/trous.component';
import { EncochesComponent } from './list-services/encoches/encoches.component';
import { TracageComponent } from './list-services/tracage/tracage.component';
import { BiseautageComponent } from './list-services/biseautage/biseautage.component';
import { TrempageComponent } from './list-services/trempage/trempage.component';
import { BombageComponent } from './list-services/bombage/bombage.component';
import { SablageComponent } from './list-services/sablage/sablage.component';
import { GravageComponent } from './list-services/gravage/gravage.component';
import { AluminiumComponent } from './list-services/aluminium/aluminium.component';
import { PoseComponent } from './list-services/pose/pose.component';
import { BaguetteComponent } from './list-consommable/baguette/baguette.component';
import { FilmComponent } from './list-consommable/film/film.component';
import { PiecesComponent } from './list-consommable/pieces/pieces.component';
import { ListSystemeApparentComponent } from './list-systemeApparent/list-systeme-apparent.component';
import { PeintureComponent } from './list-consommable/peinture/peinture.component';
import { UchannelComponent } from './list-consommable/uchannel/uchannel.component';
import { TubeInoxComponent } from './list-consommable/tube-inox/tube-inox.component';

const routes: Routes = [
{
  path: '',
  component: ProduitComponent,
  children: [
    {
      path: 'Listglass',
      component: ListGlassComponent ,
    },
    {
      path: 'ListSystemeApparent',
      component: ListSystemeApparentComponent ,
    },
    {
      path: 'listAccessoires',
      component: ListAccessoiresComponent,
    },
    {
      path: 'listConsommables',
      component: ListConsommableComponent,
    },
    {
      path: 'listServices',
      component: ListServicesComponent,
    },
    {
      path: 'Coupe',
      component: CoupeComponent,
    },
    {
      path: 'BordPolis',
      component: BordPolisComponent,
    },    {
      path: 'Trous',
      component: TrousComponent,
    },    {
      path: 'Encoches',
      component: EncochesComponent,
    },    {
      path: 'Traçage',
      component: TracageComponent,
    },    {
      path: 'Biseautage',
      component: BiseautageComponent,
    },    {
      path: 'Trempage',
      component: TrempageComponent,
    },
    {
      path: 'Bombage',
      component: BombageComponent,
    }, {
      path: 'Sablage',
      component: SablageComponent,
    },
    {
      path: 'Gravage',
      component: GravageComponent,
    },
    {
      path: 'Aluminium',
      component: AluminiumComponent,
    },
    {
      path: 'Pose',
      component: PoseComponent,
    },
    {
      path: 'Baguette',
      component: BaguetteComponent,
    },
    {
      path: 'FilmStadip',
      component: FilmComponent,
    },
    {
      path: 'Pièces',
      component: PiecesComponent,
    },
    {
      path: 'TubeInox',
      component: TubeInoxComponent,
    },
    {
      path: 'Peinture',
      component: PeintureComponent,
    },
    {
      path: 'Uchannel',
      component: UchannelComponent,
    },
  ],
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
