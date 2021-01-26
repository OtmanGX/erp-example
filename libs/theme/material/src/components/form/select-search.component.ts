import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../interfaces/field.interface";
import { Observable } from 'rxjs';
@Component({
  selector: "app-select",
  template: `
<mat-form-field style="width: 100%" class="demo-full-width margin-top" [formGroup]="group">
<mat-select [multiple]="field.multiple" [placeholder]="field.label" [formControlName]="field.name">
 <mat-option>
   <ngx-mat-select-search formControlName="filterCntrl"></ngx-mat-select-search>
 </mat-option>
  <mat-option *ngFor="let item of field.options" [value]="item.id">
    {{item.name}}
  </mat-option>
<!--<mat-option *ngFor="let item of field.options" [value]="item.key">{{item.value}}</mat-option>-->
</mat-select>
</mat-form-field>
`,
  styles: [],
})
export class SelectSearchComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {
  }
  ngOnInit() {
    if (this.field.options instanceof Observable) {
      this.field.options.subscribe(value => this.field.options = value);
    }
  }
}
