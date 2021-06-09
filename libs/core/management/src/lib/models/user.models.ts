import { SalePointForUser } from "./sale-point.models";

import { MetaData } from '@tanglass-erp/core/common';
import { Management_User_Role_Enum } from "@tanglass-erp/infrastructure/graphql";
export interface User {
  id: string;
  CIN?:string;
  active?: boolean;
  firstname?: string;
  lastname?: string;
  phone?: string;
  username?: string;
  SalesPoint?: SalePointForUser;
  //role
}


export interface DetailedUser extends MetaData {
  CIN?: string;
  active?: boolean;
  email?: string;
  firstname?: string;
  id: string;
  joinUs?: Date;
  lastname?: string;
  leftUs?: Date;
  phone?: string;
  SalesPointsid?: string;
  username: string;
  role:Management_User_Role_Enum
  SalesPoint?: SalePointForUser;
}
export interface InsertedUser{
  CIN?: string;
  active?: boolean;
  email: string;
  firstname?: string;
  id: string;
  joinUs?: Date;
  lastname?: string;
  leftUs?: Date;
  phone?: string;
  SalesPointsid?: string;
  username: string;
  role:Management_User_Role_Enum
  SalesPoint?: SalePointForUser;
  password:string;
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

