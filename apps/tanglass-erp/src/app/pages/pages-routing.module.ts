import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'clients',
        loadChildren: () =>
          import('./ventes/client/client.module').then((m) => m.ClientModule),
        canActivate: [AuthGuard],
      },

      {
        path: 'contacts',
        loadChildren: () =>
          import('./ventes/contacts/contacts.module').then(
            (m) => m.ContactsModule
          ),
      },
      {
        path: 'devis',
        loadChildren: () =>
          import('./ventes/devis/devis.module').then((m) => m.DevisModule),
      },
      {
        path: 'commandes',
        loadChildren: () =>
          import('./ventes/commandes/commandes.module').then(
            (m) => m.CommandesModule
          ),
      },
      {
        path: 'factures',
        loadChildren: () =>
          import('./ventes/factures/factures.module').then(
            (m) => m.FacturesModule
          ),
      },
      {
        path: 'livraison',
        loadChildren: () =>
          import('./ventes/livraison/livraison.module').then(
            (m) => m.LivraisonModule
          ),
      },
      {
        path: 'produit',
        loadChildren: () =>
          import('./produit/produit.module').then((m) => m.ProduitModule),
      },
      {
        path: 'management',
        loadChildren: () =>
          import('@TanglassUi/management/management.module').then(
            (m) => m.ManagementModule
          ),
      },
      {
        path: 'production',
        loadChildren: () =>
          import('./production/production.module').then(
            (m) => m.ProductionModule
          ),
      },
      {
        path: 'accessoires',
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
