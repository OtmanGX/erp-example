import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-warehouse-glasse-card',
  templateUrl: './warehouse-glasse-card.component.html',
  styleUrls: ['./warehouse-glasse-card.component.scss']
})
export class WarehouseGlasseCardComponent implements OnInit {
  title = "Entrepôt de verre";
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
