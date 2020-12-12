import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClientComponent } from "./client.component";
import { CreateClientComponent } from "./create-client/create-client.component";
import { ListClientComponent } from "./list-client/list-client.component";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "create",
        component: CreateClientComponent,
      },
      {
        path: "list",
        component: ListClientComponent,
      },
      {
        path: "fiche/:id",
        component: CreateClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
