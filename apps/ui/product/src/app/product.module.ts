import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListGlassComponent } from './list-glass/list-glass.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PopGlassComponent } from './list-glass/pop-glass/pop-glass.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: ProductComponent,
  children: [
    {
      path: '',
      redirectTo: 'Listglass',
      pathMatch: 'full'
    },
    {
      path: 'Listglass',
      component: ListGlassComponent ,
    },
  ]},
];
  // {
  //   path: 'Listglass',
  //   component: ListGlassComponent ,
  // },
  // {
  //   path: 'ListSystemeApparent',
  //   component: ListSystemeApparentComponent ,
  // },
  // {
  //   path: 'listAccessoires',
  //   component: ListAccessoiresComponent,
  // },
  // {
  //   path: 'listConsommables',
  //   component: ListConsommableComponent,
  // },
  // {
  //   path: 'listServices',
  //   component: ListServicesComponent,
  // },
  // {
  //   path: 'Coupe',
  //   component: CoupeComponent,
  // },
  // {
  //   path: 'BordPolis',
  //   component: BordPolisComponent,
  // },    {
  //   path: 'Trous',
  //   component: TrousComponent,
  // },    {
  //   path: 'Encoches',
  //   component: EncochesComponent,
  // },    {
  //   path: 'Traçage',
  //   component: TracageComponent,
  // },    {
  //   path: 'Biseautage',
  //   component: BiseautageComponent,
  // },    {
  //   path: 'Trempage',
  //   component: TrempageComponent,
  // },
  // {
  //   path: 'Bombage',
  //   component: BombageComponent,
  // }, {
  //   path: 'Sablage',
  //   component: SablageComponent,
  // },
  // {
  //   path: 'Gravage',
  //   component: GravageComponent,
  // },
  // {
  //   path: 'Aluminium',
  //   component: AluminiumComponent,
  // },
  // {
  //   path: 'Pose',
  //   component: PoseComponent,
  // },
  // {
  //   path: 'Baguette',
  //   component: BaguetteComponent,
  // },
  // {
  //   path: 'FilmStadip',
  //   component: FilmComponent,
  // },
  // {
  //   path: 'Pièces',
  //   component: PiecesComponent,
  // },
  // {
  //   path: 'TubeInox',
  //   component: TubeInoxComponent,
  // },
  // {
  //   path: 'Peinture',
  //   component: PeintureComponent,
  // },
  // {
  //   path: 'Uchannel',
  //   component: UchannelComponent,
  // },

@NgModule({
  declarations: [ProductComponent, ListGlassComponent, PopGlassComponent],
  imports: [
    RouterModule.forChild(routes),
    MainAgGridModule,
  ]
})
export class ProductModule { }
