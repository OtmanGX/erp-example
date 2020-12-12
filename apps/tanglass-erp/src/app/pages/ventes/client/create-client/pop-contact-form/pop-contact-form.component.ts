import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Contact } from '@TanglassCore/models/ventes/contact.model';

@Component({
  selector: 'ngx-pop-contact-form',
  templateUrl: './pop-contact-form.component.html',
  styleUrls: ['./pop-contact-form.component.scss'],
})
export class PopContactFormComponent {
  constructor(
    private ref: NbDialogRef<PopContactFormComponent>,
    private fb: FormBuilder
  ) {}
  @Input() title: string;
  imageURL: string;
  ContactForm: FormGroup;
  contact: Contact;
  ngOnInit(): void {
    this.buildContactForm();
  }
  buildContactForm() {
    this.ContactForm = this.fb.group({
      nom: ['', Validators.required],
      prénom: [''],
      civilité: [''],
      fonction: [''],
      address: [''],
      phone: [''],
      Fax: [''],
      email: [''],
      note: [''],
      clients: [[]],
    });
  }
  confirm(): void {
    this.contact = this.ContactForm.value;
    this.ref.close(this.contact);
  }
  closePopup() {
    this.ContactForm.reset();
    this.ref.close();
  }
}
