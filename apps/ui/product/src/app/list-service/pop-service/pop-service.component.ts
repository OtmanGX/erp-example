import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { Glasse } from '@TanglassCore/models/produit/glasse.model';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';
import { Service } from '../../../../../../../libs/tanglass-core/src/models/produit/service.model';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements OnInit {
  @Input() title: string;
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: Groupfield[];

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {
        name: "service",
        label: "Service",
        headerVisible:false,
        fields: [
          {type: "input", label: "Nom", inputType: "text", name: "name", value: this.data.name,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Unité de prix par défaut", inputType: "text", name: "defaultPriceUnit", value: this.data.name,
            validations: [
              FormDialog.REQUIRED
            ]
          },
        ]
      },
      {
        name: "params",
        label: "Params",
        headerVisible:false,
        fields: [
          {type: "inputTag", label: "Paramètres", name: "params", value: this.data.params, options: []}
        ]
      },

    ];

  }

  onSubmit(formValue) {

    this.submit(formValue);
  }
}
