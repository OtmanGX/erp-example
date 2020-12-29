import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../interfaces/field.interface";
@Component({
  selector: "app-select",
  template: `
<mat-form-field style="width: 90%" class="demo-full-width margin-top" [formGroup]="group">
<mat-select [multiple]="field.multiple" [placeholder]="field.label" [formControlName]="field.name">
<mat-option *ngFor="let item of field.options" [value]="item.key">{{item.value}}</mat-option>
</mat-select>
</mat-form-field>
`,
  styles: [':host {flex: 1 1 50%}'],
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
