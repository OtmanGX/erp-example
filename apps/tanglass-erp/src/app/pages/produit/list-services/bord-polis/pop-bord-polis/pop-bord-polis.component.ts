import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ngx-pop-bord-polis',
  templateUrl: './pop-bord-polis.component.html',
  styleUrls: ['./pop-bord-polis.component.scss']
})
export class PopBordPolisComponent implements OnInit {
  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopBordPolisComponent>,
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
      type:[""],
      outil:[""],
    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}
