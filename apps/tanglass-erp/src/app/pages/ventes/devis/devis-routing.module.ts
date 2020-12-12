import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevisComponent} from './devis.component'
import { ListDevisComponent } from './list-devis/list-devis.component';
import {FicheDevisComponent} from './fiche-devis/fiche-devis.component'
const routes: Routes = [
  {
    path: '',
    component: DevisComponent,
children:[
  {
    path:'list',
    component:ListDevisComponent
  },
  {
    path:'create',
    component:FicheDevisComponent,
  },
  {
    path: "fiche/:id",
    component: FicheDevisComponent,
  },
]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisRoutingModule { }
