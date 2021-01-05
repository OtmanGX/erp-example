import { MetaData } from "libs/core/shared/metaData";
import { SalePoint } from "./sale-point.models";
import { SalePointForUser } from "./sale-point.models";


export interface User {

  id: string;
  active: boolean;
  firstname: string;
  lastname: string;
  phone: string;
  user_role: UserRole
  SalesPoint: SalePoint
}


export interface DetailedUser extends MetaData {
  CIN?: string;
  active: boolean;
  email?: string;
  firstname: string;
  id: string;
  joinUs?: Date;
  lastname: string;
  leftUs?: Date;
  phone: string;
  password: string;
  SalesPointsid?: string
  username: string;
  user_role: DetailedUserRole;
  SalesPoint?: SalePointForUser

}



export interface UsersProfileForSalePoint {
  id: string;
  active: boolean;
  firstname: string
  lastname: string;
  phone: string;
  username: string;
  user_role: UserRole;
}

interface DetailedUserRole {
  description: string
  name: string
}

interface UserRole {
  name: string;
}
