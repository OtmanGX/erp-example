import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderProductionMockService } from '@TanglassCore/mock/production/productionOrder.mock.service';
import {
  ProductionOrder,
  AddedValue,
} from '@TanglassCore/models/production/productionOrder.model';

@Component({
  selector: 'ngx-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  id: number;
  order: ProductionOrder;
  content: string = '';
  linesArray: string[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly ordersService: OrderProductionMockService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.ordersService.getOneById(this.id).subscribe({
        next: (order: ProductionOrder) => (this.order = order),
      });
    }
    this.getPrinting();
  }

  getPrinting() {
    console.log(this.order);
    this.order.articles.forEach((item) => {
      let firstPart =
        item.glass.item.libelle +
        ': ' +
        item.addedValues
          .map((addedValue) => addedValue.item.libelleUsine)
          .reduce(function (a, b) {
            return a + ' + ' + b;
          });
      this.linesArray.push(firstPart);
      let secondPart =
        +item.glass.largeur * 100 +
        ' x ' +
        item.glass.hauteur * 100 +
        ' -----------> ' +
        item.glass.pieces;
      this.linesArray.push(secondPart);
    });

    /**

       this.order.articles.forEach((item)=>{
       let part=item.glass.item.libelle+': '+item.addedValues.map((addedValue)=>addedValue.item.libelleUsine).reduce(function(a,b){return a+ ' + '+b})+'<br/>'
        part+= +item.glass.largeur*100+' x '+ item.glass.hauteur*100+' -----------> '+item.glass.pieces+'<br/>';
        this.content+=part
})*/
  }
}
