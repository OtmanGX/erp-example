import { Component, OnInit } from '@angular/core';
import { OrdersFacade, Order } from "@tanglass-erp/store/sales";
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { SharedFacade } from '@tanglass-erp/store/shared';
@Component({
  selector: 'ngx-quotation-card',
  templateUrl: './quotation-card.component.html',
  styleUrls: ['./quotation-card.component.scss']
})
export class QuotationCardComponent extends ModelCardComponent {
  title = "Fiche Devis ";
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
            { label: 'ID.', value: data?.id },
            { label: 'Société', value: data?.company.name },
            { label: 'Client', value: data?.customer.name },
            { label: 'Tél', value: data?.customer.phone },
            { label: 'Date', value: data?.date },
            { label: 'Date limite ', value: data?.deadline, },
            { label: 'Livraison', value: [data?.delivery_status], type: 'chips' },
            { label: 'Paiement', value: [data?.payment_status], type: 'chips' },
            { label: 'Réf ', value: data?.draft_id },
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
  print() { }
  launch() { }
}

