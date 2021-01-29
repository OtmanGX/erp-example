import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigConsumable } from '../../../utils/forms';
import { InsertedConsumable } from "@tanglass-erp/core/product";
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-consumable.component.html',
  styleUrls: ['./pop-consumable.component.scss'],
})
export class PopConsumableComponent extends FormDialog {
  title = "Ajouter un consommable";
  regConfig: Groupfield[];
  // listCompanies = [];
  listCompanies = this.facade.allShortCompany$

  constructor(
    public dialogRef: MatDialogRef<PopConsumableComponent>,
    private facade: ShortCompanyFacade,
    @Inject(MAT_DIALOG_DATA) public data: InsertedConsumable,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.facade.loadAllShortCompanies();
    this.buildForm();
  }
  buildForm() {
    //this.regConfig = regConfigConsumable(this.data, this.listCompanies);
    this.listCompanies.subscribe(companies => this.regConfig = regConfigConsumable(this.data, companies))

  }
}
