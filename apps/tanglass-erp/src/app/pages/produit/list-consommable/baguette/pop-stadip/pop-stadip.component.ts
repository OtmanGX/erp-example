import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StadipMockService } from '@TanglassCore/mock/produit/consommable/baguette.mock.service';
@Component({
  selector: 'ngx-pop-stadip',
  templateUrl: './pop-stadip.component.html',
  styleUrls: ['./pop-stadip.component.scss'],
})
export class PopStadipComponent implements OnInit {
  @Input() title: string;

  epaisseurForm: FormGroup;

  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  constructor(
    protected ref: NbDialogRef<PopStadipComponent>,
    private fb: FormBuilder,
    private StadipService: StadipMockService
  ) {}
  ngOnInit(): void {
    this.buildElementForm();
  }
  buildElementForm(): void {
    this.epaisseurForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      prix_default: ['', Validators.required],
      libelleUsine: ['', Validators.required],
    });
  }

  confirm(): void {
    this.onSave();
  }
  onSave(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup(): void {
    this.ref.close();
  }
}
