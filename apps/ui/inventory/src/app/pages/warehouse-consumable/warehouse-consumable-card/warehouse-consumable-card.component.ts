import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-warehouse-consumable-card',
  templateUrl: './warehouse-consumable-card.component.html',
  styleUrls: ['./warehouse-consumable-card.component.scss']
})
export class WarehouseConsumableCardComponent implements OnInit {
  title = "Entrepôt consommable";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(value => {
      this.id = value.id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
      ];
    });
  }

  ngOnInit(): void {
  }

}
