import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import {
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: 'ngx-input-price-render',
  template: `
   <input
     nbInput
     fieldSize="small"
     [formControl]="renderd_Value"
     (change)="insertValue()"
     type='number'
     [ngClass]='getClass()'
     (click)="clear()"
     (blur)="setRecentValue()"

   />

 `,
 styleUrls: ['./input-price-render.component.scss']




 })
export class InputPriceRenderComponent implements OnInit {

  @Input()
  value;
  @Input()
  rowData: any;
  reservedValue
  renderd_Value:FormControl;

  @Output() emitRow = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
     
    this.renderd_Value = new FormControl(
      this.rowData.item[this.value],
        [
        Validators.required,
        Validators.min(this.rowData.item['prix_min']),
        Validators.max(this.rowData.item['prix_max']),

      ]
    );

  }

  clear(){
    if(this.renderd_Value.value<this.rowData.item['prix_min']){
      this.renderd_Value.setValue(this.rowData.item['prix_min']);
      console.log('less than min')
    }
    if(this.rowData.item['prix_max']<this.renderd_Value.value){
      this.renderd_Value.setValue(this.rowData.item['prix_max']);
      console.log('more than max')

    }
  
  }

  setRecentValue(){
     this.renderd_Value.patchValue(this.reservedValue)
  }
  getClass() {

    if (this.renderd_Value.invalid) {
      return "invalid";
    }
  }

  insertValue() {
    if(this.getClass()){
      this.clear()
    }
    this.rowData.item[this.value]= this.renderd_Value.value;
    this.emitRow.emit(this.rowData);

  }
}

