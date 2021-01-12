import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-warehouse-accessory-card',
  templateUrl: './warehouse-accessory-card.component.html',
  styleUrls: ['./warehouse-accessory-card.component.scss']
})
export class WarehouseAccessoryCardComponent implements OnInit {
  title = "Entrepôt d'accessoires";
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
