import { Component, OnInit,Input } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: 'ngx-pop-uchannel',
  templateUrl: './pop-uchannel.component.html',
  styleUrls: ['./pop-uchannel.component.scss']
})
export class PopUchannelComponent implements OnInit {
  @Input() title: string;
  epaisseurForm: FormGroup;

  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: "id",
    textField: "name",
    maxHeight: 100,
  };
  constructor(
    protected ref: NbDialogRef<PopUchannelComponent>,
    private fb: FormBuilder,
    ) {
  }
  ngOnInit(): void {
    this.buildElementForm()
  }
  buildElementForm():void {
    this.epaisseurForm = this.fb.group({
      code: ["", Validators.required],
      libelle: ["", Validators.required],
      libelleUsine: ["", Validators.required],
      prix_min: ["",Validators.required],
      prix_max: ["", Validators.required],
      prix_default: ["", Validators.required],
    });
  }




 confirm(): void {
  this.ref.close(this.epaisseurForm.value);
}
 
  closePopup():void {
    this.ref.close();
  }
}
