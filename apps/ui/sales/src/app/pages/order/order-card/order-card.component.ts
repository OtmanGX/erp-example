import { Component, OnInit } from '@angular/core';
import { OrdersFacade,DraftFacade } from "@tanglass-erp/store/sales";
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { of } from "rxjs";
@Component({
  selector: 'ngx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent extends ModelCardComponent {
  title = "Commande CARD";
  id: string;
  data$ = this.facade.orderById$
    .pipe(takeUntil(this._onDestroy));
  draftID$; order_id
  isCardMode: boolean = true;
  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: OrdersFacade,
    private draftFacade: DraftFacade,
    private ordersFacade: OrdersFacade,
    
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade.loadOrderById(this.id);
  }

  passData(data) {
    this.data$.subscribe(
      data => {
        this.draftID$ = data?.draft_id;
        this.order_id = data?.id
      }
    )
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

  ngOnDestroy(): void {
    this.ordersFacade.clearSelection();
    this.draftFacade.clearState();
  }
}

