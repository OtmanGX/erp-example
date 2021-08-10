import { Component } from '@angular/core';
import {
  OrdersFacade,
  DetailedOrder,
  DeliveryFacade,
  ProductDraftFacade,
  Sales_Draft_Status_Enum,
} from '@tanglass-erp/store/sales';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { Router } from '@angular/router';
import { JobOrdersFacade } from '@tanglass-erp/store/manufacturing';

@Component({
  selector: 'ngx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent extends ModelCardComponent {
  title = 'Commande CARD';
  glasses_ids;
  data$ = this.facade.loadedOrder$.pipe(takeUntil(this._onDestroy));
  isCardMode: boolean = true;
  isLaunched: boolean;
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
    this.isLaunched = false;
    this.facade.loadOrderById(this.id);
    this.sharedfacade.loadAllShortCompanies();
    this.sharedfacade.loadAllShortWarehouses();
  }
  passData(data: DetailedOrder) {
    data?.draft_status == Sales_Draft_Status_Enum.Lance
      ? (this.isLaunched = true)
      : (this.isLaunched = false);
    return [
      {
        label: 'Infos Générales',
        isToolbar: 'true',
        cols: 4,
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
          { label: 'Status', value: [data?.draft_status], type: 'chips' },
        ],
      },
    ];
  }
  afterComplete() {}
  edit() {
    this.isCardMode = false;
  }
  save() {
    console.log(this.data);
  }
  cancel() {
    this.router.navigate(['/sales/order']);
  }
  print() {
    this.facade.printOrder(this.data);
  }
  launch() {
    let order: DetailedOrder;
    this.productDraftFacade.getProductsGroups().subscribe(
      (data) =>
        (this.glasses_ids = data.glasses.map((data) => ({
          id: data.glass_draft.id,
        })))
    );
    this.data$.subscribe((data) => (order = data));
    this.manufacturingFacade.addJobOrder({
      order_ref: order.ref,
      ids: this.glasses_ids,
    });
  }
}
