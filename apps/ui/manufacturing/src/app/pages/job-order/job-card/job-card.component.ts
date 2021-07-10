import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOrdersFacade, JobProduct } from '@tanglass-erp/store/manufacturing';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent extends ModelCardComponent {
  data$ = this.facade.selectedJobOrders$;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,

    protected facade: JobOrdersFacade
  ) {
    super(activatedRoute);
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
  dispatch(): void {
    this.facade.loadJobOrderById(this.id);
  }

  passData(data: JobProduct) {}
  afterComplete() {}
}
