import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Tanglass",
    group: true,
  },
  {
    title: "Ventes",
    icon: "trending-up-outline",
    children: [
      {
        title: "Devis",
        link: "/devis/list",
      },
      {
        title: "Commandes",
        link: "/commandes/list",
      },
      {
        title: "Livraison",
        link: "/livraison/list",
      },
      {
        title: "Factures",
        link: "/factures/list",
      },
    ],
  },
  {
    title: "Tiers",
    icon: "person-outline",
    children: [
      {
        title: "Clients",
        link: "/clients/list",
      },
      {
        title: "Clients alternatifs",
        link: "/contacts/list",
      },
      {
        title: "Fournisseurs",
      },
    ],
  },
  {
    title: "Produits",
    icon: "shopping-bag-outline",
    children: [
      {
        title: "Produit Stockable",
        link: "/produit/Listglass",

      },
      {
        title: "Matière Consommable",
        link: "/produit/listConsommables",
      },
      {
        title: "Accessoires",
        link: "/produit/listAccessoires",
      },
      {
        title: "Services",
        link: "/produit/listServices",

      },
      {
        title: "Matiére Première",

      },
      {
        title: "Système Apparent",
        link: "/produit/ListSystemeApparent",

      },
    ],
  },
  {
    title: "Achats",
    icon: "shopping-cart-outline",
    children: [
      {
        title: "Achats",
      },
    ],
  },
  {
    title: "Production",
    icon: "cube-outline",
    children: [
      {
        title: "Liste des ordres ",
        link: "/production/ListOrders",
      },
    ],
  },
  {
    title: "Comptabilité",
    icon: "briefcase-outline",
    children: [
      {
        title: "Compta ",
      },
    ],
  },

  {
    title: "Inventaire",
    icon: "grid-outline",
    children: [
      {
        title: "Gestion des accessoires",
        link: "/accessoires/accessoireOrders",
      },
    ],
  },

  {
    title: "Caisse",
    icon: "keypad-outline",
    children: [
      {
        title: "Caisse ",
      },
    ],
  },
  {
    title: "Managements",
    icon: "people-outline",
    children: [
      {
        title: "Employées",
        link: "/management/users",
      },
      {
        title: "Sociétés",
        link: "/management/companies",
      },
      {
        title: "Points de ventes",
        link: "/management/salePoints",
      },
    ],
  },

  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
