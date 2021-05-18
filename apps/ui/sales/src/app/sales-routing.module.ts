import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { DraftComponent } from './pages/draft/draft.component';

const routes: Routes = [
  { path: '',
  component: SalesComponent,
  children: [
    {
      path: 'draft',
      children: [
        { path: '', component: DraftComponent },
      ],
      data: { title: 'Drafts', breadcrumb: "" }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
