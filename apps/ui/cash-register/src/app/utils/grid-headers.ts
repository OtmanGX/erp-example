export const PaymentsHeaders = [
  {
    field: 'id',
    headerName: 'N°',
    type: 'textColumn',
  },
  { field: 'customer.name', headerName: 'Client', type: 'textColumn' },
  { field: 'order_id', headerName: 'Commande.N°', type: 'textColumn' },
  { field: 'amount', headerName: 'Montant', type: 'numberColumn' },
  { field: 'date', headerName: 'Date', type: 'dateColumn' },
  { field: 'deadline', headerName: 'Date d\'échéance', type: 'dateColumn' },
  { field: 'company.name', headerName: 'Société', type: 'textColumn' },
];


export const ExpensesHeaders = [
  {
    field: 'id',
    headerName: 'N°',
    type: 'textColumn',
  },
  { field: 'name', headerName: 'Nom', type: 'textColumn' },
  { field: 'category', headerName: 'Catégorie' },
  { field: 'amountSpent', headerName: 'Montant dépensé', type: 'numberColumn' },
  { field: 'date', headerName: 'Date', type: 'dateColumn' },
  { headerName: 'Employé',
    children :[
      { field: 'employee.firstname', headerName: 'Prénom', type: 'textColumn' },
      { field: 'employee.lastname', headerName: 'Nom', type: 'textColumn' },
      { field: 'employee.username', headerName: 'Nom d\'utilisateur', type: 'textColumn' },
    ]
  },
];
