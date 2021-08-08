import { Component ,OnDestroy} from '@angular/core';
import {
  JobOrdersFacade,
  JobOrder,
  JobItem,
} from '@tanglass-erp/store/manufacturing';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent extends ModelCardComponent implements OnDestroy{
  data$ = this.facade.selectedJobOrder$;
  products: JobItem[];
  withGeneratedBarCodes: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: JobOrdersFacade,
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade
      .adaptSelectedJobOrder()
      .subscribe((data) => (this.products = data?.items));
    this.facade.loadJobOrderById(this.id);
  }

  passData(data: JobOrder) {
    data?.glass_drafts[0].manufacturing_lines.length
      ? (this.withGeneratedBarCodes = true)
      : (this.withGeneratedBarCodes = false);
    return [
      {
        label: 'Infos Générales',
        isToolbar: 'true',
        cols: 4,
        icons: [{ name: 'edit', tooltip: 'Modification', event: 'editMain' }],
        data: [
          { label: 'Réf ', value: data?.ref },
          { label: 'Date', value: data?.date },
          { label: 'Order Ref.', value: data?.order_ref },
          { label: 'Status', value: [data?.status], type: 'chips' },
        ],
      },
    ];
  }
  afterComplete() {}
  print() {}

  edit() {}

  generateBarCodes() {
    this.facade.addManufacturingLines();
    this.withGeneratedBarCodes = false;
  }

  selectProduct(product:JobItem): void {
    this.facade.setSelectedGlass(product.id)
  }
  ngOnDestroy():void{}
}
