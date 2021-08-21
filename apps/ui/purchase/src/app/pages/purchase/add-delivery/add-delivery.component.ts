import { AfterViewInit, ChangeDetectorRef, Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';

import {regConfigDeliveryInfos} from "@TanglassUi/purchase/utils/forms";
import {SharedFacade } from '@TanglassStore/shared/index';
import { map } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';


@Component({
  selector: 'ngx-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss'],
})
export class AddDeliveryComponent   implements AfterViewInit {
  title = 'Réception Fournisseur';
  regConfig: FieldConfig[];
  formArray = new FormArray([]);
  orderForms = [];
  substances = [];
  data
  substances$  = this.facade.allShortProduct$
  .pipe(
    map(elem => elem.map(val => ({key: val.substanceid, value: val.label})))
  );
  warehouses$ = this.facade.allShortWarehouse$
    .pipe(
      map(elem => elem.map(val => ({key: val.id, value: val.name})))
    );
  providers$=this.facade.allShortProvider$.pipe(
    map(elem=>elem.map(val=>({key:val.code,value:val.name})))
  )

  constructor(
    private store: Store,
    private facade: SharedFacade,
  ) {}

  ngOnInit() {
    this.facade.loadAllShortWarehouses();
    this.facade.loadAllShortProduct();
    this.facade.loadAllShortProvider();
    this.regConfig = regConfigDeliveryInfos(
      this.data,
      this.providers$,
      this.warehouses$,
    );
  }
  ngAfterViewInit(): void {
   
  }

}
