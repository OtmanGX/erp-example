import { Component, OnInit, Input, Inject, ViewChild, ContentChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { Glasse } from '../../../../../../../libs/tanglass-core/src/models/produit/glasse.model';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield, FieldConfig } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';
import { Consumable } from '../../../../../../../libs/tanglass-core/src/models/produit/consommable.model';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-consumable.component.html',
  styleUrls: ['./pop-consumable.component.scss'],
})
export class PopConsumableComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  MP_types: additionalParam_PD[] = [];
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopConsumableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Consumable,
    private matierePremiereService: MatierePremiereMockService,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    console.log("build Form");
    this.getMP_types().subscribe(
      value => {
        this.MP_types = value;
        // console.log(this.regConfig);
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
      {type: "input", label: "Code", inputType: "text", name: "code", value: this.data.code,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Désignation", inputType: "text", name: "label", value: this.data.label,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: this.data.Mat?.type,
        options: this.MP_types.map((elem, index) => ({key: elem.name, value: elem.name}))},
    ];
  }
}
