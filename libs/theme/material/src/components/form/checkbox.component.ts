import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../interfaces/field.interface";
@Component({
  selector: "app-checkbox",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group" >
<mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
</div>
`,
  styles: [':host {flex: 1 1 50%}'],
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
