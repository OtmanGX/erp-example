import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consumable } from '@TanglassCore/models/produit/consommable.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';

@Component({
  selector: 'ngx-pop-consommable',
  templateUrl: './pop-consommable-pieces.component.html',
  styleUrls: ['./pop-consommable-pieces.component.scss'],
})
export class PopConsommablePiecesComponent implements OnInit {
  @Input() title: string;
  consommableForm: FormGroup;
  consommable: Consumable;
  constructor(
    private ref: NbDialogRef<PopConsommablePiecesComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildConsommableForm();
  }
  buildConsommableForm() {
    this.consommableForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      libelleUsine: ['', Validators.required],
      prix_Achat: [''],
      prix_default: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      tags: [''],
    });
  }

  confirm(): void {
    this.ref.close(this.consommableForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}
