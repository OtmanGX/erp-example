import { Component } from "@angular/core";

import { MENU_ITEMS } from "./pages-menu";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

  tabs: any[] = [
    {
      title: "Clients",
      icon: "trending-up-outline",
      route: "//client/list",
    },
    {
      title: "Contacts",
      icon: "paper-plane-outline",
      responsive: true,
      route: ["//contacts/list"],
    },
    {
      title: "Produits",
      icon: "flash-outline",
      responsive: true,
      route: "//produit/list",
    },
  ];
}
