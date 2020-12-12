import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'ngx-pop-bombage',
  templateUrl: './pop-bombage.component.html',
  styleUrls: ['./pop-bombage.component.scss']
})
export class PopBombageComponent implements OnInit {

  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopBombageComponent>,
    private fb: FormBuilder
    ) {
  }
  ngOnInit(): void {
    this.buildElementForm()
  }
  buildElementForm() {
    this.epaisseurForm = this.fb.group({
      code: ["", Validators.required],
      libelle: ["", Validators.required],
      libelleUsine: ["", Validators.required],
      epaisseur: [""],
      prix_min: [""],
      prix_max: ["", ],
      prix_default: ["", ],
    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }

}
