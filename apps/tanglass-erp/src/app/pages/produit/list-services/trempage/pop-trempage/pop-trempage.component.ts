import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ngx-pop-trempage',
  templateUrl: './pop-trempage.component.html',
  styleUrls: ['./pop-trempage.component.scss']
})
export class PopTrempageComponent implements OnInit {


  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopTrempageComponent>,
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
      epaisseur: [""],
      prix_min: [""],
      prix_max: ["", ],
      prix_default: ["", ],
      libelleUsine: ["", Validators.required],

    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}

