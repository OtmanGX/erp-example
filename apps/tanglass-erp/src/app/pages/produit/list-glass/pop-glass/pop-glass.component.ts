import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatièrePremière } from '../../../../../../../../libs/core/product/src/lib/models/glasse.model';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-glass.component.html',
  styleUrls: ['./pop-glass.component.scss'],
})
export class PopGlassComponent implements OnInit {
  @Input() title: string;
  AddType = false;
  AddColor = false;
  Mat_PremiereForm: FormGroup;
  mat_Premiere: MatièrePremière;
  MP_types: additionalParam_PD[];
  MP_colors: additionalParam_PD[];
  newType: additionalParam_PD = new additionalParam_PD();
  newColor: additionalParam_PD = new additionalParam_PD();
  selectedCompanies: string[] = [];

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
  listCompanies = Object.values(companiesDirection);
  constructor(
    protected ref: NbDialogRef<PopGlassComponent>,
    private fb: FormBuilder,
    private matierePremiereService: MatierePremiereMockService
  ) {}

  ngOnInit(): void {
    this.buildMpForm();
    this.getMP_types();
    this.getMP_colors();
  }

  buildMpForm() {
    this.Mat_PremiereForm = this.fb.group({
      code: ['', Validators.required],
      type: [''],
      color: [''],
      libelle: ['', Validators.required],
      prix_Achat: [''],
      prix_default: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      epaisseur: [''],
      tags: [''],
      companie: [[]],
    });
  }
  getMP_types() {
    this.matierePremiereService
      .getTypeMatierePremiere()
      .subscribe((types) => (this.MP_types = types));
  }
  getMP_colors() {
    this.matierePremiereService
      .getColorMatierePremiere()
      .subscribe((colors) => (this.MP_colors = colors));
  }
  addType() {
    this.AddType = true;
  }
  addColor() {
    this.AddColor = true;
  }

  onItemSelectType(item: any) {
    //delete item.isDisabled
    this.Mat_PremiereForm.controls.type.setValue(item.name);
  }
  onItemSelectColor(item: any) {
    this.Mat_PremiereForm.controls.color.setValue(item.name);
  }
  onSelectCompanie(companie): void {
    this.selectedCompanies.push(companie.text);
    this.Mat_PremiereForm.controls.companie.patchValue(this.selectedCompanies);
  }

  onSelectAllCompanies(companies): void {
    companies = companies.map((companie) => {
      return companie.text;
    });
    this.selectedCompanies = companies;
    this.Mat_PremiereForm.controls.companie.patchValue(this.selectedCompanies);
  }
  onSubmit() {
    this.submitted = true;
    this.mat_Premiere = this.Mat_PremiereForm.value;
    if (this.AddType) {
      this.newType.name = this.Mat_PremiereForm.controls.type.value.text;
      console.log(this.newType);
      this.matierePremiereService
        .addTypeMatierePremiere(this.newType)
        .subscribe({
          next: () => console.log(this.newType),
        });
    }
    if (this.AddColor) {
      this.newColor.name = this.Mat_PremiereForm.controls.color.value;
      this.matierePremiereService
        .addColorMatierePremiere(this.newColor)
        .subscribe();
    }
    console.log(this.mat_Premiere);
    this.matierePremiereService.addNewOne(this.mat_Premiere).subscribe({
      next: () => this.onSave(),
    });
  }

  onSave() {
    this.Mat_PremiereForm.reset();
    this.ref.close(this.mat_Premiere);
  }
  closePopup() {
    this.ref.close();
  }
}
