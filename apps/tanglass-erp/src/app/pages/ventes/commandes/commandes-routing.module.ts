import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandesComponent} from './commandes.component'
import { ListCommandesComponent } from "./list-commandes/list-commandes.component";
import { FicheCommandeComponent } from "./fiche/fiche-commande.component";
import { PrintingComponent } from "./printing/printing.component";

const routes: Routes = [

  {
    path: '',
    component: CommandesComponent,

    children:[
      {
        path:'list',
        component:ListCommandesComponent
      },
      {
        path:'create',
        component:FicheCommandeComponent
      },
     
      {
        path: "fiche/:id",
        component: FicheCommandeComponent,
      },
      {
        path: "fiche/print/:id",
        component: PrintingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
