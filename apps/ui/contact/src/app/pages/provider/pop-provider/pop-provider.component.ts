import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  QueryList, ViewChildren
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import { FormGroup, FormArray } from '@angular/forms';
import { regConfigAddresses, regConfigContact, regConfigProvider } from '../../../utils/forms';


@Component({
  selector: 'ngx-pop-contact',
  templateUrl: './pop-provider.component.html',
  styleUrls: ['./pop-provider.component.scss'],
})
export class PopProviderComponent extends FormDialog implements AfterViewInit {

  title = "Ajouter un fournisseur";
  regConfig: FieldConfig[];
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  addresses = [];
  contacts = [];
  providerForm: DynamicFormComponent;
  @ViewChildren(DynamicFormComponent) dynamicForms: QueryList<DynamicFormComponent>;

  get addressFormArray() {
    return this.addressFormGroup.get('addresses') as FormArray;
  }

  get contactFormArray() {
    return this.contactFormGroup.get('contacts') as FormArray;
  }

  constructor(
    public dialogRef: MatDialogRef<PopProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    super(dialogRef, data);
    this.addressFormGroup = new FormGroup({addresses: new FormArray([])});
    this.contactFormGroup = new FormGroup({contacts: new FormArray([])});
    this.newAddress(); this.newContact();
  }

  buildForm(): void {
    this.regConfig = regConfigProvider(this.data);
    const contacts = this.regConfig.find(elem => elem.name === 'contacts');
    // contacts['options'] = this.contacts$.pipe(map(item => item.map(obj => ({key: obj.id, value: obj.name}));

  }

  ngAfterViewInit() {
    this.providerForm = this.dynamicForms.find(
      component => component.name === 'main');
    this.cdr.detectChanges();
    this.assignAllForms();
    this.dynamicForms.changes.subscribe(value => {
      this.assignAllForms();
    });
  }

  assignAllForms() {
    this.assignForms(this.addressFormArray, 'address');
    this.assignForms(this.contactFormArray, 'contact');
  }

  assignForms(formArray: FormArray, name: string) {
    const forms = this.dynamicForms.filter(
      (i, index) => i.name === name)
      .map((dynamicForm: DynamicFormComponent) => dynamicForm.form);

    while (formArray.length) {
      formArray.removeAt(0);
    }
    forms.forEach((form) => formArray.push(form));
  }

  newAddress() {
    this.addresses.push(Object.assign([], regConfigAddresses()));
  }

  deleteAddress(addresse) {
    this.addresses = this.addresses.filter(item => item !== addresse);
  }

  newContact() {
    this.contacts.push(Object.assign([], regConfigContact()));
  }

  deleteContact(contact) {
    this.contacts = this.contacts.filter(item => item !== contact);
  }

  submitAll() {
    this.closePopup();
    this.submit([
      this.providerForm.form.value,
      this.addressFormArray.value,
      this.contactFormArray.value
    ]);
  }
}

