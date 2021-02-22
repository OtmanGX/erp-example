import { SalePointForUser } from "./sale-point.models";

import { MetaData } from '@tanglass-erp/core/common';

export interface User {
  id: string;
  active: boolean;
  firstname?: string;
  lastname?: string;
  phone?: string;
  username: string;
  user_role: UserRole;
  SalesPoint?: SalePointForUser;
}


export interface DetailedUser extends MetaData {
  CIN?: string;
  active: boolean;
  email?: string;
  firstname?: string;
  id: string;
  joinUs?: Date;
  lastname?: string;
  leftUs?: Date;
  phone?: string;
  SalesPointsid?: string;
  username: string;
  user_role: UserRole;
  SalesPoint?: SalePointForUser;
}


export interface UsersProfileForSalePoint {
  id: string;
  active: boolean;
  firstname?: string;
  lastname?: string;
  phone?: string;
  username: string;
  user_role: UserRole;
}



interface UserRole {
  name: string;
  description?: string;
}
