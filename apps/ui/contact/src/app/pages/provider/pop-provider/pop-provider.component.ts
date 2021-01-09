import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

const regConfigAddresses = [
    {type: "input", name: "address", label: "Adresse", inputType: "text", value: null,
      validations: [
        FormDialog.REQUIRED
      ]},
    {type: "input", name: "city", label: "Ville", inputType: "text", value: null},
    {type: "input", name: "zip", label: "Code postal", inputType: "text", value: null},
];

@Component({
  selector: 'ngx-pop-contact',
  templateUrl: './pop-provider.component.html',
  styleUrls: ['./pop-provider.component.scss'],
})
export class PopProviderComponent extends FormDialog implements AfterViewInit {

  regConfig: FieldConfig[];
  addressFormGroup: FormGroup;
  addresses = [];
  @ViewChildren(DynamicFormComponent) dynamicForms: QueryList<DynamicFormComponent>;
  @ViewChild('providerForm') providerForm: DynamicFormComponent;

  get addressFormArray() {
    return this.addressFormGroup.get('addresses') as FormArray;
  }

  constructor(
    public dialogRef: MatDialogRef<PopProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    super(dialogRef, data);
    this.addressFormGroup = new FormGroup({addresses: new FormArray([new FormControl()])});
    this.newAddress();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.assignAddressForms();
    this.dynamicForms.changes.subscribe(value => this.assignAddressForms());
  }

  buildForm(): void {
    this.regConfig = [
      {type: "input", name: "name", label: "Nom", inputType: "text", value: this.data.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", name: "mail", label: "E-mail", inputType: "text", value: this.data.mail},
      {type: "input", name: "phone", label: "Téléphone", inputType: "text", value: this.data.phone},
      {type: "input", name: "note", label: "Note", inputType: "text", value: this.data.note},
    ];
  }

  newAddress() {
    this.addresses.push(Object.assign([], regConfigAddresses));
  }

  deleteAddress(addresse) {
    this.addresses = this.addresses.filter(item => item !== addresse);
  }

  assignAddressForms() {
    const forms = this.dynamicForms.filter(
      (i, index) => index > 0)
      .map((dynamicForm: DynamicFormComponent) => dynamicForm.form);

    while (this.addressFormArray.length) {
      this.addressFormArray.removeAt(0);
    }
    forms.forEach((form) => this.addressFormArray.push(form));
  }

  submitAll() {
    this.closePopup();
    this.submit([this.providerForm.form.value, this.addressFormArray.value]);
  }
}

