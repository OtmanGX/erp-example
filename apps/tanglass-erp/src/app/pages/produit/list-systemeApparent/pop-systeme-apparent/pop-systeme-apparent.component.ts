import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemApparentMockService } from '@TanglassCore/mock/produit/systemApparent.mock.service';
import { SystemApparent } from '@TanglassCore/models/produit/systemApparent.model';
import { companiesDirection } from '@TanglassCore/enums/ventes.enum';

@Component({
  selector: 'ngx-pop-systeme-apparent',
  templateUrl: './pop-systeme-apparent.component.html',
  styleUrls: ['./pop-systeme-apparent.component.scss'],
})
export class PopSystemeApparentComponent implements OnInit {
  @Input() title: string;

  systemApparentForm: FormGroup;
  systemeApparent: SystemApparent;
  selectedCompanies: string[] = [];

  submitted: boolean;
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };

  dropdownSettingsSte: IDropdownSettings = {
    maxHeight: 100,
  };
  listCompanies = Object.values(companiesDirection);
  constructor(
    protected ref: NbDialogRef<PopSystemeApparentComponent>,
    private fb: FormBuilder,
    private systemApparentService: SystemApparentMockService
  ) {}

  ngOnInit(): void {
    this.buildMpForm();
  }
  buildMpForm() {
    this.systemApparentForm = this.fb.group({
      code: ['', Validators.required],
      libelle: ['', Validators.required],
      prix_Achat: [''],
      prix_default: ['', Validators.required],
      prix_min: ['', Validators.required],
      prix_max: ['', Validators.required],
      tags: [''],
      companie: [[]],
      paramCalcul: [],
    });
  }

  onSelectCompanie(companie): void {
    this.selectedCompanies.push(companie.text);
    this.systemApparentForm.controls.companie.patchValue(
      this.selectedCompanies
    );
  }
  onSelectAllCompanies(companies): void {
    companies = companies.map((companie) => {
      return companie.text;
    });
    this.selectedCompanies = companies;
    this.systemApparentForm.controls.companie.patchValue(
      this.selectedCompanies
    );
  }
  onSubmit() {
    this.submitted = true;
    this.systemeApparent = this.systemApparentForm.value;

    this.systemApparentService.addNewOne(this.systemeApparent).subscribe({
      next: () => this.onSave(),
    });
  }
  onSave() {
    this.systemApparentForm.reset();
    this.ref.close(this.systemeApparent);
  }
  closePopup() {
    this.ref.close();
  }
}
