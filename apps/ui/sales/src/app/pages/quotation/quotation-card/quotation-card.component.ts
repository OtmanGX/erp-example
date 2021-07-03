import { Component, OnInit } from '@angular/core';
import { QuotationFacade, Quotation } from "@tanglass-erp/store/sales";
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
  data$ = this.facade.loadedQuotation$
    .pipe(takeUntil(this._onDestroy));
  isCardMode: boolean = true;
  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: QuotationFacade,
    private sharedfacade: SharedFacade,
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade.loadQuotationById(this.id);
    this.sharedfacade.loadAllShortCompanies();
    this.sharedfacade.loadAllShortWarehouses();
  }

  passData(data:Quotation) {
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
          ]
      },
    ];
  }
  afterComplete() { }
  edit() {
    this.isCardMode = false;
  }
  save() { }
  cancel() {
    this.isCardMode = true
   }
  print() { }
  transformToOrder() { }
}

