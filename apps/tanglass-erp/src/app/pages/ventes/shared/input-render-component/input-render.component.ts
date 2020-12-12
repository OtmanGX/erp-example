import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import {
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "ngx-qte-render",
  template: `
  <input
    nbInput
    fieldSize="small"
    [formControl]="renderd_Value"
    (change)="insertRow()"
    required
    type='number'
    [ngClass]='getClass()'
    (click)="clear()"
    (blur)="setRecentValue()"
  />


`,
styleUrls: ['./input-render.component.scss']

})
export class InputRenderComponent implements ViewCell, OnInit {
  @Input()
  value;
  @Input()
  rowData: any;
  renderd_Value:FormControl;
  reservedValue
  @Output() emitRow = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  this.renderd_Value = new FormControl(
    this.rowData[this.value],
    [
      Validators.required,
      Validators.min(1),
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


  insertRow():void{
    if(this.getClass()){
      this.clear()
    }
    this.rowData[this.value]= this.renderd_Value.value;
    this.emitRow.emit(this.rowData);
  }
}
