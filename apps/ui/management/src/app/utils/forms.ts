import { EMAIL, MINLENGTH, PASSWORD, REQUIRED } from '@tanglass-erp/material';
import { Management_User_Role_Enum } from '@TanglassStore/management/index';

const regConfigCompany = (data?) => [
  {type: "input", label: "Nom", inputType: "text", name: "name", value: data?.name,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "ICE", inputType: "text", name: "ICE", value: data?.ICE,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "IF", inputType: "text", name: "IF", value: data?.IF,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "RC", inputType: "text", name: "RC", value: data?.RC,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "CNSS", inputType: "text", name: "CNSS", value: data?.CNSS,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Adresse", inputType: "text", name: "address", value: data?.address,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data?.phone,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "E-mail", inputType: "text", name: "email", value: data?.email,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Site web", inputType: "text", name: "website", value: data?.website},
];


const regConfigEmployee = (data?, salePoints: any = []) => [
  {type: "input", label: "Prénom", inputType: "text", name: "firstname", value: data?.firstname,
    validations: [
      REQUIRED,
      MINLENGTH(3)
    ]
  },
  {type: "input", label: "Nom", inputType: "text", name: "lastname", value: data?.lastname,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Nom d'utilisateur", inputType: "text", name: "username", value: data?.username,
    validations: [
      REQUIRED,
      MINLENGTH(3)
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data?.phone,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Email", inputType: "text", name: "email", value: data?.email,
  validations: [
    REQUIRED
  ]  },
  {type: "input", label: "CIN", inputType: "text", name: "CIN", value: data?.CIN,
 },
  {type: "input", label: "Mot de passe", inputType: "password", name: "password", value: null, disabled: !!data?.id,
  validations: PASSWORD
  },
  {type: "input", label: "Confirmation", inputType: "password", name: "confirmPassword", value: null,disabled: !!data?.id,
    validations: [
      REQUIRED
    ]
  },
  {type: "select", label: "Point de vente", inputType: "text", name: "SalesPointsid", value: data?.SalesPointsid,
    options: salePoints
  },
  {type: "select", label: "Role", inputType: "text", name: "role", value: data?.role,
    options: Object.values(Management_User_Role_Enum).map(item => ({key : item, value: item})),
    validations: [
      REQUIRED
    ]
  },
  { type: "checkbox", label: "Active", inputType: "text", name: "active",
    value: data?.active ?? true,
  },

];


const regConfigSalePoint = (data?) => [
  {type: "input", label: "Emplacement", inputType: "text", name: "name", value: data?.name,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Adresse", inputType: "text", name: "address", value: data?.address,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: data?.phone,
    validations: [
      REQUIRED
    ]
  },
  {type: "input", label: "E-mail", inputType: "text", name: "email", value: data?.email,
    validations: [
      REQUIRED,
      EMAIL
]
  },
  {type: "input", label: "Fax", inputType: "text", name: "fax", value: data?.fax,
    validations: [
      REQUIRED
    ]
  },
];


export {
  regConfigCompany,
  regConfigEmployee,
  regConfigSalePoint
};
