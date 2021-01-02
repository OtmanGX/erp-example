import { Component, OnInit, Input, Inject, ViewChild, ContentChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield } from '@tanglass-erp/material';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Accessory } from '@TanglassCore/models/produit/accessoire.model';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-accessories.component.html',
  styleUrls: ['./pop-accessories.component.scss'],
})
export class PopAccessoriesComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  MP_types: additionalParam_PD[] = [];
  regConfig: Groupfield[];
  listCompanies = Object.values(companiesDirection);

  constructor(
    public dialogRef: MatDialogRef<PopAccessoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Accessory,
    private matierePremiereService:MatierePremiereMockService
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    console.log("build Form");
    this.getMP_types().subscribe(
      value => {
        this.MP_types = value;
      }, error => {},
      () => this.buildMpForm()
    );
  }

  getMP_types() {
    return this.matierePremiereService
      .getTypeMatierePremiere();
  }

  buildMpForm() {
    this.regConfig = [
      {
        name: 'accessory',
        label: 'Accessoire',
        headerVisible:false,
        fields: [
          {type: "input", label: "Name", inputType: "text", name: "name", value: this.data.name},
          {type: "input", label: "Quota", inputType: "number", name: "quota", value: this.data.quota},
          {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: this.data.type,
            options: this.MP_types.map((elem, index) => ({key: elem.name, value: elem.name}))},
        ]
      },
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
      }
    ]
  }
}
