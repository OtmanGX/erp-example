import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatièrePremière } from '@TanglassCore/models/produit/matiere_premiere.model';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-glass.component.html',
  styleUrls: ['./pop-glass.component.scss'],
})
export class PopGlassComponent extends FormDialog implements OnInit {
  @Input() title: string;
  MP_types: additionalParam_PD[] = [];
  MP_colors: additionalParam_PD[] = [];
  newType: additionalParam_PD = new additionalParam_PD();
  newColor: additionalParam_PD = new additionalParam_PD();
  listCompanies = Object.values(companiesDirection);

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopGlassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatièrePremière,
    private matierePremiereService: MatierePremiereMockService,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    forkJoin([this.getMP_types(), this.getMP_colors()]).subscribe(
      values => {
        this.MP_types = values[0];
        this.MP_colors = values[1];
      },
      error => console.error(error),
      () => this.buildMpForm()
    );
  }

  buildMpForm() {
    this.regConfig = [
      {type: "input", label: "Code", inputType: "text", name: "code", value: this.data.code,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Désignation", inputType: "text", name: "libelle", value: this.data.libelle,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Prix d'Achat", inputType: "number", name: "prix_Achat", value: this.data.prix_Achat,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Type", inputType: "text", name: "type", value: this.data.type},
      {type: "input", label: "Prix de vente", inputType: "number", name: "prix_default", value: this.data.prix_default},
      {type: "inputSelect", label: "Couleur", inputType: "text", name: "color", value: this.data.color,
        options: this.MP_colors.map((elem, index) => ({key: elem.name, value: elem.name}))
      },
      {type: "input", label: "Prix min", inputType: "number", name: "prix_min", value: this.data.prix_min,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Prix max", inputType: "number", name: "prix_max", value: this.data.prix_max,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Epaisseur", inputType: "text", name: "epaisseur", value: this.data.epaisseur},
      {type: "select", label: "Sociétés", multiple: true, name: "companie", value: this.data.companie,
        options: this.listCompanies.map(elem => ({key: elem, value: elem}))},
      {type: "inputTag", label: "Tags", name: "tags", value: [],
        options: []},
    ];

  }
  getMP_types() {
    return this.matierePremiereService
      .getTypeMatierePremiere();
  }
  getMP_colors() {
    return this.matierePremiereService
      .getColorMatierePremiere();
  }

  onSubmit(formValue) {
    const type = formValue.type;
    const color = formValue.color;
    if (this.MP_types.map(elem => elem.name).includes(type)) {
      this.newType.name = type;
      this.matierePremiereService
        .addTypeMatierePremiere(this.newType)
        .subscribe({
          next: () => console.log(this.newType),
        });
    }
    if (this.MP_colors.map(elem => elem.name).includes(color)) {
      this.newColor.name = color;
      this.matierePremiereService
        .addColorMatierePremiere(this.newColor)
        .subscribe();
    }
    this.submit(formValue);
  }
}
