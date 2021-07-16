import { Component } from '@angular/core';
import {
  OrdersFacade,
  Order,
  DeliveryFacade,
  ProductDraftFacade,
} from '@tanglass-erp/store/sales';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { Product } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';
import {
  JobOrdersFacade,
} from '@tanglass-erp/store/manufacturing';

@Component({
  selector: 'ngx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent extends ModelCardComponent {
  title = 'Commande CARD';
  dataSource_bis = [];
  glasses_ids;
  displayedColumns = Product;
  data$ = this.facade.loadedOrder$.pipe(takeUntil(this._onDestroy));
  isCardMode: boolean = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: OrdersFacade,
    private router: Router,
    protected deliveryFacade: DeliveryFacade,
    protected sharedfacade: SharedFacade,
    protected productDraftFacade: ProductDraftFacade,
    protected manufacturingFacade: JobOrdersFacade
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade.loadOrderById(this.id);
    this.sharedfacade.loadAllShortCompanies();
    this.sharedfacade.loadAllShortWarehouses();
    this.productDraftFacade
      .getProductsGroups()
      .subscribe(
        (data) => (
          (this.dataSource_bis = data.repeated),
          (this.glasses_ids = data.glasses.map((data) => ({ id: data.id })))
        )
      );
  }

  passData(data: Order) {
    return [
      {
        label: 'Infos Générales',
        isToolbar: 'true',
        cols: 3,
        icons: [{ name: 'edit', tooltip: 'Modification', event: 'editMain' }],
        data: [
          { label: 'Réf ', value: data?.ref },
          { label: 'ID.', value: data?.id },
          { label: 'Société', value: data?.company.name },
          { label: 'Client', value: data?.customer.name },
          { label: 'Tél', value: data?.customer.phone },
          { label: 'Date', value: data?.date },
          { label: 'Date limite ', value: data?.deadline },
          { label: 'Livraison', value: [data?.delivery_status], type: 'chips' },
          { label: 'Paiement', value: [data?.payment_status], type: 'chips' },
        ],
      },
    ];
  }
  afterComplete() {}
  edit() {
    this.isCardMode = false;
  }
  save() {}
  cancel() {
    this.router.navigate(['/sales/order']);
  }
  print() {
    this.facade.printOrder(this.data);
  }
  launch(type?: string) {
    let order: Order;
    this.data$.subscribe((data) => (order = data));
    this.manufacturingFacade.launchJobOrder(
      {
        order_ref: order.ref,
        ids: this.glasses_ids,
      },
      type
    );
  }
}
