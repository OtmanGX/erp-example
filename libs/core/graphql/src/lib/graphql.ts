import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "management.Company" */
export type Management_Company = {
  __typename?: 'management_Company';
  CNSS: Scalars['String'];
  ICE: Scalars['String'];
  IF: Scalars['String'];
  RC: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['uuid'];
  /** An object relationship */
  createdByUser: Management_User_Profile;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  updatedBy: Scalars['uuid'];
  /** An object relationship */
  updatedByUser: Management_User_Profile;
  /** An array relationship */
  warehouses: Array<Management_Warehouse>;
  /** An aggregated array relationship */
  warehouses_aggregate: Management_Warehouse_Aggregate;
  website: Scalars['String'];
};

/** columns and relationships of "management.Company" */
export type Management_CompanyWarehousesArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** columns and relationships of "management.Company" */
export type Management_CompanyWarehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** aggregated selection of "management.Company" */
export type Management_Company_Aggregate = {
  __typename?: 'management_Company_aggregate';
  aggregate?: Maybe<Management_Company_Aggregate_Fields>;
  nodes: Array<Management_Company>;
};

/** aggregate fields of "management.Company" */
export type Management_Company_Aggregate_Fields = {
  __typename?: 'management_Company_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_Company_Max_Fields>;
  min?: Maybe<Management_Company_Min_Fields>;
};

/** aggregate fields of "management.Company" */
export type Management_Company_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_Company_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.Company" */
export type Management_Company_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_Company_Max_Order_By>;
  min?: Maybe<Management_Company_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.Company" */
export type Management_Company_Arr_Rel_Insert_Input = {
  data: Array<Management_Company_Insert_Input>;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.Company". All fields are combined with a logical 'AND'. */
export type Management_Company_Bool_Exp = {
  CNSS?: Maybe<String_Comparison_Exp>;
  ICE?: Maybe<String_Comparison_Exp>;
  IF?: Maybe<String_Comparison_Exp>;
  RC?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Management_Company_Bool_Exp>>>;
  _not?: Maybe<Management_Company_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_Company_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  createdByUser?: Maybe<Management_User_Profile_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  updatedByUser?: Maybe<Management_User_Profile_Bool_Exp>;
  warehouses?: Maybe<Management_Warehouse_Bool_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.Company" */
export enum Management_Company_Constraint {
  /** unique or primary key constraint */
  CompanieNameKey = 'Companie_name_key',
  /** unique or primary key constraint */
  CompaniePkey = 'Companie_pkey',
}

/** input type for inserting data into table "management.Company" */
export type Management_Company_Insert_Input = {
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  createdByUser?: Maybe<Management_User_Profile_Obj_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updatedByUser?: Maybe<Management_User_Profile_Obj_Rel_Insert_Input>;
  warehouses?: Maybe<Management_Warehouse_Arr_Rel_Insert_Input>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Management_Company_Max_Fields = {
  __typename?: 'management_Company_max_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "management.Company" */
export type Management_Company_Max_Order_By = {
  CNSS?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  RC?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_Company_Min_Fields = {
  __typename?: 'management_Company_min_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "management.Company" */
export type Management_Company_Min_Order_By = {
  CNSS?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  RC?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.Company" */
export type Management_Company_Mutation_Response = {
  __typename?: 'management_Company_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_Company>;
};

/** input type for inserting object relation for remote table "management.Company" */
export type Management_Company_Obj_Rel_Insert_Input = {
  data: Management_Company_Insert_Input;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** on conflict condition type for table "management.Company" */
export type Management_Company_On_Conflict = {
  constraint: Management_Company_Constraint;
  update_columns: Array<Management_Company_Update_Column>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** ordering options when selecting data from "management.Company" */
export type Management_Company_Order_By = {
  CNSS?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  RC?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  createdByUser?: Maybe<Management_User_Profile_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updatedByUser?: Maybe<Management_User_Profile_Order_By>;
  warehouses_aggregate?: Maybe<Management_Warehouse_Aggregate_Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "management.Company" */
export type Management_Company_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.Company" */
export enum Management_Company_Select_Column {
  /** column name */
  Cnss = 'CNSS',
  /** column name */
  Ice = 'ICE',
  /** column name */
  If = 'IF',
  /** column name */
  Rc = 'RC',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website',
}

/** input type for updating data in table "management.Company" */
export type Management_Company_Set_Input = {
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** update columns of table "management.Company" */
export enum Management_Company_Update_Column {
  /** column name */
  Cnss = 'CNSS',
  /** column name */
  Ice = 'ICE',
  /** column name */
  If = 'IF',
  /** column name */
  Rc = 'RC',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website',
}

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPoint = {
  __typename?: 'management_SalesPoint';
  /** An array relationship */
  UserProfiles_SalesPoints: Array<Management_UserProfiles_SalesPoints>;
  /** An aggregated array relationship */
  UserProfiles_SalesPoints_aggregate: Management_UserProfiles_SalesPoints_Aggregate;
  address?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  warehouses: Array<Management_Warehouse>;
  /** An aggregated array relationship */
  warehouses_aggregate: Management_Warehouse_Aggregate;
};

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointUserProfiles_SalesPointsArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointUserProfiles_SalesPoints_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointWarehousesArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointWarehouses_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** aggregated selection of "management.SalesPoint" */
export type Management_SalesPoint_Aggregate = {
  __typename?: 'management_SalesPoint_aggregate';
  aggregate?: Maybe<Management_SalesPoint_Aggregate_Fields>;
  nodes: Array<Management_SalesPoint>;
};

/** aggregate fields of "management.SalesPoint" */
export type Management_SalesPoint_Aggregate_Fields = {
  __typename?: 'management_SalesPoint_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_SalesPoint_Max_Fields>;
  min?: Maybe<Management_SalesPoint_Min_Fields>;
};

/** aggregate fields of "management.SalesPoint" */
export type Management_SalesPoint_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.SalesPoint" */
export type Management_SalesPoint_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_SalesPoint_Max_Order_By>;
  min?: Maybe<Management_SalesPoint_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.SalesPoint" */
export type Management_SalesPoint_Arr_Rel_Insert_Input = {
  data: Array<Management_SalesPoint_Insert_Input>;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.SalesPoint". All fields are combined with a logical 'AND'. */
export type Management_SalesPoint_Bool_Exp = {
  UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Bool_Exp
  >;
  _and?: Maybe<Array<Maybe<Management_SalesPoint_Bool_Exp>>>;
  _not?: Maybe<Management_SalesPoint_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_SalesPoint_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  fax?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  warehouses?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** unique or primary key constraints on table "management.SalesPoint" */
export enum Management_SalesPoint_Constraint {
  /** unique or primary key constraint */
  SalesPointNameKey = 'SalesPoint_name_key',
  /** unique or primary key constraint */
  SalesPointPkey = 'SalesPoint_pkey',
}

/** input type for inserting data into table "management.SalesPoint" */
export type Management_SalesPoint_Insert_Input = {
  UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Arr_Rel_Insert_Input
  >;
  address?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  warehouses?: Maybe<Management_Warehouse_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Management_SalesPoint_Max_Fields = {
  __typename?: 'management_SalesPoint_max_fields';
  address?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "management.SalesPoint" */
export type Management_SalesPoint_Max_Order_By = {
  address?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_SalesPoint_Min_Fields = {
  __typename?: 'management_SalesPoint_min_fields';
  address?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "management.SalesPoint" */
export type Management_SalesPoint_Min_Order_By = {
  address?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.SalesPoint" */
export type Management_SalesPoint_Mutation_Response = {
  __typename?: 'management_SalesPoint_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_SalesPoint>;
};

/** input type for inserting object relation for remote table "management.SalesPoint" */
export type Management_SalesPoint_Obj_Rel_Insert_Input = {
  data: Management_SalesPoint_Insert_Input;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** on conflict condition type for table "management.SalesPoint" */
export type Management_SalesPoint_On_Conflict = {
  constraint: Management_SalesPoint_Constraint;
  update_columns: Array<Management_SalesPoint_Update_Column>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** ordering options when selecting data from "management.SalesPoint" */
export type Management_SalesPoint_Order_By = {
  UserProfiles_SalesPoints_aggregate?: Maybe<
    Management_UserProfiles_SalesPoints_Aggregate_Order_By
  >;
  address?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  warehouses_aggregate?: Maybe<Management_Warehouse_Aggregate_Order_By>;
};

/** primary key columns input for table: "management.SalesPoint" */
export type Management_SalesPoint_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.SalesPoint" */
export enum Management_SalesPoint_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Fax = 'fax',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "management.SalesPoint" */
export type Management_SalesPoint_Set_Input = {
  address?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "management.SalesPoint" */
export enum Management_SalesPoint_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Fax = 'fax',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints = {
  __typename?: 'management_UserProfiles_SalesPoints';
  /** An object relationship */
  SalesPoint: Management_SalesPoint;
  salesPointId: Scalars['uuid'];
  userProfileId: Scalars['uuid'];
  /** An object relationship */
  user_profile: Management_User_Profile;
};

/** aggregated selection of "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Aggregate = {
  __typename?: 'management_UserProfiles_SalesPoints_aggregate';
  aggregate?: Maybe<Management_UserProfiles_SalesPoints_Aggregate_Fields>;
  nodes: Array<Management_UserProfiles_SalesPoints>;
};

/** aggregate fields of "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Aggregate_Fields = {
  __typename?: 'management_UserProfiles_SalesPoints_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_UserProfiles_SalesPoints_Max_Fields>;
  min?: Maybe<Management_UserProfiles_SalesPoints_Min_Fields>;
};

/** aggregate fields of "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_UserProfiles_SalesPoints_Max_Order_By>;
  min?: Maybe<Management_UserProfiles_SalesPoints_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Arr_Rel_Insert_Input = {
  data: Array<Management_UserProfiles_SalesPoints_Insert_Input>;
  on_conflict?: Maybe<Management_UserProfiles_SalesPoints_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.UserProfiles_SalesPoints". All fields are combined with a logical 'AND'. */
export type Management_UserProfiles_SalesPoints_Bool_Exp = {
  SalesPoint?: Maybe<Management_SalesPoint_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>>>;
  _not?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>>>;
  salesPointId?: Maybe<Uuid_Comparison_Exp>;
  userProfileId?: Maybe<Uuid_Comparison_Exp>;
  user_profile?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "management.UserProfiles_SalesPoints" */
export enum Management_UserProfiles_SalesPoints_Constraint {
  /** unique or primary key constraint */
  UserProfilesSalesPointsPkey = 'UserProfiles_SalesPoints_pkey',
}

/** input type for inserting data into table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Insert_Input = {
  SalesPoint?: Maybe<Management_SalesPoint_Obj_Rel_Insert_Input>;
  salesPointId?: Maybe<Scalars['uuid']>;
  userProfileId?: Maybe<Scalars['uuid']>;
  user_profile?: Maybe<Management_User_Profile_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Management_UserProfiles_SalesPoints_Max_Fields = {
  __typename?: 'management_UserProfiles_SalesPoints_max_fields';
  salesPointId?: Maybe<Scalars['uuid']>;
  userProfileId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Max_Order_By = {
  salesPointId?: Maybe<Order_By>;
  userProfileId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_UserProfiles_SalesPoints_Min_Fields = {
  __typename?: 'management_UserProfiles_SalesPoints_min_fields';
  salesPointId?: Maybe<Scalars['uuid']>;
  userProfileId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Min_Order_By = {
  salesPointId?: Maybe<Order_By>;
  userProfileId?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Mutation_Response = {
  __typename?: 'management_UserProfiles_SalesPoints_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_UserProfiles_SalesPoints>;
};

/** input type for inserting object relation for remote table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Obj_Rel_Insert_Input = {
  data: Management_UserProfiles_SalesPoints_Insert_Input;
  on_conflict?: Maybe<Management_UserProfiles_SalesPoints_On_Conflict>;
};

/** on conflict condition type for table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_On_Conflict = {
  constraint: Management_UserProfiles_SalesPoints_Constraint;
  update_columns: Array<Management_UserProfiles_SalesPoints_Update_Column>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** ordering options when selecting data from "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Order_By = {
  SalesPoint?: Maybe<Management_SalesPoint_Order_By>;
  salesPointId?: Maybe<Order_By>;
  userProfileId?: Maybe<Order_By>;
  user_profile?: Maybe<Management_User_Profile_Order_By>;
};

/** primary key columns input for table: "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Pk_Columns_Input = {
  salesPointId: Scalars['uuid'];
  userProfileId: Scalars['uuid'];
};

/** select columns of table "management.UserProfiles_SalesPoints" */
export enum Management_UserProfiles_SalesPoints_Select_Column {
  /** column name */
  SalesPointId = 'salesPointId',
  /** column name */
  UserProfileId = 'userProfileId',
}

/** input type for updating data in table "management.UserProfiles_SalesPoints" */
export type Management_UserProfiles_SalesPoints_Set_Input = {
  salesPointId?: Maybe<Scalars['uuid']>;
  userProfileId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "management.UserProfiles_SalesPoints" */
export enum Management_UserProfiles_SalesPoints_Update_Column {
  /** column name */
  SalesPointId = 'salesPointId',
  /** column name */
  UserProfileId = 'userProfileId',
}

/** columns and relationships of "management.user_profile" */
export type Management_User_Profile = {
  __typename?: 'management_user_profile';
  CIN?: Maybe<Scalars['String']>;
  /** An array relationship */
  UserProfiles_SalesPoints: Array<Management_UserProfiles_SalesPoints>;
  /** An aggregated array relationship */
  UserProfiles_SalesPoints_aggregate: Management_UserProfiles_SalesPoints_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  created_by?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  id: Scalars['uuid'];
  join_at?: Maybe<Scalars['date']>;
  lastname: Scalars['String'];
  left_at?: Maybe<Scalars['date']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Management_User_Role_Enum;
  updated_at: Scalars['timestamptz'];
  updated_by?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_role: Management_User_Role;
  username: Scalars['String'];
};

/** columns and relationships of "management.user_profile" */
export type Management_User_ProfileUserProfiles_SalesPointsArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** columns and relationships of "management.user_profile" */
export type Management_User_ProfileUserProfiles_SalesPoints_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** aggregated selection of "management.user_profile" */
export type Management_User_Profile_Aggregate = {
  __typename?: 'management_user_profile_aggregate';
  aggregate?: Maybe<Management_User_Profile_Aggregate_Fields>;
  nodes: Array<Management_User_Profile>;
};

/** aggregate fields of "management.user_profile" */
export type Management_User_Profile_Aggregate_Fields = {
  __typename?: 'management_user_profile_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_User_Profile_Max_Fields>;
  min?: Maybe<Management_User_Profile_Min_Fields>;
};

/** aggregate fields of "management.user_profile" */
export type Management_User_Profile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_User_Profile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.user_profile" */
export type Management_User_Profile_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_User_Profile_Max_Order_By>;
  min?: Maybe<Management_User_Profile_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.user_profile" */
export type Management_User_Profile_Arr_Rel_Insert_Input = {
  data: Array<Management_User_Profile_Insert_Input>;
  on_conflict?: Maybe<Management_User_Profile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.user_profile". All fields are combined with a logical 'AND'. */
export type Management_User_Profile_Bool_Exp = {
  CIN?: Maybe<String_Comparison_Exp>;
  UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Bool_Exp
  >;
  _and?: Maybe<Array<Maybe<Management_User_Profile_Bool_Exp>>>;
  _not?: Maybe<Management_User_Profile_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_User_Profile_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<Uuid_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  join_at?: Maybe<Date_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  left_at?: Maybe<Date_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Management_User_Role_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_by?: Maybe<Uuid_Comparison_Exp>;
  user_role?: Maybe<Management_User_Role_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.user_profile" */
export enum Management_User_Profile_Constraint {
  /** unique or primary key constraint */
  UserProfilePkey = 'user_profile_pkey',
  /** unique or primary key constraint */
  UserProfileUsernameKey = 'user_profile_username_key',
}

/** input type for inserting data into table "management.user_profile" */
export type Management_User_Profile_Insert_Input = {
  CIN?: Maybe<Scalars['String']>;
  UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Arr_Rel_Insert_Input
  >;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_at?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  left_at?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  user_role?: Maybe<Management_User_Role_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Management_User_Profile_Max_Fields = {
  __typename?: 'management_user_profile_max_fields';
  CIN?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_at?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  left_at?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "management.user_profile" */
export type Management_User_Profile_Max_Order_By = {
  CIN?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_at?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  left_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_User_Profile_Min_Fields = {
  __typename?: 'management_user_profile_min_fields';
  CIN?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_at?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  left_at?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "management.user_profile" */
export type Management_User_Profile_Min_Order_By = {
  CIN?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_at?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  left_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.user_profile" */
export type Management_User_Profile_Mutation_Response = {
  __typename?: 'management_user_profile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_User_Profile>;
};

/** input type for inserting object relation for remote table "management.user_profile" */
export type Management_User_Profile_Obj_Rel_Insert_Input = {
  data: Management_User_Profile_Insert_Input;
  on_conflict?: Maybe<Management_User_Profile_On_Conflict>;
};

/** on conflict condition type for table "management.user_profile" */
export type Management_User_Profile_On_Conflict = {
  constraint: Management_User_Profile_Constraint;
  update_columns: Array<Management_User_Profile_Update_Column>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** ordering options when selecting data from "management.user_profile" */
export type Management_User_Profile_Order_By = {
  CIN?: Maybe<Order_By>;
  UserProfiles_SalesPoints_aggregate?: Maybe<
    Management_UserProfiles_SalesPoints_Aggregate_Order_By
  >;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_at?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  left_at?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  user_role?: Maybe<Management_User_Role_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "management.user_profile" */
export type Management_User_Profile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.user_profile" */
export enum Management_User_Profile_Select_Column {
  /** column name */
  Cin = 'CIN',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinAt = 'join_at',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LeftAt = 'left_at',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "management.user_profile" */
export type Management_User_Profile_Set_Input = {
  CIN?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_at?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  left_at?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "management.user_profile" */
export enum Management_User_Profile_Update_Column {
  /** column name */
  Cin = 'CIN',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinAt = 'join_at',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LeftAt = 'left_at',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Username = 'username',
}

/** columns and relationships of "management.user_role" */
export type Management_User_Role = {
  __typename?: 'management_user_role';
  description: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  user_profiles: Array<Management_User_Profile>;
  /** An aggregated array relationship */
  user_profiles_aggregate: Management_User_Profile_Aggregate;
};

/** columns and relationships of "management.user_role" */
export type Management_User_RoleUser_ProfilesArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** columns and relationships of "management.user_role" */
export type Management_User_RoleUser_Profiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** aggregated selection of "management.user_role" */
export type Management_User_Role_Aggregate = {
  __typename?: 'management_user_role_aggregate';
  aggregate?: Maybe<Management_User_Role_Aggregate_Fields>;
  nodes: Array<Management_User_Role>;
};

/** aggregate fields of "management.user_role" */
export type Management_User_Role_Aggregate_Fields = {
  __typename?: 'management_user_role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_User_Role_Max_Fields>;
  min?: Maybe<Management_User_Role_Min_Fields>;
};

/** aggregate fields of "management.user_role" */
export type Management_User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.user_role" */
export type Management_User_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_User_Role_Max_Order_By>;
  min?: Maybe<Management_User_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.user_role" */
export type Management_User_Role_Arr_Rel_Insert_Input = {
  data: Array<Management_User_Role_Insert_Input>;
  on_conflict?: Maybe<Management_User_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.user_role". All fields are combined with a logical 'AND'. */
export type Management_User_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Management_User_Role_Bool_Exp>>>;
  _not?: Maybe<Management_User_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_User_Role_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_profiles?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "management.user_role" */
export enum Management_User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey',
}

export enum Management_User_Role_Enum {
  /** admin role */
  Admin = 'admin',
  /** empty user */
  User = 'user',
}

/** expression to compare columns of type management_user_role_enum. All fields are combined with logical 'AND'. */
export type Management_User_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Management_User_Role_Enum>;
  _in?: Maybe<Array<Management_User_Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Management_User_Role_Enum>;
  _nin?: Maybe<Array<Management_User_Role_Enum>>;
};

/** input type for inserting data into table "management.user_role" */
export type Management_User_Role_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_profiles?: Maybe<Management_User_Profile_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Management_User_Role_Max_Fields = {
  __typename?: 'management_user_role_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "management.user_role" */
export type Management_User_Role_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_User_Role_Min_Fields = {
  __typename?: 'management_user_role_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "management.user_role" */
export type Management_User_Role_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.user_role" */
export type Management_User_Role_Mutation_Response = {
  __typename?: 'management_user_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_User_Role>;
};

/** input type for inserting object relation for remote table "management.user_role" */
export type Management_User_Role_Obj_Rel_Insert_Input = {
  data: Management_User_Role_Insert_Input;
  on_conflict?: Maybe<Management_User_Role_On_Conflict>;
};

/** on conflict condition type for table "management.user_role" */
export type Management_User_Role_On_Conflict = {
  constraint: Management_User_Role_Constraint;
  update_columns: Array<Management_User_Role_Update_Column>;
  where?: Maybe<Management_User_Role_Bool_Exp>;
};

/** ordering options when selecting data from "management.user_role" */
export type Management_User_Role_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_profiles_aggregate?: Maybe<Management_User_Profile_Aggregate_Order_By>;
};

/** primary key columns input for table: "management.user_role" */
export type Management_User_Role_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "management.user_role" */
export enum Management_User_Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "management.user_role" */
export type Management_User_Role_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "management.user_role" */
export enum Management_User_Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "management.warehouse" */
export type Management_Warehouse = {
  __typename?: 'management_warehouse';
  /** An object relationship */
  Company: Management_Company;
  /** An object relationship */
  SalesPoint: Management_SalesPoint;
  address: Scalars['String'];
  companyId: Scalars['uuid'];
  createdBy: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  salesPointId: Scalars['uuid'];
  type: Scalars['String'];
  updatedBy: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "management.warehouse" */
export type Management_Warehouse_Aggregate = {
  __typename?: 'management_warehouse_aggregate';
  aggregate?: Maybe<Management_Warehouse_Aggregate_Fields>;
  nodes: Array<Management_Warehouse>;
};

/** aggregate fields of "management.warehouse" */
export type Management_Warehouse_Aggregate_Fields = {
  __typename?: 'management_warehouse_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_Warehouse_Max_Fields>;
  min?: Maybe<Management_Warehouse_Min_Fields>;
};

/** aggregate fields of "management.warehouse" */
export type Management_Warehouse_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_Warehouse_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.warehouse" */
export type Management_Warehouse_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_Warehouse_Max_Order_By>;
  min?: Maybe<Management_Warehouse_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.warehouse" */
export type Management_Warehouse_Arr_Rel_Insert_Input = {
  data: Array<Management_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Management_Warehouse_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.warehouse". All fields are combined with a logical 'AND'. */
export type Management_Warehouse_Bool_Exp = {
  Company?: Maybe<Management_Company_Bool_Exp>;
  SalesPoint?: Maybe<Management_SalesPoint_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Management_Warehouse_Bool_Exp>>>;
  _not?: Maybe<Management_Warehouse_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_Warehouse_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  companyId?: Maybe<Uuid_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  salesPointId?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.warehouse" */
export enum Management_Warehouse_Constraint {
  /** unique or primary key constraint */
  WarehouseNameKey = 'warehouse_name_key',
  /** unique or primary key constraint */
  WarehousePkey = 'warehouse_pkey',
}

/** input type for inserting data into table "management.warehouse" */
export type Management_Warehouse_Insert_Input = {
  Company?: Maybe<Management_Company_Obj_Rel_Insert_Input>;
  SalesPoint?: Maybe<Management_SalesPoint_Obj_Rel_Insert_Input>;
  address?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['uuid']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  salesPointId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Management_Warehouse_Max_Fields = {
  __typename?: 'management_warehouse_max_fields';
  address?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['uuid']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  salesPointId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "management.warehouse" */
export type Management_Warehouse_Max_Order_By = {
  address?: Maybe<Order_By>;
  companyId?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  salesPointId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_Warehouse_Min_Fields = {
  __typename?: 'management_warehouse_min_fields';
  address?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['uuid']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  salesPointId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "management.warehouse" */
export type Management_Warehouse_Min_Order_By = {
  address?: Maybe<Order_By>;
  companyId?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  salesPointId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.warehouse" */
export type Management_Warehouse_Mutation_Response = {
  __typename?: 'management_warehouse_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_Warehouse>;
};

/** input type for inserting object relation for remote table "management.warehouse" */
export type Management_Warehouse_Obj_Rel_Insert_Input = {
  data: Management_Warehouse_Insert_Input;
  on_conflict?: Maybe<Management_Warehouse_On_Conflict>;
};

/** on conflict condition type for table "management.warehouse" */
export type Management_Warehouse_On_Conflict = {
  constraint: Management_Warehouse_Constraint;
  update_columns: Array<Management_Warehouse_Update_Column>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** ordering options when selecting data from "management.warehouse" */
export type Management_Warehouse_Order_By = {
  Company?: Maybe<Management_Company_Order_By>;
  SalesPoint?: Maybe<Management_SalesPoint_Order_By>;
  address?: Maybe<Order_By>;
  companyId?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  salesPointId?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "management.warehouse" */
export type Management_Warehouse_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.warehouse" */
export enum Management_Warehouse_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SalesPointId = 'salesPointId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "management.warehouse" */
export type Management_Warehouse_Set_Input = {
  address?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['uuid']>;
  createdBy?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  salesPointId?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "management.warehouse" */
export enum Management_Warehouse_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SalesPointId = 'salesPointId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "management.Company" */
  delete_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** delete single row from the table: "management.Company" */
  delete_management_Company_by_pk?: Maybe<Management_Company>;
  /** delete data from the table: "management.SalesPoint" */
  delete_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** delete single row from the table: "management.SalesPoint" */
  delete_management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** delete data from the table: "management.UserProfiles_SalesPoints" */
  delete_management_UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Mutation_Response
  >;
  /** delete single row from the table: "management.UserProfiles_SalesPoints" */
  delete_management_UserProfiles_SalesPoints_by_pk?: Maybe<
    Management_UserProfiles_SalesPoints
  >;
  /** delete data from the table: "management.user_profile" */
  delete_management_user_profile?: Maybe<
    Management_User_Profile_Mutation_Response
  >;
  /** delete single row from the table: "management.user_profile" */
  delete_management_user_profile_by_pk?: Maybe<Management_User_Profile>;
  /** delete data from the table: "management.user_role" */
  delete_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** delete single row from the table: "management.user_role" */
  delete_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** delete data from the table: "management.warehouse" */
  delete_management_warehouse?: Maybe<Management_Warehouse_Mutation_Response>;
  /** delete single row from the table: "management.warehouse" */
  delete_management_warehouse_by_pk?: Maybe<Management_Warehouse>;
  /** insert data into the table: "management.Company" */
  insert_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** insert a single row into the table: "management.Company" */
  insert_management_Company_one?: Maybe<Management_Company>;
  /** insert data into the table: "management.SalesPoint" */
  insert_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** insert a single row into the table: "management.SalesPoint" */
  insert_management_SalesPoint_one?: Maybe<Management_SalesPoint>;
  /** insert data into the table: "management.UserProfiles_SalesPoints" */
  insert_management_UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Mutation_Response
  >;
  /** insert a single row into the table: "management.UserProfiles_SalesPoints" */
  insert_management_UserProfiles_SalesPoints_one?: Maybe<
    Management_UserProfiles_SalesPoints
  >;
  /** insert data into the table: "management.user_profile" */
  insert_management_user_profile?: Maybe<
    Management_User_Profile_Mutation_Response
  >;
  /** insert a single row into the table: "management.user_profile" */
  insert_management_user_profile_one?: Maybe<Management_User_Profile>;
  /** insert data into the table: "management.user_role" */
  insert_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** insert a single row into the table: "management.user_role" */
  insert_management_user_role_one?: Maybe<Management_User_Role>;
  /** insert data into the table: "management.warehouse" */
  insert_management_warehouse?: Maybe<Management_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "management.warehouse" */
  insert_management_warehouse_one?: Maybe<Management_Warehouse>;
  /** perform the action: "login" */
  login?: Maybe<LoginOutput>;
  /** update data of the table: "management.Company" */
  update_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** update single row of the table: "management.Company" */
  update_management_Company_by_pk?: Maybe<Management_Company>;
  /** update data of the table: "management.SalesPoint" */
  update_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** update single row of the table: "management.SalesPoint" */
  update_management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** update data of the table: "management.UserProfiles_SalesPoints" */
  update_management_UserProfiles_SalesPoints?: Maybe<
    Management_UserProfiles_SalesPoints_Mutation_Response
  >;
  /** update single row of the table: "management.UserProfiles_SalesPoints" */
  update_management_UserProfiles_SalesPoints_by_pk?: Maybe<
    Management_UserProfiles_SalesPoints
  >;
  /** update data of the table: "management.user_profile" */
  update_management_user_profile?: Maybe<
    Management_User_Profile_Mutation_Response
  >;
  /** update single row of the table: "management.user_profile" */
  update_management_user_profile_by_pk?: Maybe<Management_User_Profile>;
  /** update data of the table: "management.user_role" */
  update_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** update single row of the table: "management.user_role" */
  update_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** update data of the table: "management.warehouse" */
  update_management_warehouse?: Maybe<Management_Warehouse_Mutation_Response>;
  /** update single row of the table: "management.warehouse" */
  update_management_warehouse_by_pk?: Maybe<Management_Warehouse>;
};

/** mutation root */
export type Mutation_RootDelete_Management_CompanyArgs = {
  where: Management_Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_Company_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Management_SalesPointArgs = {
  where: Management_SalesPoint_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_SalesPoint_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Management_UserProfiles_SalesPointsArgs = {
  where: Management_UserProfiles_SalesPoints_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_UserProfiles_SalesPoints_By_PkArgs = {
  salesPointId: Scalars['uuid'];
  userProfileId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Management_User_ProfileArgs = {
  where: Management_User_Profile_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_User_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Management_User_RoleArgs = {
  where: Management_User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_User_Role_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Management_WarehouseArgs = {
  where: Management_Warehouse_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Management_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_Management_CompanyArgs = {
  objects: Array<Management_Company_Insert_Input>;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_Company_OneArgs = {
  object: Management_Company_Insert_Input;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_SalesPointArgs = {
  objects: Array<Management_SalesPoint_Insert_Input>;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_SalesPoint_OneArgs = {
  object: Management_SalesPoint_Insert_Input;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_UserProfiles_SalesPointsArgs = {
  objects: Array<Management_UserProfiles_SalesPoints_Insert_Input>;
  on_conflict?: Maybe<Management_UserProfiles_SalesPoints_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_UserProfiles_SalesPoints_OneArgs = {
  object: Management_UserProfiles_SalesPoints_Insert_Input;
  on_conflict?: Maybe<Management_UserProfiles_SalesPoints_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_User_ProfileArgs = {
  objects: Array<Management_User_Profile_Insert_Input>;
  on_conflict?: Maybe<Management_User_Profile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_User_Profile_OneArgs = {
  object: Management_User_Profile_Insert_Input;
  on_conflict?: Maybe<Management_User_Profile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_User_RoleArgs = {
  objects: Array<Management_User_Role_Insert_Input>;
  on_conflict?: Maybe<Management_User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_User_Role_OneArgs = {
  object: Management_User_Role_Insert_Input;
  on_conflict?: Maybe<Management_User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_WarehouseArgs = {
  objects: Array<Management_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Management_Warehouse_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Management_Warehouse_OneArgs = {
  object: Management_Warehouse_Insert_Input;
  on_conflict?: Maybe<Management_Warehouse_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginArgs = {
  user: LoginInput;
};

/** mutation root */
export type Mutation_RootUpdate_Management_CompanyArgs = {
  _set?: Maybe<Management_Company_Set_Input>;
  where: Management_Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_Company_By_PkArgs = {
  _set?: Maybe<Management_Company_Set_Input>;
  pk_columns: Management_Company_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Management_SalesPointArgs = {
  _set?: Maybe<Management_SalesPoint_Set_Input>;
  where: Management_SalesPoint_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_SalesPoint_By_PkArgs = {
  _set?: Maybe<Management_SalesPoint_Set_Input>;
  pk_columns: Management_SalesPoint_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Management_UserProfiles_SalesPointsArgs = {
  _set?: Maybe<Management_UserProfiles_SalesPoints_Set_Input>;
  where: Management_UserProfiles_SalesPoints_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_UserProfiles_SalesPoints_By_PkArgs = {
  _set?: Maybe<Management_UserProfiles_SalesPoints_Set_Input>;
  pk_columns: Management_UserProfiles_SalesPoints_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Management_User_ProfileArgs = {
  _set?: Maybe<Management_User_Profile_Set_Input>;
  where: Management_User_Profile_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_User_Profile_By_PkArgs = {
  _set?: Maybe<Management_User_Profile_Set_Input>;
  pk_columns: Management_User_Profile_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Management_User_RoleArgs = {
  _set?: Maybe<Management_User_Role_Set_Input>;
  where: Management_User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_User_Role_By_PkArgs = {
  _set?: Maybe<Management_User_Role_Set_Input>;
  pk_columns: Management_User_Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Management_WarehouseArgs = {
  _set?: Maybe<Management_Warehouse_Set_Input>;
  where: Management_Warehouse_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Management_Warehouse_By_PkArgs = {
  _set?: Maybe<Management_Warehouse_Set_Input>;
  pk_columns: Management_Warehouse_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "management.Company" */
  management_Company: Array<Management_Company>;
  /** fetch aggregated fields from the table: "management.Company" */
  management_Company_aggregate: Management_Company_Aggregate;
  /** fetch data from the table: "management.Company" using primary key columns */
  management_Company_by_pk?: Maybe<Management_Company>;
  /** fetch data from the table: "management.SalesPoint" */
  management_SalesPoint: Array<Management_SalesPoint>;
  /** fetch aggregated fields from the table: "management.SalesPoint" */
  management_SalesPoint_aggregate: Management_SalesPoint_Aggregate;
  /** fetch data from the table: "management.SalesPoint" using primary key columns */
  management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** fetch data from the table: "management.UserProfiles_SalesPoints" */
  management_UserProfiles_SalesPoints: Array<
    Management_UserProfiles_SalesPoints
  >;
  /** fetch aggregated fields from the table: "management.UserProfiles_SalesPoints" */
  management_UserProfiles_SalesPoints_aggregate: Management_UserProfiles_SalesPoints_Aggregate;
  /** fetch data from the table: "management.UserProfiles_SalesPoints" using primary key columns */
  management_UserProfiles_SalesPoints_by_pk?: Maybe<
    Management_UserProfiles_SalesPoints
  >;
  /** fetch data from the table: "management.user_profile" */
  management_user_profile: Array<Management_User_Profile>;
  /** fetch aggregated fields from the table: "management.user_profile" */
  management_user_profile_aggregate: Management_User_Profile_Aggregate;
  /** fetch data from the table: "management.user_profile" using primary key columns */
  management_user_profile_by_pk?: Maybe<Management_User_Profile>;
  /** fetch data from the table: "management.user_role" */
  management_user_role: Array<Management_User_Role>;
  /** fetch aggregated fields from the table: "management.user_role" */
  management_user_role_aggregate: Management_User_Role_Aggregate;
  /** fetch data from the table: "management.user_role" using primary key columns */
  management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** fetch data from the table: "management.warehouse" */
  management_warehouse: Array<Management_Warehouse>;
  /** fetch aggregated fields from the table: "management.warehouse" */
  management_warehouse_aggregate: Management_Warehouse_Aggregate;
  /** fetch data from the table: "management.warehouse" using primary key columns */
  management_warehouse_by_pk?: Maybe<Management_Warehouse>;
};

/** query root */
export type Query_RootManagement_CompanyArgs = {
  distinct_on?: Maybe<Array<Management_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Company_Order_By>>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_Company_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Company_Order_By>>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_Company_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootManagement_SalesPointArgs = {
  distinct_on?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_SalesPoint_Order_By>>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_SalesPoint_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_SalesPoint_Order_By>>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_SalesPoint_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootManagement_UserProfiles_SalesPointsArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_UserProfiles_SalesPoints_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_UserProfiles_SalesPoints_By_PkArgs = {
  salesPointId: Scalars['uuid'];
  userProfileId: Scalars['uuid'];
};

/** query root */
export type Query_RootManagement_User_ProfileArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_User_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_User_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootManagement_User_RoleArgs = {
  distinct_on?: Maybe<Array<Management_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Role_Order_By>>;
  where?: Maybe<Management_User_Role_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Role_Order_By>>;
  where?: Maybe<Management_User_Role_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_User_Role_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootManagement_WarehouseArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** query root */
export type Query_RootManagement_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "management.Company" */
  management_Company: Array<Management_Company>;
  /** fetch aggregated fields from the table: "management.Company" */
  management_Company_aggregate: Management_Company_Aggregate;
  /** fetch data from the table: "management.Company" using primary key columns */
  management_Company_by_pk?: Maybe<Management_Company>;
  /** fetch data from the table: "management.SalesPoint" */
  management_SalesPoint: Array<Management_SalesPoint>;
  /** fetch aggregated fields from the table: "management.SalesPoint" */
  management_SalesPoint_aggregate: Management_SalesPoint_Aggregate;
  /** fetch data from the table: "management.SalesPoint" using primary key columns */
  management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** fetch data from the table: "management.UserProfiles_SalesPoints" */
  management_UserProfiles_SalesPoints: Array<
    Management_UserProfiles_SalesPoints
  >;
  /** fetch aggregated fields from the table: "management.UserProfiles_SalesPoints" */
  management_UserProfiles_SalesPoints_aggregate: Management_UserProfiles_SalesPoints_Aggregate;
  /** fetch data from the table: "management.UserProfiles_SalesPoints" using primary key columns */
  management_UserProfiles_SalesPoints_by_pk?: Maybe<
    Management_UserProfiles_SalesPoints
  >;
  /** fetch data from the table: "management.user_profile" */
  management_user_profile: Array<Management_User_Profile>;
  /** fetch aggregated fields from the table: "management.user_profile" */
  management_user_profile_aggregate: Management_User_Profile_Aggregate;
  /** fetch data from the table: "management.user_profile" using primary key columns */
  management_user_profile_by_pk?: Maybe<Management_User_Profile>;
  /** fetch data from the table: "management.user_role" */
  management_user_role: Array<Management_User_Role>;
  /** fetch aggregated fields from the table: "management.user_role" */
  management_user_role_aggregate: Management_User_Role_Aggregate;
  /** fetch data from the table: "management.user_role" using primary key columns */
  management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** fetch data from the table: "management.warehouse" */
  management_warehouse: Array<Management_Warehouse>;
  /** fetch aggregated fields from the table: "management.warehouse" */
  management_warehouse_aggregate: Management_Warehouse_Aggregate;
  /** fetch data from the table: "management.warehouse" using primary key columns */
  management_warehouse_by_pk?: Maybe<Management_Warehouse>;
};

/** subscription root */
export type Subscription_RootManagement_CompanyArgs = {
  distinct_on?: Maybe<Array<Management_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Company_Order_By>>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_Company_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Company_Order_By>>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_Company_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootManagement_SalesPointArgs = {
  distinct_on?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_SalesPoint_Order_By>>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_SalesPoint_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_SalesPoint_Order_By>>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_SalesPoint_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootManagement_UserProfiles_SalesPointsArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_UserProfiles_SalesPoints_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfiles_SalesPoints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfiles_SalesPoints_Order_By>>;
  where?: Maybe<Management_UserProfiles_SalesPoints_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_UserProfiles_SalesPoints_By_PkArgs = {
  salesPointId: Scalars['uuid'];
  userProfileId: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootManagement_User_ProfileArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_User_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_User_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Profile_Order_By>>;
  where?: Maybe<Management_User_Profile_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_User_Profile_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootManagement_User_RoleArgs = {
  distinct_on?: Maybe<Array<Management_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Role_Order_By>>;
  where?: Maybe<Management_User_Role_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_User_Role_Order_By>>;
  where?: Maybe<Management_User_Role_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_User_Role_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootManagement_WarehouseArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_Warehouse_Order_By>>;
  where?: Maybe<Management_Warehouse_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootManagement_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCompaniesQuery = { __typename?: 'query_root' } & {
  management_Company: Array<
    { __typename?: 'management_Company' } & Pick<
      Management_Company,
      | 'CNSS'
      | 'ICE'
      | 'IF'
      | 'RC'
      | 'address'
      | 'createdAt'
      | 'createdBy'
      | 'email'
      | 'name'
      | 'id'
      | 'phone'
      | 'updatedAt'
      | 'updatedBy'
    >
  >;
};

export const GetAllCompaniesDocument = gql`
  query GetAllCompanies {
    management_Company {
      CNSS
      ICE
      IF
      RC
      address
      createdAt
      createdBy
      email
      name
      id
      phone
      updatedAt
      updatedBy
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetAllCompaniesGQL extends Apollo.Query<
  GetAllCompaniesQuery,
  GetAllCompaniesQueryVariables
> {
  document = GetAllCompaniesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
