const SalePointHeaders = [
  { field: 'name', headerName: 'Emplacement', type: "linkColumn",
    cellRendererParams: (params) => (
      {
      link: `${params.value}`,
      state: {id: params?.data?.id},
      })
  },
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
  { field: 'fax', headerName: 'Fax', type: "textColumn"},
  { field: 'email', headerName: 'E-mail', type: "textColumn"},
];

const CompanieHeaders = [
  { field: 'name', headerName: 'Nom', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params.value}`,
        state: {id: params?.data?.id},
      })
  },
  { field: 'CNSS', headerName: 'CNSS', type: "textColumn"},
  { field: 'ICE', headerName: 'ICE', type: "textColumn"},
  { field: 'IF', headerName: 'IF', type: "textColumn"},
  { field: 'RC', headerName: 'RC', type: "textColumn"},
  { field: 'address', headerName: 'Adresse', type: "textColumn"},
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
  { field: 'email', headerName: 'E-mail', type: "textColumn"},
];

const UserHeaders = [
  { headerName: 'Nom complet', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params?.data?.username}`,
        state: {id: params?.data?.id},
      }),
    valueGetter: (params) => [params.value, params?.data?.lastname].join(' ')},
  { field: 'username', headerName: 'Nom d\'utilisateur', type: "textColumn"},
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
];

export {
  UserHeaders,
  SalePointHeaders,
  CompanieHeaders
};
