import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts.component'
import { CreateContactComponent } from './create-contact/create-contact.component';
import {  ListContactComponent } from './list-contact/list-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'create',
        component: CreateContactComponent,
      },
      {
        path: 'list',
        component:  ListContactComponent,
      },
      {
        path: 'fiche/:id',
        component:  CreateContactComponent,
      }

    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
