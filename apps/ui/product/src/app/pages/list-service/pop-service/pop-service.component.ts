import { Component, OnInit, Inject, ChangeDetectorRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigService } from '../../../utils/forms';
import { FormArray, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

const regParamForm = [
  {type: "input", label: "Nom", inputType: "text", name: "name", value: null,
    validations: [FormDialog.REQUIRED]
  },
  {type: "select", label: "Type", inputType: "text", name: "type", value: null,
    options: [{key: 'texte', value: 'texte'}, {key: 'nombre', value: 'nombre'}, {key: 'liste', value: 'liste'}],
    validations: [FormDialog.REQUIRED]
  },
];

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements AfterViewInit {
  title = "Ajouter une service";
  regConfig: Groupfield[];
  params = [];
  paramFormArray;
  @ViewChildren(DynamicFormComponent) dynamicForms: QueryList<DynamicFormComponent>;

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
  ) {
    super(dialogRef, data);
    this.paramFormArray = new FormArray([]);
  }

  ngAfterViewInit(): void {
    this.dynamicForms.changes.subscribe(() => {
      const forms = this.dynamicForms
        .filter(component => component.name === 'param')
        .map((dynamicForm: DynamicFormComponent) => dynamicForm.form);
      forms.forEach(form => this.paramFormArray.push(form));
    });
  }

  buildForm() {
    this.regConfig = regConfigService(this.data);
  }

  newParam() {
    this.params.push(Object.assign([], regParamForm));
  }

  deleteParam(param) {
    this.params = this.params.filter(elem => elem !== param);
  }

  submit(value: any) {
    if (this.paramFormArray.valid) {
      const serviceForm = value.service;
      serviceForm.params = JSON.stringify(this.paramFormArray.value);
      console.log(serviceForm);
      this.dialogRef.close(serviceForm);
    } else {
      this.paramFormArray.controls.forEach(elem => {
        this.markFormGroupTouched(elem);
      });
    }
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched({ onlySelf: true });

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
