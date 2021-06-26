import { Component } from '@angular/core';
import { OrdersFacade, Order } from "@tanglass-erp/store/sales";
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { SharedFacade } from '@tanglass-erp/store/shared';
@Component({
  selector: 'ngx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent extends ModelCardComponent {
  title = "Commande CARD";
  id: string;
  data$ = this.facade.loadedOrders$
    .pipe(takeUntil(this._onDestroy));
  isCardMode: boolean = true;
  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: OrdersFacade,
    private sharedfacade: SharedFacade,
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade.loadOrderById(this.id);
    this.sharedfacade.loadAllShortCompanies();
    this.sharedfacade.loadAllShortWarehouses();
  }

  passData(data:Order) {
    return [
      {
        label: "Infos Générales",
        isToolbar: "true",
        cols: 3,
        icons: [{ name: "edit", tooltip: "Modification", event: 'editMain' }],
        data:
          [
            { label: 'Réf ', value: data?.ref },
            { label: 'ID.', value: data?.id },
            { label: 'Société', value: data?.company.name },
            { label: 'Client', value: data?.customer.name },
            { label: 'Tél', value: data?.customer.phone },
            { label: 'Date', value: data?.date },
            { label: 'Date limite ', value: data?.deadline, },
            { label: 'Livraison', value: [data?.delivery_status], type: 'chips' },
            { label: 'Paiement', value: [data?.payment_status], type: 'chips' },
          ]
      },
    ];
  }
  afterComplete() { }
  edit() {
    this.isCardMode = false;
  }
  save() { }
  cancel() { }
  print() {
    this.facade.printOrder(this.data);
  }
  launch() { }
}

