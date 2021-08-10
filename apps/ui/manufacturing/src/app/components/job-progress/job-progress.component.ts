import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
} from '@angular/core';
import {
  JobOrdersFacade,
  ManufacturingLine,
  JobProduct,
} from '@tanglass-erp/store/manufacturing';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent implements OnInit, AfterViewInit, OnChanges {
  data$ = this.facade.selectedJobOrderGlasses$;
  glass: JobProduct;
  removable = true;
  manufacturing_lines: ManufacturingLine[];
  steps: string[];
  @Input() id: string;

  constructor(protected facade: JobOrdersFacade) {}

  ngOnInit() {
    this.steps = [
      ...this.glass.service_drafts.map((data) => data.labelFactory),
      ...this.glass.consumable_drafts.map((data) => data.labelFactory),
    ];
  }
  ngOnChanges(): void {
    console.log(this.id)
    this.data$.subscribe((glasses) => {
      this.glass = glasses?.find((glass) => glass.id == this.id);
    });
    this.manufacturing_lines = this.glass.manufacturing_lines.map((line) => ({
      ...line,
      manufacturing_services: [
        ...line.manufacturing_services,
        ...line.manufacturing_consumables,
      ],
    }));
    console.log(this.manufacturing_lines)
    this.steps = [
      ...this.glass.service_drafts.map((data) => data.labelFactory),
      ...this.glass.consumable_drafts.map((data) => data.labelFactory),
    ];
  }
  ngAfterViewInit() {
   
  }

  drop(event: CdkDragDrop<string[]>):void {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    };
    const prev_idx = event.previousIndex;    
    let test = event.previousContainer.data[prev_idx];
    console.log(test)
  }
  remove(step: string): void {
    // const index = this.steps.indexOf(fruit);
  }
}
