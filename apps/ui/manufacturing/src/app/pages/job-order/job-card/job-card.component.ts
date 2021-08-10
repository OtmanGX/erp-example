import { Component ,ViewChild} from '@angular/core';
import {
  JobOrdersFacade,
  JobOrder,
  JobItem,
} from '@tanglass-erp/store/manufacturing';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
import { JobProgressComponent } from "@TanglassUi/manufacturing/components/job-progress/job-progress.component";
@Component({
  selector: 'ngx-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent extends ModelCardComponent {
  data$ = this.facade.selectedJobOrder$;
  products: JobItem[];
  withGeneratedBarCodes: boolean = false;
  selectedProduct: JobItem;
  glass_id:string;
  @ViewChild('progress', { read: JobProgressComponent }) progress:JobProgressComponent;

  constructor(
    public activatedRoute: ActivatedRoute,
    protected facade: JobOrdersFacade,
  ) {
    super(activatedRoute);
  }

  dispatch(): void {
    this.facade
      .adaptSelectedJobOrder()
      .subscribe((data) => (this.products = data.items));
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

  checkProgress(Glass_id?: string): void {

  }
  selectProduct(product:JobItem): void {
    this.selectedProduct = product;
    this.glass_id=product.id
  }
 
}
