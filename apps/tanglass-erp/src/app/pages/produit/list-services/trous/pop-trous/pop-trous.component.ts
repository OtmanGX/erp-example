import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ngx-pop-trous',
  templateUrl: './pop-trous.component.html',
  styleUrls: ['./pop-trous.component.scss']
})
export class PopTrousComponent implements OnInit {

  @Input() title: string;
  elementForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopTrousComponent>,
    private fb: FormBuilder
    ) {
  }
  ngOnInit(): void {
    this.buildElementForm()
  }
  buildElementForm() {
    this.elementForm = this.fb.group({
      code: ["", Validators.required],
      libelle: ["", Validators.required],
      libelleUsine: ["", Validators.required],
      epaisseur_min: [""],
      epaisseur_max: [""],
      diametre_min: [""],
      diametre_max: [""],
      prix_min: [""],
      prix_max: ["", ],
      prix_default: ["", ],
      outil:[""],
    });
  }

  confirm(): void {
    this.ref.close(this.elementForm.value);
  }
  closePopup() {
    this.ref.close();
  }

}
