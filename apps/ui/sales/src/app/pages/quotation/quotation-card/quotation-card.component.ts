import { Component } from '@angular/core';
import {
  QuotationFacade,
  Quotation,
  ProductDraftFacade,
  Amount,
  DraftFacade,
  Sales_Draft_Status_Enum,
} from '@tanglass-erp/store/sales';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { PopQuotationTransferComponent } from '@TanglassUi/sales/components/pop-quotation-transfer/pop-quotation-transfer.component';
@Component({
  selector: 'ngx-quotation-card',
  templateUrl: './quotation-card.component.html',
  styleUrls: ['./quotation-card.component.scss'],
})
export class QuotationCardComponent extends ModelCardComponent {
  title = 'Fiche Devis ';
  id: string;
  status = Sales_Draft_Status_Enum;
  data$ = this.facade.loadedQuotation$.pipe(takeUntil(this._onDestroy));
  isCardMode: boolean = true;
  constructor(
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute,
    protected facade: QuotationFacade,
    private sharedfacade: SharedFacade,
    private productDraftFacade: ProductDraftFacade,
    private draft_facade: DraftFacade,
    private router: Router
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade.loadQuotationById(this.id);
    this.sharedfacade.loadAllShortCompanies();
    this.sharedfacade.loadAllShortWarehouses();
    this.sharedfacade.loadAllShortSalePoint();
  }

  passData(data: Quotation) {
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
          { label: 'Status ', value: [data?.status], type: 'chips' },
        ],
      },
    ];
  }
  afterComplete() {}
  // edit() {
  //   this.isCardMode = false;
  // }
  save() {}
  cancel() {
    this.router.navigate(['/sales/quotaion']);
  }
  print() {
    this.facade.printQuotation(this.data);
  }
  transformToOrder(): void {
    let amount: Amount;
    let draft_id;
    this.draft_facade.selectedDraft$.subscribe((id) => (draft_id = id));
    this.productDraftFacade.amounts$.subscribe((val) => (amount = val.pop()));
    const dialogRef = this.dialog.open(PopQuotationTransferComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) =>
      this.facade.TransformToOrder({
        ...result,
        draft_id,
        total_ht: amount?.total_ht,
        total_tax: amount?.total_tax,
        total_ttc: amount?.total_ttc,
      })
    );
  }
}
