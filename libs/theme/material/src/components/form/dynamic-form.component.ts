import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { FieldConfig } from "../../interfaces/field.interface";
import { Groupfield } from '../../interfaces/groupfield.interface';

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  template: `
  <form fxFlexFill="" style="min-width: 100%;width: 100%" [formGroup]="form" (submit)="onSubmit($event)">

    <div *ngFor="let g of groups">
      <div mat-subheader *ngIf="g.headerVisible" fxLayout="row" fxLayoutGap="16px"
           fxLayoutAlign="space-between center" class="mat-h3 p-16">
        <span fxFlex="" class="text-nowrap font-weight-bold">{{g.label}}</span>
        <mat-divider fxFlex="100"></mat-divider>
      </div>
      <div class="pl-28" fxFlexFill="" fxLayoutGap="20px grid" fxLayout="row wrap" fxLayoutAlign="space-between center">
      <ng-container *ngFor="let field of g.fields;" dynamicField [field]="field" [group]="form.controls[g.name]">
      </ng-container>
        </div>
    </div>

  <div *ngIf="fields.length" class="pl-20" fxLayoutGap="20px grid" fxFlexFill="" fxLayout="row wrap" fxLayoutAlign="space-between center">
    <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    </ng-container>
  </div>


    <div *ngIf="withActions" class="mt-12" fxLayout="row" fxLayoutAlign="center center"  mat-dialog-actions>
      <button matTooltip="Confirmer" mat-raised-button color="primary" type="submit">Confirmer</button>
      <button matTooltip="Annuler" mat-raised-button color="warn" type="button" (click)="close.emit()">Annuler</button>
    </div>
    <ng-content></ng-content>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() name: string;
  @Input() fields: FieldConfig[] = [];
  @Input() groups: Groupfield[] = [];
  @Input() withActions: boolean = true;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl(this.fields);
    this.groups.forEach(group => {
      this.form.addControl(group.name, this.createControl(group.fields));
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
      for (const group of this.groups) {
        this.validateAllFormFields(<FormGroup> this.form.get(group.name));
      }
    }
  }

  createControl(fields) {
    const group = this.fb.group({});
    fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
