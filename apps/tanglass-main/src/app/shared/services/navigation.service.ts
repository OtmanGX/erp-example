import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROLES } from '@tanglass-erp/store/app';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  roles?: Array<ROLES>;
}

interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {
  }

  iconMenu: IMenuItem[] = [

    {
      name: 'Dashboard',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard/analytics',
      roles: [ROLES.admin]
    },
    // *** Management ***
    {
      name: 'Management',
      type: 'separator',
      roles: [ROLES.admin]
    },
    {
      name: 'Employées',
      type: 'link',
      icon: 'badge',
      state: 'management/users',
      roles: [ROLES.admin]
    },
    {
      name: 'Sociétés',
      type: 'link',
      icon: 'business',
      state: 'management/companies',
      roles: [ROLES.admin]
    },
    {
      name: 'Points de vente',
      type: 'link',
      icon: 'store',
      state: 'management/salePoints',
      roles: [ROLES.admin]
    },
    // *** Contact ***
    {
      name: 'Contact',
      type: 'separator',
      roles: [ROLES.admin]
    },
    {
      name: 'Contacts',
      type: 'link',
      icon: 'contacts',
      state: 'contact/contact',
      roles: [ROLES.admin]
    },
    {
      name: 'Fournisseurs',
      type: 'link',
      icon: 'production_quantity_limits',
      state: 'contact/provider',
      roles: [ROLES.admin]
    },
    {
      name: 'Clients',
      type: 'link',
      icon: 'assignment_ind',
      state: 'contact/customer',
      roles: [ROLES.admin]
    },
    // *** Inventory ***
    {
      name: 'Stock',
      type: 'separator',
      roles: [ROLES.admin]
    },
    {
      name: 'Emplacements',
      type: 'link',
      icon: 'assignment_ind',
      state: 'inventory/warehouses',
      roles: [ROLES.admin]
    },
    {
      name: 'Etat de stock',
      type: 'dropDown',
      icon: 'assignment_ind',
      tooltip: 'Pages',
      roles: [ROLES.admin],
      // badges: [{color: 'primary', value: '6'}],
      // state: "inventory/warehouses",
      sub: [
        { name: 'Produit Stockable', state: 'inventory/warehouse-glasse' },
        { name: 'Accessoires ', state: 'inventory/warehouse-accessory' },
        { name: 'Consommables && MP', state: 'inventory/warehouse-consumable' }
      ]
    },


    {
      name: 'Transfert',
      type: 'dropDown',
      icon: 'assignment_ind',
      tooltip: 'Pages',
      roles: [ROLES.admin],
      sub: [
        { name: "Commande transfert", state: "inventory/transfer" },
        { name: "Transferts réalisés", state: "inventory/transferred" },
      ]
    },
    {
      name: 'Mouvement de stock',
      type: 'dropDown',
      icon: 'assignment_ind',
      tooltip: 'Pages',
      roles: [ROLES.admin],
      sub: [
        { name: "Réception fournisseur", state: "purchase/reception" },
        { name: "Retour fournisseur", state: "purchase/returned" },
      ]
    },
    // *** Product ***
    {
      name: 'Product',
      type: 'separator',
      roles: [ROLES.admin]
    },
    {
      name: 'Produit Stockable',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'product/glass'
    },
    {
      name: 'Accessoires',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'product/accessory'
    },
    {
      name: "Article Clients",
      type: "link",
      icon: "assignment_ind",
      roles: [ROLES.admin],
      state: "product/customerProduct"
    },
    {
      name: 'Fournitures',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'product/supplies'
    },
    {
      name: 'Consommables && MP',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'product/consumable'
    },
    {
      name: 'Service',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'product/service'
    },
    // *** Sales ***
    {
      name: 'Ventes',
      roles: [ROLES.admin],
      type: 'separator'
    },
    {
      name: 'Brouillons',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'sales/draft'
    },
    {
      name: 'Devis',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'sales/quotation'
    },
    {
      name: 'Commandes',
      type: 'link',
      icon: 'assignment_ind',
      roles: [ROLES.admin],
      state: 'sales/order'
    },
    {
      name: 'Livraison',
      type: 'link',
      icon: 'assignment_ind',
      tooltip: 'Livraison',
      roles: [ROLES.admin],
      state: 'sales/delivery'
    },
    {
      name: 'Factures',
      type: 'link',
      icon: 'assignment_ind',
      tooltip: 'Factures',
      roles: [ROLES.admin],
      state: 'sales/invoice'
    },

       // *** Cash Register ***
       {
        name: 'Caisse',
        type: 'separator'
      },
      {
        name: 'Caisse',
        type: 'link',
        icon: 'assignment_ind',
        roles: [ROLES.admin],
        state: 'cash-register'
      },
    // *** Manufacturing ***
       {
        name: 'Fabrication',
        type: 'separator',
         roles: [ROLES.admin]
      },
      {
        name: 'Ordres de fabrication',
        type: 'link',
        icon: 'assignment_ind',
        roles: [ROLES.admin],
        state: 'manufacturing/jobOrders'
      },
  ];


  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.iconMenu);
  }
}
