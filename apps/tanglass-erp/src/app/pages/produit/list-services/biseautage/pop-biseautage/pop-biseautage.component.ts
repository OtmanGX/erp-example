import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'ngx-pop-biseautage',
  templateUrl: './pop-biseautage.component.html',
  styleUrls: ['./pop-biseautage.component.scss']
})
export class PopBiseautageComponent implements OnInit {

  @Input() title: string;
  epaisseurForm: FormGroup;

  constructor(
    protected ref: NbDialogRef<PopBiseautageComponent>,
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
      prix_min: ["", Validators.required],
      prix_max: ["",  Validators.required],
      prix_default: ["",Validators.required ],
      type:["",Validators.required],
    });
  }

  confirm(): void {
    this.ref.close(this.epaisseurForm.value);
  }
  closePopup() {
    this.ref.close();
  }
}
