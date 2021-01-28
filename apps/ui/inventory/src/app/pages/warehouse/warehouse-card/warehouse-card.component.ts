import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { WarehousesFacade } from '@TanglassStore/inventory/index';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModelCardComponent } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './warehouse-card.component.html',
  styleUrls: ['./warehouse-card.component.scss']
})
export class WarehouseCardComponent extends ModelCardComponent implements OnInit {
  title = "Entrepôt";
  gap = "50px";
  id: string;
  step = null;
  data$ = this.facade.selectedWarehouse$;
  passedData: any;
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  constructor(private activatedRoute: ActivatedRoute,
              private facade: WarehousesFacade) {
    super();
    this.id = this.activatedRoute.snapshot.params.id;
    this.data$
      .pipe(takeUntil(this._onDestroy))
      .subscribe( data => {
      this.passedData = [
        {label: 'Nom de l\'entrepôt', value: data?.name},
        {label: 'Nom de la société', value: data?.company?.name},
        {label: 'Nom du point de vente', value: data?.salesPoint?.name},
      ];
    });
  }

  ngOnInit(): void {
  }

}
