import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Trous_purchases } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { Trous } from '../../../../../../../../libs/core/product/src/lib/models/service.model';

@Component({
  selector: 'ngx-multi-select-diametre',
  template: `
    <input
      nbInput
      fieldSize="small"
      [formControl]="renderd_Value"
      (change)="insertRow()"
      required
      type="number"
      (click)="clear()"
      [ngClass]="getClass()"
      (blur)="setRecentValue()"
    />
  `,

  styleUrls: ['./select-diametre.component.scss'],
})
export class SelectDiametreComponent implements OnInit {
  @Input()
  value: Trous[];
  @Input()
  rowData: Trous_purchases;
  renderd_Value: FormControl;
  reservedValue;
  minValue: number;
  maxValue: number;
  @Output() emitRow = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    if (this.rowData.item['diametre_min']) {
      this.minValue = this.rowData.item['diametre_min'];
    } else this.minValue = 1;
    if (this.rowData.item['diametre_max']) {
      this.maxValue = this.rowData.item['diametre_max'];
    } else this.maxValue = 18;
    this.renderd_Value = new FormControl(this.rowData.diametre, [
      Validators.required,
      Validators.min(this.minValue),
      Validators.max(this.maxValue),
    ]);
  }

  clear() {
    this.reservedValue = this.renderd_Value.value;
    this.renderd_Value.reset();
  }
  setRecentValue() {
    this.renderd_Value.patchValue(this.reservedValue);
  }
  getClass() {
    if (this.renderd_Value.invalid) {
      return 'invalid';
    }
  }
  setDiametres() {
    for (let trous of this.value) {
      if (
        trous.diametre_min <= this.renderd_Value.value &&
        this.renderd_Value.value <= trous.diametre_max
      ) {
        this.rowData.item.diametre_min = trous.diametre_min;
        this.rowData.item.diametre_max = trous.diametre_max;
      }
    }
  }
  insertRow() {
    this.setDiametres();

    if (this.getClass()) {
      this.clear();
    }
    this.rowData.diametre = this.renderd_Value.value;
    this.emitRow.emit(this.rowData);
  }
}
