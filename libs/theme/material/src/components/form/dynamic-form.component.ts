import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { FieldConfig, Validator } from "../../interfaces/field.interface";
import { Groupfield } from '../../interfaces/groupfield.interface';

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  template: `
  <form class="p-4" style="width: 100%" [formGroup]="form" (submit)="onSubmit($event)">
    <div *ngFor="let g of groups">
      <div *ngIf="g.headerVisible" class="mat-h1">{{g.label}}</div>
      <div fxLayoutGap="10px grid" fxLayout="row wrap" fxLayoutAlign="start">
      <ng-container *ngFor="let field of g.fields;" dynamicField [field]="field" [group]="form.controls[g.name]">
      </ng-container>
        </div>
    </div>

  <div *ngIf="fields.length" class="p-4" fxLayoutGap="10px grid" fxLayout="row wrap" fxLayoutAlign="start center">
    <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    </ng-container>
  </div>


    <div *ngIf="withActions" fxLayout="row" fxLayoutAlign="center center"  mat-dialog-actions>
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
