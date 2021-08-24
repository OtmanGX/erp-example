import { ROLES } from '@tanglass-erp/store/app';
import { ErpPermissions } from '@tanglass-erp/ag-grid';

const DeliveryPermissions = new Map<ROLES, ErpPermissions>([
  [ROLES.admin, { add: true, delete: true, update: true, INVOICE: true}],
  [ROLES.user, { add: true, delete: true, update: true,  INVOICE: false }],
  [ROLES.commercial, { add: true, delete: true, update: true,  INVOICE: false }]
]);



export {
  DeliveryPermissions
};
