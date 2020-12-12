import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PeintureMockService } from '@TanglassCore/mock/produit/consommable/peinture.mock.service';

@Component({
  selector: 'ngx-pop-peinture',
  templateUrl: './pop-peinture.component.html',
  styleUrls: ['./pop-peinture.component.scss'],
})
export class PopPeintureComponent implements OnInit {
  @Input() title: string;
  AddColor = false;
  epaisseurForm: FormGroup;
  Peintures_colors: additionalParam_PD[] = [];
  newColor: additionalParam_PD = { id: null, name: '' };
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  constructor(
    protected ref: NbDialogRef<PopPeintureComponent>,
    private fb: FormBuilder,
    private peintureService: PeintureMockService
  ) {}
  ngOnInit(): void {
    this.buildElementForm();
    this.getPeintureColors();
  }
  buildElementForm(): void {
    this.epaisseurForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      color: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      prix_default: ['', Validators.required],
      libelleUsine: ['', Validators.required],
    });
  }

  getPeintureColors(): void {
    this.peintureService
      .getColor()
      .subscribe((colors) => (this.Peintures_colors = colors));
  }

  addColor(): void {
    this.AddColor = true;
  }

  onItemSelectColor(item: any) {
    this.epaisseurForm.controls.color.setValue(item.name);
  }
  confirm(): void {
    if (this.AddColor) {
      this.newColor.name = this.epaisseurForm.controls.color.value;
      this.peintureService.addColor(this.newColor).subscribe();
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
