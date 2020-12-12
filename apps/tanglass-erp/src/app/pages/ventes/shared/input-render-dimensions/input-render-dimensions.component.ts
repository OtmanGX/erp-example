import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import {
  Validators,
  FormControl,
} from "@angular/forms";
import {dimensionsValidator  } from "../custom-validators";

@Component({
  selector: "ngx-input-dimensions-render",
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
styleUrls: ['./input-render-dimensions.component.scss']

})
export class InputDimensionsRenderComponent implements ViewCell, OnInit {
  @Input()
  value;
  @Input()
  rowData: any;
  renderd_Value:FormControl;
  @Output() emitRow = new EventEmitter<any>();
  reservedValue
  constructor() {}

  ngOnInit(): void {
    this.renderd_Value = new FormControl(
      this.rowData[this.value],
      [
        Validators.required,
        dimensionsValidator
      ]);

}
clear():void{
  this.reservedValue=this.renderd_Value.value
  this.renderd_Value.reset()
}
setRecentValue():void{
  this.renderd_Value.patchValue(this.reservedValue)
    }
  getClass():string {
    if (this.renderd_Value.invalid) {
      return "invalid";
    }
  }

  insertValue():void {
    if(this.getClass()){
      this.clear()
    }
    this.rowData[this.value] = this.renderd_Value.value;
    this.emitRow.emit(this.rowData);
  }
}
