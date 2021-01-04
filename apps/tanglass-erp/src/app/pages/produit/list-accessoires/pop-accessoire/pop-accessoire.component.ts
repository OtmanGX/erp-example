import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AccessoireMockService } from '@TanglassCore/mock/produit/accessoire.mock.service';
import { Accessory } from '../../../../../../../../libs/core/product/src/lib/models/accessoire.model';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { companies } from '@TanglassCore/data/management/companies.data';
@Component({
  selector: 'ngx-pop-accessoire',
  templateUrl: './pop-accessoire.component.html',
  styleUrls: ['./pop-accessoire.component.scss'],
})
export class PopAccessoireComponent implements OnInit {
  @Input() title: string;
  AddType = false;
  AccessoireForm: FormGroup;
  accessoire: Accessory;
  A_types: additionalParam_PD[] = [];
  newType: additionalParam_PD = { id: null, name: '' };
  submitted: boolean;
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  dropdownSettingsSte: IDropdownSettings = {
    maxHeight: 100,
  };
  listSte = ['Tanglass', 'Trimar'];
  selectedCompanies: string[] = [];
  constructor(
    protected ref: NbDialogRef<PopAccessoireComponent>,
    private accessoireService: AccessoireMockService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getA_types();
    this.buildAccessoireForm();
  }
  buildAccessoireForm() {
    this.AccessoireForm = this.fb.group({
      code: ['', Validators.required],
      type: [],
      libelle: ['', Validators.required],
      prix_Achat: [''],
      prix_default: ['', Validators.required],
      prix_min: [''],
      prix_max: [''],
      tags: [''],
      companie: [[]],
      libelleClient: [[]],
    });
  }
  getA_types() {
    this.accessoireService.getType_Accessoires().subscribe((types) => {
      this.A_types = types;
    });
  }
  addType() {
    this.AddType = true;
  }
  onSubmit() {
    this.submitted = true;
    this.accessoire = this.AccessoireForm.value;
    if (this.AddType) {
      this.newType.name = this.AccessoireForm.controls.type.value;
      this.accessoireService.addType_Accessoire(this.newType).subscribe({
        next: () => console.log(this.newType),
      });
    }
    this.accessoireService.addNewOne(this.accessoire).subscribe({
      next: () => this.onSave(),
    });
  }

  onSelectCompanie(companie): void {
    this.selectedCompanies.push(companie.text);
    this.AccessoireForm.controls.companie.patchValue(this.selectedCompanies);
  }
  onSelectAllCompanies(companies): void {
    companies = companies.map((companie) => {
      return companie.text;
    });
    this.selectedCompanies = companies;
    this.AccessoireForm.controls.companie.patchValue(this.selectedCompanies);
  }
  onSave() {
    this.AccessoireForm.reset();
    this.ref.close(this.accessoire);
  }
  closePopup() {
    this.ref.close();
  }
}
