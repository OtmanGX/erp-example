import { FormDialog } from '@tanglass-erp/material';

const regConfigAddresses = (data?) => [
  {type: "input", name: "address", label: "Adresse", inputType: "text", value: data?.address,
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "input", name: "city", label: "Ville", inputType: "text", value: data?.city},
  {type: "input", name: "zip", label: "Code postal", inputType: "text", value: data?.zip},
];

const regConfigProvider = (data?) => [
  {type: "input", name: "name", label: "Nom", inputType: "text", value: data?.name,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", name: "mail", label: "E-mail", inputType: "text", value: data?.mail},
  {type: "input", name: "phone", label: "Téléphone", inputType: "text", value: data?.phone},
  {type: "input", name: "note", label: "Note", inputType: "text", value: data?.note},
];

const regConfigContact = (data?) => [
  {type: "input", name: "code", label: "Code", inputType: "text", value: data?.code,
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "input", name: "name", label: "Nom", inputType: "text", value: data?.name},
  {type: "input", name: "mail", label: "E-mail", inputType: "email", value: data?.mail},
  {type: "input", name: "phone", label: "Téléphone", inputType: "tel", value: data?.phone},
  {type: "input", name: "note", label: "Note", inputType: "text", value: data?.note},
];

const regCustomerConfig = (data?) => [
  {type: "input", name: "name", label: "Nom", inputType: "text", value: data?.name},
  {type: "input", label: "ICE", inputType: "text", name: "ICE", value: data?.ICE,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "IF", inputType: "text", name: "IF", value: data?.IF,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", name: "phone", label: "Téléphone", inputType: "text", value: data?.phone},
  {type: "input", name: "mail", label: "E-mail", inputType: "text", value: data?.mail},
  {type: "input", name: "note", label: "Note", inputType: "text", value: data?.note},
  {type: "input", name: "website", label: "Site web", inputType: "text", value: data?.website},
  {type: "input", name: "Fax", label: "Fax", inputType: "text", value: data?.Fax},
];


export {
  regConfigAddresses,
  regConfigProvider,
  regConfigContact,
  regCustomerConfig
};
