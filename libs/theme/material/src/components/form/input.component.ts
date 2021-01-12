import { Component, Host, HostBinding, Input, OnInit, Optional } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../interfaces/field.interface";
@Component({
  selector: "app-input",
  template: `
<mat-form-field style="width: 100%" [formGroup]="group">
  <mat-label>{{field.label}}</mat-label>
  <input matInput [formControlName]="field.name" [type]="field.inputType">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: [':host {flex: 0 1 50%; box-sizing: border-box}'],
})
export class InputComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
}
