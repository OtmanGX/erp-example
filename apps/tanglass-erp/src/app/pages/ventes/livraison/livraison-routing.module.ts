import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LivraisonComponent} from './livraison.component'
import { CreateBonLivraisonComponent} from "./create-bon-livraison/create-bon-livraison.component";
import { ListLivraisonsComponent} from "./list-livraisons/list-livraisons.component";


const routes: Routes = [

  {
    path: '',
    component: LivraisonComponent,
children:[
  {
    path:'list',
    component:ListLivraisonsComponent
  },
  {
    path:'create',
    component:CreateBonLivraisonComponent
  },

]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutingModule { }
