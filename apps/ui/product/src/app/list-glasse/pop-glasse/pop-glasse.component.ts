import { Component, Inject, ContentChild } from '@angular/core';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';
import { Glasse } from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-glasse.component.html',
  styleUrls: ['./pop-glasse.component.scss'],
})
export class PopGlasseComponent extends FormDialog {
  MP_types: additionalParam_PD[] = [];
  MP_colors: additionalParam_PD[] = [];
  newType: additionalParam_PD = new additionalParam_PD();
  newColor: additionalParam_PD = new additionalParam_PD();
  listCompanies = [];

  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: Groupfield[];

  constructor(
    public dialogRef: MatDialogRef<PopGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Glasse,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    // forkJoin([this.getMP_types(), this.getMP_colors()]).subscribe(
    //   values => {
    //     this.MP_types = values[0];
    //     this.MP_colors = values[1];
    //   },
    //   error => console.error(error),
    //   () => this.buildMpForm()
    // );
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {
        name: "product",
        label: "Produit",
        headerVisible:false,
        fields: [
          {type: "input", label: "Code", inputType: "text", name: "code", value: this.data.product?.code,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Désignation", inputType: "text", name: "label", value: this.data.product?.label,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Prix", inputType: "number", name: "price", value: this.data.product?.price,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Prix min", inputType: "number", name: "price_min",
            value: this.data.product?.price_min,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Prix max", inputType: "number", name: "price_max",
            value: this.data.product?.price_max,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "select", label: "Sociétés", multiple: true, name: "companie", value: this.data.product?.companies,
            options: this.listCompanies.map(elem => ({key: elem, value: elem}))},
        ]
      },
      {
        name: 'glasse',
        label: 'Verre',
        headerVisible:false,
        fields: [
          {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: this.data.type,
            options: this.MP_types.map((elem, index) => ({key: elem.name, value: elem.name}))},
          {type: "inputSelect", label: "Couleur", inputType: "text", name: "color", value: this.data.color,
            options: this.MP_colors.map((elem, index) => ({key: elem.name, value: elem.name}))
          },
          {type: "input", label: "Epaisseur", inputType: "text", name: "thickness", value: this.data.thickness},
          {type: "inputTag", label: "Tags", name: "tags", value: [],
            options: []},
        ]
      }
    ];

  }
  // getMP_types() {
  //   return this.matierePremiereService
  //     .getTypeMatierePremiere();
  // }
  // getMP_colors() {
  //   return this.matierePremiereService
  //     .getColorMatierePremiere();
  // }

  onSubmit(formValue) {
    const type = formValue.type;
    const color = formValue.color;
    // if (this.MP_types.map(elem => elem.name).includes(type)) {
    //   this.newType.name = type;
    //   this.matierePremiereService
    //     .addTypeMatierePremiere(this.newType)
    //     .subscribe({
    //       next: () => console.log(this.newType),
    //     });
    // }
    // if (this.MP_colors.map(elem => elem.name).includes(color)) {
    //   this.newColor.name = color;
    //   this.matierePremiereService
    //     .addColorMatierePremiere(this.newColor)
    //     .subscribe();
    // }
    this.submit(formValue);
  }
}
