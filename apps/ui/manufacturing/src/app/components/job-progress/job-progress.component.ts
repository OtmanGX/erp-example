import { Component, OnInit, OnChanges, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import {
  JobOrdersFacade,
  JobProduct,
} from '@tanglass-erp/store/manufacturing';
import { Subscription } from 'rxjs';
import { NgxBarcodeComponent } from 'ngx-barcode';
@Component({
  selector: 'ngx-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent implements OnInit, OnDestroy {
  glass: JobProduct;
  dataSub: Subscription;

  @ViewChildren('barcodes') barcodes: QueryList<NgxBarcodeComponent>;

  constructor(protected facade: JobOrdersFacade) {}

  ngOnInit() {
    this.dataSub = this.facade.selectedGlassLine$.subscribe((data) => {
      this.glass = data;
      console.log(data)
    });
  }

  updateState(itemIndex, serviceIndex) {
    const newGlass = JSON.parse(JSON.stringify(this.glass));
    const service = this.glass.manufacturing_lines[itemIndex].services[
      serviceIndex
    ];
    service.isReady
      ? (newGlass.manufacturing_lines[itemIndex].services[
          serviceIndex
        ].isReady = false)
      : (newGlass.manufacturing_lines[itemIndex].services[
          serviceIndex
        ].isReady = true);
    this.facade.updateGlassLine(newGlass);
    this.glass = newGlass;
  }

  confirm() {
    this.facade.updateManufacturingProgress(this.glass.manufacturing_lines);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

  print() {
    const windowUrl = 'about:blank';
    const uniqueName = new Date();
    const windowName = 'Print' + uniqueName.getTime();
    const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
    for(const barcode of this.barcodes.map(item => item.bcElement.nativeElement.innerHTML)) {
      printWindow.document.write(barcode);
    }
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
}
