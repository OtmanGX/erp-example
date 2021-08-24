import { ROLES } from '@tanglass-erp/store/app';
import { ErpPermissions } from '@tanglass-erp/ag-grid';

const DeliveryPermissions = new Map<ROLES, ErpPermissions>([
  [ROLES.admin, { add: true, delete: true, update: false, INVOICE: true }],
  [ROLES.user, { add: true, delete: true, update: true, INVOICE: false }],
  [ROLES.commercial, { add: true, delete: true, update: true, INVOICE: false }],
]);

const OrderPermissions = new Map<ROLES, ErpPermissions>([
  ]
);

const DraftPermissions = new Map<ROLES, ErpPermissions>([
  ]
);

const QuotationPermissions = new Map<ROLES, ErpPermissions>([
  ]
);

const InvoicePermissions = new Map<ROLES, ErpPermissions>([
  ]
);



export {
  DeliveryPermissions,
  DraftPermissions,
  InvoicePermissions,
  OrderPermissions,
  QuotationPermissions
};
