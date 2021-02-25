import { FormDialog } from '@tanglass-erp/material';
import { Management_User_Role_Enum } from '@TanglassStore/management/index';

const regConfigCompany = (data?) => [
  {type: "input", label: "Nom", inputType: "text", name: "name", value: data?.name,
    validations: [
      FormDialog.REQUIRED
    ]
  },
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
  {type: "input", label: "RC", inputType: "text", name: "RC", value: data?.RC,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "CNSS", inputType: "text", name: "CNSS", value: data?.CNSS,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Adresse", inputType: "text", name: "address", value: data?.address,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data?.phone,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "E-mail", inputType: "text", name: "email", value: data?.email,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Site web", inputType: "text", name: "website", value: data?.website},
];


const regConfigEmployee = (data?, salePoints = []) => [
  {type: "input", label: "Prénom", inputType: "text", name: "firstname", value: data.firstname,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Nom", inputType: "text", name: "lastname", value: data.lastname,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Nom d'utilisateur", inputType: "text", name: "username", value: data.username,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data.phone,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Mot de passe", inputType: "password", name: "password", value: null,
    validations: FormDialog.PASSWORD
  },
  {type: "input", label: "Confirmation", inputType: "password", name: "confirmPassword", value: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", label: "Point de vente", inputType: "text", name: "phone", value: data?.SalesPoint,
    options: salePoints.map(item => ({key: item.id, value: item.name}))
  },
  {type: "select", label: "Role", inputType: "text", name: "phone", value: data?.user_role,
    options: Object.values(Management_User_Role_Enum).map(item => ({key : item, value: item})),
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "checkbox", label: "Active", inputType: "text", name: "active",
    value: data?.active ?? true,
  },
];


const regConfigSalePoint = (data?) => [
  {type: "input", label: "Emplacement", inputType: "text", name: "name", value: data?.name,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Adresse", inputType: "text", name: "address", value: data?.address,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data?.phone,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "E-mail", inputType: "text", name: "email", value: data?.email,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Fax", inputType: "text", name: "fax", value: data?.fax,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];


export {
  regConfigCompany,
  regConfigEmployee,
  regConfigSalePoint
};
