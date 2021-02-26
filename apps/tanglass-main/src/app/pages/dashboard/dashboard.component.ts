import { Component, OnInit } from '@angular/core';
import { CardConfig } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statCardList: CardConfig[] = [
    {
      icon: "people",
      title: "New Leads",
      subtitle: "3,050",
      color: "primary"
    },
    {
      icon: "attach_money",
      title: "Ventes de cette semaine",
      subtitle: "$80,500",
      color: "primary"
    },
    {
      icon: "store",
      title: "État de stock",
      subtitle: "Surplus de stock de 8,5% ",
      color: "accent"
    },
    {
      icon: "shopping_cart",
      title: "Commandes",
      subtitle: "305 Commandes de transfert",
      color: "accent"
    }
  ];
  trending_list: CardConfig[] = [
    {
      icon: "trending_up",
      title: "Les utilisateurs actifs",
      subtitle: "10.8k",
      percentage: "+21",
      color: "primary",
      down: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
