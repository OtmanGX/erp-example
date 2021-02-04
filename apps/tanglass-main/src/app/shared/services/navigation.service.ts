import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
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
  constructor() {}
  iconMenu: IMenuItem[] = [

    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/analytics"
    },
    // *** Contact ***
    {
      name: "Contact",
      type: "separator"
    },
    {
      name: "Contacts",
      type: "link",
      icon: "contacts",
      state: "contact/contact"
    },
    {
      name: "Fournisseurs",
      type: "link",
      icon: "production_quantity_limits",
      state: "contact/provider"
    },
    {
      name: "Clients",
      type: "link",
      icon: "assignment_ind",
      state: "contact/customer"
    },
    // *** Inventory ***
    {
      name: "Stock",
      type: "separator"
    },
    {
      name: "Entrepôts",
      type: "dropDown",
      icon: "assignment_ind",
      tooltip: "Pages",
      // badges: [{color: 'primary', value: '6'}],
      // state: "inventory/warehouses",
      sub: [
        { name: "Entrepôts", state: "inventory/warehouses" },
        { name: "Entrepôts de verre", state: "inventory/warehouse-glasse" },
        { name: "Entrepôts d'accessoires", state: "inventory/warehouse-accessory" },
        { name: "Entrepôts de consommable", state: "inventory/warehouse-consumable" },
      ]
    },
    {
      name: "Transfert",
      type: "link",
      icon: "assignment_ind",
      state: "inventory/transfert"
    },
    // *** Product ***
    {
      name: "Product",
      type: "separator"
    },
    {
      name: "Verres",
      type: "link",
      icon: "assignment_ind",
      state: "product/glass"
    },
    {
      name: "Accessoires",
      type: "link",
      icon: "assignment_ind",
      state: "product/accessory"
    },
    {
      name: "Matière consommable",
      type: "link",
      icon: "assignment_ind",
      state: "product/consumable"
    },
    {
      name: "Service",
      type: "link",
      icon: "assignment_ind",
      state: "product/service"
    },
  ];


  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
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
