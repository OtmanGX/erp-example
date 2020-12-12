import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'ngx-pop-encoches',
  templateUrl: './pop-encoches.component.html',
  styleUrls: ['./pop-encoches.component.scss']
})
export class PopEncochesComponent implements OnInit {

  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopEncochesComponent>,
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
      epaisseur_min: [""],
      epaisseur_max: [""],
      prix_min: [""],
      prix_max: ["", ],
      prix_default: ["", ],
      type:[""],
      outil:[""]
    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}
