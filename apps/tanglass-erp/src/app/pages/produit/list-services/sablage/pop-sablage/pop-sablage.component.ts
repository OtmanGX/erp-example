import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { SablageMockService } from '@TanglassCore/mock/produit/service/sablage.mock.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'ngx-pop-sablage',
  templateUrl: './pop-sablage.component.html',
  styleUrls: ['./pop-sablage.component.scss'],
})
export class PopSablageComponent implements OnInit {
  @Input() title: string;
  epaisseurForm: FormGroup;
  AddType = false;
  newType: additionalParam_PD = { id: null, name: '' };
  Sablages_types: additionalParam_PD[] = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  constructor(
    protected ref: NbDialogRef<PopSablageComponent>,
    private fb: FormBuilder,
    private sablageService: SablageMockService
  ) {}
  ngOnInit(): void {
    this.buildElementForm();
    this.getSablageTypes();
  }
  buildElementForm(): void {
    this.epaisseurForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      libelleUsine: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      prix_default: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  getSablageTypes(): void {
    this.sablageService
      .getTypesSablage()
      .subscribe((types) => (this.Sablages_types = types));
  }

  onItemSelectType(item: any): void {
    this.epaisseurForm.controls.type.setValue(item.name);
  }
  addType(): void {
    this.AddType = true;
  }
  confirm(): void {
    if (this.AddType) {
      this.newType.name = this.epaisseurForm.controls.type.value;
      this.sablageService.addTypeSablage(this.newType).subscribe({
        next: () => console.log(this.newType),
      });
    }
    this.onSave();
  }
  onSave(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup(): void {
    this.ref.close();
  }
}
