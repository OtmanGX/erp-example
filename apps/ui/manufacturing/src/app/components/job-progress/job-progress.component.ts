import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {
  JobOrdersFacade,
  JobProduct,
} from '@tanglass-erp/store/manufacturing';
import { Subscription } from 'rxjs';
@Component({
  selector: 'ngx-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent implements OnInit, OnDestroy {
  glass: JobProduct;
  dataSub: Subscription;

  constructor(protected facade: JobOrdersFacade) {}

  ngOnInit() {
    this.dataSub = this.facade.selectedGlassLine$.subscribe((data) => {
      this.glass = data;
      console.log(data)
    });
  }

  updateState(itemIndex, serviceIndex) {
    let newGlass = JSON.parse(JSON.stringify(this.glass));
    let service = this.glass.manufacturing_lines[itemIndex].services[
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
}
