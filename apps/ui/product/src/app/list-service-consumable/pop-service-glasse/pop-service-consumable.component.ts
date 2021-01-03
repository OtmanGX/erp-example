import { Component, OnInit, Input, Inject, ViewChild, ContentChild } from '@angular/core';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield, FieldConfig } from '@tanglass-erp/material';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';
import { Accessory } from '@TanglassCore/models/produit/accessoire.model';
import {
  ServiceConsumable,
  ServiceGlasse
} from '../../../../../../../libs/tanglass-core/src/models/produit/service.model';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service-consumable.component.html',
  styleUrls: ['./pop-service-consumable.component.scss'],
})
export class PopServiceConsumableComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopServiceConsumableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceConsumable,
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
      {type: "input", label: "Quota", inputType: "text", name: "quota", value: this.data.quota},
      {type: "inputSelect", label: "Consommable", inputType: "text", name: "consumable", value: this.data.consumable,
            options: []},
      ]
  }
}
