import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coupe } from '../../../../../../../../../libs/core/product/src/lib/models/service.model';
@Component({
  selector: 'ngx-pop-coupe',
  templateUrl: './pop-coupe.component.html',
  styleUrls: ['./pop-coupe.component.scss'],
})
export class PopCoupeComponent implements OnInit {
  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopCoupeComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.buildElementForm();
  }
  buildElementForm() {
    this.epaisseurForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      libelleUsine: ['', Validators.required],
      epaisseur: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      prix_default: ['', Validators.required],
      outil: ['', Validators.required],
    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}
