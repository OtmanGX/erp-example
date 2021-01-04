import { Component, OnInit, Input, Inject, ViewChild, ContentChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield, FieldConfig } from '@tanglass-erp/material';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Accessory } from '../../../../../../../libs/core/product/src/lib/models/accessoire.model';
import { ServiceGlasse } from '../../../../../../../libs/core/product/src/lib/models/service.model';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service-glasse.component.html',
  styleUrls: ['./pop-service-glasse.component.scss'],
})
export class PopServiceGlasseComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[];
  listCompanies = Object.values(companiesDirection);

  constructor(
    public dialogRef: MatDialogRef<PopServiceGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceGlasse,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {type: "inputSelect", label: "Service", inputType: "text", name: "service", value: this.data.service,
        options: []},
      {type: "input", label: "Etiquette d\'usine", inputType: "text", name: "labelFactory", value: this.data.labelFactory},
      {type: "inputSelect", label: "Verre", inputType: "text", name: "glasse", value: this.data.glasse,
            options: []},
      ]
  }
}
