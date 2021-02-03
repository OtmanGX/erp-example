const ContactHeaders = [
  { field: 'code', headerName: 'Code', type: "linkColumn",
    cellRendererParams: (params) => (
    {
      link: `${params.data.id}`,
    })
  },
  { field: 'name', headerName: 'Name', type: "textColumn" },
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
  { field: 'note', headerName: 'Note', type: "textColumn"},
  { field: 'mail', headerName: 'E-mail', type: "textColumn"},
];


const CustomerHeaders = [
  { field: 'code', headerName: 'Code', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params.data.id}`,
      })
  },
  { field: 'name', headerName: 'Name', type: "textColumn" },
  { field: 'ICE', headerName: 'ICE', type: "textColumn" },
  { field: 'IF', headerName: 'IF', type: "textColumn" },
  { field: 'mail', headerName: 'E-mail', type: "textColumn"},
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
];

const ProviderHeaders = [
  { field: 'name', headerName: 'Name', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params.data.id}`,
      })
  },
  { field: 'note', headerName: 'Note', type: "textColumn" },
  { field: 'mail', headerName: 'E-mail', type: "textColumn"},
  { field: 'phone', headerName: 'Téléphone', type: "textColumn"},
];

export {
  ContactHeaders,
  CustomerHeaders,
  ProviderHeaders
};
