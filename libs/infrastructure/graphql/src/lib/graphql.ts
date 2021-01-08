import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  numeric: any;
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

/** columns and relationships of "contact.Address" */
export type Contact_Address = {
  __typename?: 'contact_Address';
  address: Scalars['String'];
  city: Scalars['String'];
  /** An array relationship */
  contact_addresses: Array<Contact_Contact_Address>;
  /** An aggregated array relationship */
  contact_addresses_aggregate: Contact_Contact_Address_Aggregate;
  /** An array relationship */
  customer_addresses: Array<Contact_Customer_Address>;
  /** An aggregated array relationship */
  customer_addresses_aggregate: Contact_Customer_Address_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  provider_addresses: Array<Contact_Provider_Address>;
  /** An aggregated array relationship */
  provider_addresses_aggregate: Contact_Provider_Address_Aggregate;
  zip: Scalars['String'];
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressContact_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressContact_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressCustomer_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressCustomer_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressProvider_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Address" */
export type Contact_AddressProvider_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};

/** aggregated selection of "contact.Address" */
export type Contact_Address_Aggregate = {
  __typename?: 'contact_Address_aggregate';
  aggregate?: Maybe<Contact_Address_Aggregate_Fields>;
  nodes: Array<Contact_Address>;
};

/** aggregate fields of "contact.Address" */
export type Contact_Address_Aggregate_Fields = {
  __typename?: 'contact_Address_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Address_Max_Fields>;
  min?: Maybe<Contact_Address_Min_Fields>;
};


/** aggregate fields of "contact.Address" */
export type Contact_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.Address" */
export type Contact_Address_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Address_Max_Order_By>;
  min?: Maybe<Contact_Address_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.Address" */
export type Contact_Address_Arr_Rel_Insert_Input = {
  data: Array<Contact_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.Address". All fields are combined with a logical 'AND'. */
export type Contact_Address_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Address_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  contact_addresses?: Maybe<Contact_Contact_Address_Bool_Exp>;
  customer_addresses?: Maybe<Contact_Customer_Address_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_addresses?: Maybe<Contact_Provider_Address_Bool_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.Address" */
export enum Contact_Address_Constraint {
  /** unique or primary key constraint */
  AddressPkey = 'Address_pkey'
}

/** input type for inserting data into table "contact.Address" */
export type Contact_Address_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contact_addresses?: Maybe<Contact_Contact_Address_Arr_Rel_Insert_Input>;
  customer_addresses?: Maybe<Contact_Customer_Address_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  provider_addresses?: Maybe<Contact_Provider_Address_Arr_Rel_Insert_Input>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Contact_Address_Max_Fields = {
  __typename?: 'contact_Address_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.Address" */
export type Contact_Address_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Address_Min_Fields = {
  __typename?: 'contact_Address_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.Address" */
export type Contact_Address_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.Address" */
export type Contact_Address_Mutation_Response = {
  __typename?: 'contact_Address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Address>;
};

/** input type for inserting object relation for remote table "contact.Address" */
export type Contact_Address_Obj_Rel_Insert_Input = {
  data: Contact_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};

/** on conflict condition type for table "contact.Address" */
export type Contact_Address_On_Conflict = {
  constraint: Contact_Address_Constraint;
  update_columns: Array<Contact_Address_Update_Column>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};

/** ordering options when selecting data from "contact.Address" */
export type Contact_Address_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  contact_addresses_aggregate?: Maybe<Contact_Contact_Address_Aggregate_Order_By>;
  customer_addresses_aggregate?: Maybe<Contact_Customer_Address_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  provider_addresses_aggregate?: Maybe<Contact_Provider_Address_Aggregate_Order_By>;
  zip?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.Address" */
export type Contact_Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.Address" */
export enum Contact_Address_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  Zip = 'zip'
}

/** input type for updating data in table "contact.Address" */
export type Contact_Address_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** update columns of table "contact.Address" */
export enum Contact_Address_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  Zip = 'zip'
}

/** columns and relationships of "contact.Contact" */
export type Contact_Contact = {
  __typename?: 'contact_Contact';
  /** An array relationship */
  addresses: Array<Contact_Contact_Address>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Contact_Address_Aggregate;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  customers: Array<Contact_Customer_Contact>;
  /** An aggregated array relationship */
  customers_aggregate: Contact_Customer_Contact_Aggregate;
  id: Scalars['uuid'];
  mail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  /** An array relationship */
  providers: Array<Contact_Provider_Contact>;
  /** An aggregated array relationship */
  providers_aggregate: Contact_Provider_Contact_Aggregate;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactCustomersArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactProvidersArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.Contact" */
export type Contact_ContactProviders_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};

/** aggregated selection of "contact.Contact" */
export type Contact_Contact_Aggregate = {
  __typename?: 'contact_Contact_aggregate';
  aggregate?: Maybe<Contact_Contact_Aggregate_Fields>;
  nodes: Array<Contact_Contact>;
};

/** aggregate fields of "contact.Contact" */
export type Contact_Contact_Aggregate_Fields = {
  __typename?: 'contact_Contact_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Max_Fields>;
  min?: Maybe<Contact_Contact_Min_Fields>;
};


/** aggregate fields of "contact.Contact" */
export type Contact_Contact_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.Contact" */
export type Contact_Contact_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Max_Order_By>;
  min?: Maybe<Contact_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.Contact" */
export type Contact_Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.Contact". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Bool_Exp>>>;
  addresses?: Maybe<Contact_Contact_Address_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  customers?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  providers?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.Contact" */
export enum Contact_Contact_Constraint {
  /** unique or primary key constraint */
  ContactCodeKey = 'Contact_code_key',
  /** unique or primary key constraint */
  ContactPhoneKey = 'Contact_phone_key',
  /** unique or primary key constraint */
  ContactPkey = 'Contact_pkey'
}

/** input type for inserting data into table "contact.Contact" */
export type Contact_Contact_Insert_Input = {
  addresses?: Maybe<Contact_Contact_Address_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  customers?: Maybe<Contact_Customer_Contact_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  providers?: Maybe<Contact_Provider_Contact_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Contact_Max_Fields = {
  __typename?: 'contact_Contact_max_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.Contact" */
export type Contact_Contact_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Contact_Min_Fields = {
  __typename?: 'contact_Contact_min_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.Contact" */
export type Contact_Contact_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.Contact" */
export type Contact_Contact_Mutation_Response = {
  __typename?: 'contact_Contact_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Contact>;
};

/** input type for inserting object relation for remote table "contact.Contact" */
export type Contact_Contact_Obj_Rel_Insert_Input = {
  data: Contact_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};

/** on conflict condition type for table "contact.Contact" */
export type Contact_Contact_On_Conflict = {
  constraint: Contact_Contact_Constraint;
  update_columns: Array<Contact_Contact_Update_Column>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};

/** ordering options when selecting data from "contact.Contact" */
export type Contact_Contact_Order_By = {
  addresses_aggregate?: Maybe<Contact_Contact_Address_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  customers_aggregate?: Maybe<Contact_Customer_Contact_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  providers_aggregate?: Maybe<Contact_Provider_Contact_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.Contact" */
export type Contact_Contact_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.Contact" */
export enum Contact_Contact_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "contact.Contact" */
export type Contact_Contact_Set_Input = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.Contact" */
export enum Contact_Contact_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** columns and relationships of "contact.Customer" */
export type Contact_Customer = {
  __typename?: 'contact_Customer';
  FAX: Scalars['String'];
  ICE: Scalars['String'];
  IF: Scalars['String'];
  /** An array relationship */
  addresses: Array<Contact_Customer_Address>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Customer_Address_Aggregate;
  code?: Maybe<Scalars['String']>;
  /** An array relationship */
  contacts: Array<Contact_Customer_Contact>;
  /** An aggregated array relationship */
  contacts_aggregate: Contact_Customer_Contact_Aggregate;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  mail: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website: Scalars['String'];
};


/** columns and relationships of "contact.Customer" */
export type Contact_CustomerAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Customer" */
export type Contact_CustomerAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Customer" */
export type Contact_CustomerContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.Customer" */
export type Contact_CustomerContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};

/** aggregated selection of "contact.Customer" */
export type Contact_Customer_Aggregate = {
  __typename?: 'contact_Customer_aggregate';
  aggregate?: Maybe<Contact_Customer_Aggregate_Fields>;
  nodes: Array<Contact_Customer>;
};

/** aggregate fields of "contact.Customer" */
export type Contact_Customer_Aggregate_Fields = {
  __typename?: 'contact_Customer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Max_Fields>;
  min?: Maybe<Contact_Customer_Min_Fields>;
};


/** aggregate fields of "contact.Customer" */
export type Contact_Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.Customer" */
export type Contact_Customer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Max_Order_By>;
  min?: Maybe<Contact_Customer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.Customer" */
export type Contact_Customer_Arr_Rel_Insert_Input = {
  data: Array<Contact_Customer_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.Customer". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Bool_Exp = {
  FAX?: Maybe<String_Comparison_Exp>;
  ICE?: Maybe<String_Comparison_Exp>;
  IF?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Customer_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Bool_Exp>>>;
  addresses?: Maybe<Contact_Customer_Address_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contacts?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.Customer" */
export enum Contact_Customer_Constraint {
  /** unique or primary key constraint */
  CustomerIceKey = 'Customer_ICE_key',
  /** unique or primary key constraint */
  CustomerIfKey = 'Customer_IF_key',
  /** unique or primary key constraint */
  CustomerCodeKey = 'Customer_code_key',
  /** unique or primary key constraint */
  CustomerNameKey = 'Customer_name_key',
  /** unique or primary key constraint */
  CustomerPhoneKey = 'Customer_phone_key',
  /** unique or primary key constraint */
  CustomerPkey = 'Customer_pkey'
}

/** input type for inserting data into table "contact.Customer" */
export type Contact_Customer_Insert_Input = {
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  addresses?: Maybe<Contact_Customer_Address_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  contacts?: Maybe<Contact_Customer_Contact_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Contact_Customer_Max_Fields = {
  __typename?: 'contact_Customer_max_fields';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.Customer" */
export type Contact_Customer_Max_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Min_Fields = {
  __typename?: 'contact_Customer_min_fields';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.Customer" */
export type Contact_Customer_Min_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.Customer" */
export type Contact_Customer_Mutation_Response = {
  __typename?: 'contact_Customer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Customer>;
};

/** input type for inserting object relation for remote table "contact.Customer" */
export type Contact_Customer_Obj_Rel_Insert_Input = {
  data: Contact_Customer_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};

/** on conflict condition type for table "contact.Customer" */
export type Contact_Customer_On_Conflict = {
  constraint: Contact_Customer_Constraint;
  update_columns: Array<Contact_Customer_Update_Column>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};

/** ordering options when selecting data from "contact.Customer" */
export type Contact_Customer_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  addresses_aggregate?: Maybe<Contact_Customer_Address_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contacts_aggregate?: Maybe<Contact_Customer_Contact_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.Customer" */
export type Contact_Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.Customer" */
export enum Contact_Customer_Select_Column {
  /** column name */
  Fax = 'FAX',
  /** column name */
  Ice = 'ICE',
  /** column name */
  If = 'IF',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "contact.Customer" */
export type Contact_Customer_Set_Input = {
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** update columns of table "contact.Customer" */
export enum Contact_Customer_Update_Column {
  /** column name */
  Fax = 'FAX',
  /** column name */
  Ice = 'ICE',
  /** column name */
  If = 'IF',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website'
}

/** columns and relationships of "contact.Provider" */
export type Contact_Provider = {
  __typename?: 'contact_Provider';
  /** An array relationship */
  addresses: Array<Contact_Provider_Address>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Provider_Address_Aggregate;
  code: Scalars['String'];
  /** An array relationship */
  contacts: Array<Contact_Provider_Contact>;
  /** An aggregated array relationship */
  contacts_aggregate: Contact_Provider_Contact_Aggregate;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "contact.Provider" */
export type Contact_ProviderAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Provider" */
export type Contact_ProviderAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.Provider" */
export type Contact_ProviderContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.Provider" */
export type Contact_ProviderContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};

/** aggregated selection of "contact.Provider" */
export type Contact_Provider_Aggregate = {
  __typename?: 'contact_Provider_aggregate';
  aggregate?: Maybe<Contact_Provider_Aggregate_Fields>;
  nodes: Array<Contact_Provider>;
};

/** aggregate fields of "contact.Provider" */
export type Contact_Provider_Aggregate_Fields = {
  __typename?: 'contact_Provider_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Max_Fields>;
  min?: Maybe<Contact_Provider_Min_Fields>;
};


/** aggregate fields of "contact.Provider" */
export type Contact_Provider_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.Provider" */
export type Contact_Provider_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Max_Order_By>;
  min?: Maybe<Contact_Provider_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.Provider" */
export type Contact_Provider_Arr_Rel_Insert_Input = {
  data: Array<Contact_Provider_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.Provider". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Provider_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Bool_Exp>>>;
  addresses?: Maybe<Contact_Provider_Address_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contacts?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.Provider" */
export enum Contact_Provider_Constraint {
  /** unique or primary key constraint */
  ProviderCodeKey = 'Provider_code_key',
  /** unique or primary key constraint */
  ProviderIdKey = 'Provider_id_key',
  /** unique or primary key constraint */
  ProviderNameKey = 'Provider_name_key',
  /** unique or primary key constraint */
  ProviderPhoneKey = 'Provider_phone_key'
}

/** input type for inserting data into table "contact.Provider" */
export type Contact_Provider_Insert_Input = {
  addresses?: Maybe<Contact_Provider_Address_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  contacts?: Maybe<Contact_Provider_Contact_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Provider_Max_Fields = {
  __typename?: 'contact_Provider_max_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.Provider" */
export type Contact_Provider_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Provider_Min_Fields = {
  __typename?: 'contact_Provider_min_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.Provider" */
export type Contact_Provider_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.Provider" */
export type Contact_Provider_Mutation_Response = {
  __typename?: 'contact_Provider_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Provider>;
};

/** input type for inserting object relation for remote table "contact.Provider" */
export type Contact_Provider_Obj_Rel_Insert_Input = {
  data: Contact_Provider_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};

/** on conflict condition type for table "contact.Provider" */
export type Contact_Provider_On_Conflict = {
  constraint: Contact_Provider_Constraint;
  update_columns: Array<Contact_Provider_Update_Column>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};

/** ordering options when selecting data from "contact.Provider" */
export type Contact_Provider_Order_By = {
  addresses_aggregate?: Maybe<Contact_Provider_Address_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contacts_aggregate?: Maybe<Contact_Provider_Contact_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** select columns of table "contact.Provider" */
export enum Contact_Provider_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "contact.Provider" */
export type Contact_Provider_Set_Input = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.Provider" */
export enum Contact_Provider_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** columns and relationships of "contact.contact_address" */
export type Contact_Contact_Address = {
  __typename?: 'contact_contact_address';
  /** An object relationship */
  Address: Contact_Address;
  /** An object relationship */
  Contact: Contact_Contact;
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
};

/** aggregated selection of "contact.contact_address" */
export type Contact_Contact_Address_Aggregate = {
  __typename?: 'contact_contact_address_aggregate';
  aggregate?: Maybe<Contact_Contact_Address_Aggregate_Fields>;
  nodes: Array<Contact_Contact_Address>;
};

/** aggregate fields of "contact.contact_address" */
export type Contact_Contact_Address_Aggregate_Fields = {
  __typename?: 'contact_contact_address_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Address_Max_Fields>;
  min?: Maybe<Contact_Contact_Address_Min_Fields>;
};


/** aggregate fields of "contact.contact_address" */
export type Contact_Contact_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.contact_address" */
export type Contact_Contact_Address_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Address_Max_Order_By>;
  min?: Maybe<Contact_Contact_Address_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.contact_address" */
export type Contact_Contact_Address_Arr_Rel_Insert_Input = {
  data: Array<Contact_Contact_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Contact_Address_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.contact_address". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Address_Bool_Exp = {
  Address?: Maybe<Contact_Address_Bool_Exp>;
  Contact?: Maybe<Contact_Contact_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Contact_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Address_Bool_Exp>>>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.contact_address" */
export enum Contact_Contact_Address_Constraint {
  /** unique or primary key constraint */
  ContactAddressPkey = 'contact_address_pkey'
}

/** input type for inserting data into table "contact.contact_address" */
export type Contact_Contact_Address_Insert_Input = {
  Address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  Contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  contactid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Contact_Address_Max_Fields = {
  __typename?: 'contact_contact_address_max_fields';
  addressid?: Maybe<Scalars['uuid']>;
  contactid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.contact_address" */
export type Contact_Contact_Address_Max_Order_By = {
  addressid?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Contact_Address_Min_Fields = {
  __typename?: 'contact_contact_address_min_fields';
  addressid?: Maybe<Scalars['uuid']>;
  contactid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.contact_address" */
export type Contact_Contact_Address_Min_Order_By = {
  addressid?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.contact_address" */
export type Contact_Contact_Address_Mutation_Response = {
  __typename?: 'contact_contact_address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Contact_Address>;
};

/** input type for inserting object relation for remote table "contact.contact_address" */
export type Contact_Contact_Address_Obj_Rel_Insert_Input = {
  data: Contact_Contact_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Contact_Address_On_Conflict>;
};

/** on conflict condition type for table "contact.contact_address" */
export type Contact_Contact_Address_On_Conflict = {
  constraint: Contact_Contact_Address_Constraint;
  update_columns: Array<Contact_Contact_Address_Update_Column>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};

/** ordering options when selecting data from "contact.contact_address" */
export type Contact_Contact_Address_Order_By = {
  Address?: Maybe<Contact_Address_Order_By>;
  Contact?: Maybe<Contact_Contact_Order_By>;
  addressid?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.contact_address" */
export type Contact_Contact_Address_Pk_Columns_Input = {
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
};

/** select columns of table "contact.contact_address" */
export enum Contact_Contact_Address_Select_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Contactid = 'contactid'
}

/** input type for updating data in table "contact.contact_address" */
export type Contact_Contact_Address_Set_Input = {
  addressid?: Maybe<Scalars['uuid']>;
  contactid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.contact_address" */
export enum Contact_Contact_Address_Update_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Contactid = 'contactid'
}

/** columns and relationships of "contact.customer_address" */
export type Contact_Customer_Address = {
  __typename?: 'contact_customer_address';
  /** An object relationship */
  Address: Contact_Address;
  /** An object relationship */
  Customer: Contact_Customer;
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};

/** aggregated selection of "contact.customer_address" */
export type Contact_Customer_Address_Aggregate = {
  __typename?: 'contact_customer_address_aggregate';
  aggregate?: Maybe<Contact_Customer_Address_Aggregate_Fields>;
  nodes: Array<Contact_Customer_Address>;
};

/** aggregate fields of "contact.customer_address" */
export type Contact_Customer_Address_Aggregate_Fields = {
  __typename?: 'contact_customer_address_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Address_Max_Fields>;
  min?: Maybe<Contact_Customer_Address_Min_Fields>;
};


/** aggregate fields of "contact.customer_address" */
export type Contact_Customer_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.customer_address" */
export type Contact_Customer_Address_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Address_Max_Order_By>;
  min?: Maybe<Contact_Customer_Address_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.customer_address" */
export type Contact_Customer_Address_Arr_Rel_Insert_Input = {
  data: Array<Contact_Customer_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_Address_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.customer_address". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Address_Bool_Exp = {
  Address?: Maybe<Contact_Address_Bool_Exp>;
  Customer?: Maybe<Contact_Customer_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Customer_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Address_Bool_Exp>>>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.customer_address" */
export enum Contact_Customer_Address_Constraint {
  /** unique or primary key constraint */
  CustomerAddressPkey = 'customer_address_pkey'
}

/** input type for inserting data into table "contact.customer_address" */
export type Contact_Customer_Address_Insert_Input = {
  Address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  Customer?: Maybe<Contact_Customer_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Customer_Address_Max_Fields = {
  __typename?: 'contact_customer_address_max_fields';
  addressid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.customer_address" */
export type Contact_Customer_Address_Max_Order_By = {
  addressid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Address_Min_Fields = {
  __typename?: 'contact_customer_address_min_fields';
  addressid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.customer_address" */
export type Contact_Customer_Address_Min_Order_By = {
  addressid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.customer_address" */
export type Contact_Customer_Address_Mutation_Response = {
  __typename?: 'contact_customer_address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Customer_Address>;
};

/** input type for inserting object relation for remote table "contact.customer_address" */
export type Contact_Customer_Address_Obj_Rel_Insert_Input = {
  data: Contact_Customer_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_Address_On_Conflict>;
};

/** on conflict condition type for table "contact.customer_address" */
export type Contact_Customer_Address_On_Conflict = {
  constraint: Contact_Customer_Address_Constraint;
  update_columns: Array<Contact_Customer_Address_Update_Column>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};

/** ordering options when selecting data from "contact.customer_address" */
export type Contact_Customer_Address_Order_By = {
  Address?: Maybe<Contact_Address_Order_By>;
  Customer?: Maybe<Contact_Customer_Order_By>;
  addressid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.customer_address" */
export type Contact_Customer_Address_Pk_Columns_Input = {
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};

/** select columns of table "contact.customer_address" */
export enum Contact_Customer_Address_Select_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Customerid = 'customerid'
}

/** input type for updating data in table "contact.customer_address" */
export type Contact_Customer_Address_Set_Input = {
  addressid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.customer_address" */
export enum Contact_Customer_Address_Update_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Customerid = 'customerid'
}

/** columns and relationships of "contact.customer_contact" */
export type Contact_Customer_Contact = {
  __typename?: 'contact_customer_contact';
  /** An object relationship */
  Contact: Contact_Contact;
  /** An object relationship */
  Customer: Contact_Customer;
  contactid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};

/** aggregated selection of "contact.customer_contact" */
export type Contact_Customer_Contact_Aggregate = {
  __typename?: 'contact_customer_contact_aggregate';
  aggregate?: Maybe<Contact_Customer_Contact_Aggregate_Fields>;
  nodes: Array<Contact_Customer_Contact>;
};

/** aggregate fields of "contact.customer_contact" */
export type Contact_Customer_Contact_Aggregate_Fields = {
  __typename?: 'contact_customer_contact_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Contact_Max_Fields>;
  min?: Maybe<Contact_Customer_Contact_Min_Fields>;
};


/** aggregate fields of "contact.customer_contact" */
export type Contact_Customer_Contact_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.customer_contact" */
export type Contact_Customer_Contact_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Contact_Max_Order_By>;
  min?: Maybe<Contact_Customer_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.customer_contact" */
export type Contact_Customer_Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Customer_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.customer_contact". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Contact_Bool_Exp = {
  Contact?: Maybe<Contact_Contact_Bool_Exp>;
  Customer?: Maybe<Contact_Customer_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Customer_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Contact_Bool_Exp>>>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.customer_contact" */
export enum Contact_Customer_Contact_Constraint {
  /** unique or primary key constraint */
  ContactCustomerPkey = 'contact_customer_pkey'
}

/** input type for inserting data into table "contact.customer_contact" */
export type Contact_Customer_Contact_Insert_Input = {
  Contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
  Customer?: Maybe<Contact_Customer_Obj_Rel_Insert_Input>;
  contactid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Customer_Contact_Max_Fields = {
  __typename?: 'contact_customer_contact_max_fields';
  contactid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.customer_contact" */
export type Contact_Customer_Contact_Max_Order_By = {
  contactid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Contact_Min_Fields = {
  __typename?: 'contact_customer_contact_min_fields';
  contactid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.customer_contact" */
export type Contact_Customer_Contact_Min_Order_By = {
  contactid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.customer_contact" */
export type Contact_Customer_Contact_Mutation_Response = {
  __typename?: 'contact_customer_contact_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Customer_Contact>;
};

/** input type for inserting object relation for remote table "contact.customer_contact" */
export type Contact_Customer_Contact_Obj_Rel_Insert_Input = {
  data: Contact_Customer_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_Contact_On_Conflict>;
};

/** on conflict condition type for table "contact.customer_contact" */
export type Contact_Customer_Contact_On_Conflict = {
  constraint: Contact_Customer_Contact_Constraint;
  update_columns: Array<Contact_Customer_Contact_Update_Column>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};

/** ordering options when selecting data from "contact.customer_contact" */
export type Contact_Customer_Contact_Order_By = {
  Contact?: Maybe<Contact_Contact_Order_By>;
  Customer?: Maybe<Contact_Customer_Order_By>;
  contactid?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.customer_contact" */
export type Contact_Customer_Contact_Pk_Columns_Input = {
  contactid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};

/** select columns of table "contact.customer_contact" */
export enum Contact_Customer_Contact_Select_Column {
  /** column name */
  Contactid = 'contactid',
  /** column name */
  Customerid = 'customerid'
}

/** input type for updating data in table "contact.customer_contact" */
export type Contact_Customer_Contact_Set_Input = {
  contactid?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.customer_contact" */
export enum Contact_Customer_Contact_Update_Column {
  /** column name */
  Contactid = 'contactid',
  /** column name */
  Customerid = 'customerid'
}

/** columns and relationships of "contact.provider_address" */
export type Contact_Provider_Address = {
  __typename?: 'contact_provider_address';
  /** An object relationship */
  Address: Contact_Address;
  /** An object relationship */
  Provider: Contact_Provider;
  addressid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};

/** aggregated selection of "contact.provider_address" */
export type Contact_Provider_Address_Aggregate = {
  __typename?: 'contact_provider_address_aggregate';
  aggregate?: Maybe<Contact_Provider_Address_Aggregate_Fields>;
  nodes: Array<Contact_Provider_Address>;
};

/** aggregate fields of "contact.provider_address" */
export type Contact_Provider_Address_Aggregate_Fields = {
  __typename?: 'contact_provider_address_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Address_Max_Fields>;
  min?: Maybe<Contact_Provider_Address_Min_Fields>;
};


/** aggregate fields of "contact.provider_address" */
export type Contact_Provider_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.provider_address" */
export type Contact_Provider_Address_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Address_Max_Order_By>;
  min?: Maybe<Contact_Provider_Address_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.provider_address" */
export type Contact_Provider_Address_Arr_Rel_Insert_Input = {
  data: Array<Contact_Provider_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_Address_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.provider_address". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Address_Bool_Exp = {
  Address?: Maybe<Contact_Address_Bool_Exp>;
  Provider?: Maybe<Contact_Provider_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Provider_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Address_Bool_Exp>>>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.provider_address" */
export enum Contact_Provider_Address_Constraint {
  /** unique or primary key constraint */
  ProviderAddressPkey = 'provider_address_pkey'
}

/** input type for inserting data into table "contact.provider_address" */
export type Contact_Provider_Address_Insert_Input = {
  Address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  Provider?: Maybe<Contact_Provider_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Provider_Address_Max_Fields = {
  __typename?: 'contact_provider_address_max_fields';
  addressid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.provider_address" */
export type Contact_Provider_Address_Max_Order_By = {
  addressid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Provider_Address_Min_Fields = {
  __typename?: 'contact_provider_address_min_fields';
  addressid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.provider_address" */
export type Contact_Provider_Address_Min_Order_By = {
  addressid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.provider_address" */
export type Contact_Provider_Address_Mutation_Response = {
  __typename?: 'contact_provider_address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Provider_Address>;
};

/** input type for inserting object relation for remote table "contact.provider_address" */
export type Contact_Provider_Address_Obj_Rel_Insert_Input = {
  data: Contact_Provider_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_Address_On_Conflict>;
};

/** on conflict condition type for table "contact.provider_address" */
export type Contact_Provider_Address_On_Conflict = {
  constraint: Contact_Provider_Address_Constraint;
  update_columns: Array<Contact_Provider_Address_Update_Column>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};

/** ordering options when selecting data from "contact.provider_address" */
export type Contact_Provider_Address_Order_By = {
  Address?: Maybe<Contact_Address_Order_By>;
  Provider?: Maybe<Contact_Provider_Order_By>;
  addressid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.provider_address" */
export type Contact_Provider_Address_Pk_Columns_Input = {
  addressid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};

/** select columns of table "contact.provider_address" */
export enum Contact_Provider_Address_Select_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Providerid = 'providerid'
}

/** input type for updating data in table "contact.provider_address" */
export type Contact_Provider_Address_Set_Input = {
  addressid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.provider_address" */
export enum Contact_Provider_Address_Update_Column {
  /** column name */
  Addressid = 'addressid',
  /** column name */
  Providerid = 'providerid'
}

/** columns and relationships of "contact.provider_contact" */
export type Contact_Provider_Contact = {
  __typename?: 'contact_provider_contact';
  /** An object relationship */
  Contact: Contact_Contact;
  /** An object relationship */
  Provider: Contact_Provider;
  contactid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};

/** aggregated selection of "contact.provider_contact" */
export type Contact_Provider_Contact_Aggregate = {
  __typename?: 'contact_provider_contact_aggregate';
  aggregate?: Maybe<Contact_Provider_Contact_Aggregate_Fields>;
  nodes: Array<Contact_Provider_Contact>;
};

/** aggregate fields of "contact.provider_contact" */
export type Contact_Provider_Contact_Aggregate_Fields = {
  __typename?: 'contact_provider_contact_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Contact_Max_Fields>;
  min?: Maybe<Contact_Provider_Contact_Min_Fields>;
};


/** aggregate fields of "contact.provider_contact" */
export type Contact_Provider_Contact_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.provider_contact" */
export type Contact_Provider_Contact_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Contact_Max_Order_By>;
  min?: Maybe<Contact_Provider_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.provider_contact" */
export type Contact_Provider_Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Provider_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.provider_contact". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Contact_Bool_Exp = {
  Contact?: Maybe<Contact_Contact_Bool_Exp>;
  Provider?: Maybe<Contact_Provider_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Provider_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Contact_Bool_Exp>>>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.provider_contact" */
export enum Contact_Provider_Contact_Constraint {
  /** unique or primary key constraint */
  ProviderContactPkey = 'provider_contact_pkey'
}

/** input type for inserting data into table "contact.provider_contact" */
export type Contact_Provider_Contact_Insert_Input = {
  Contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
  Provider?: Maybe<Contact_Provider_Obj_Rel_Insert_Input>;
  contactid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Contact_Provider_Contact_Max_Fields = {
  __typename?: 'contact_provider_contact_max_fields';
  contactid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.provider_contact" */
export type Contact_Provider_Contact_Max_Order_By = {
  contactid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Provider_Contact_Min_Fields = {
  __typename?: 'contact_provider_contact_min_fields';
  contactid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.provider_contact" */
export type Contact_Provider_Contact_Min_Order_By = {
  contactid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.provider_contact" */
export type Contact_Provider_Contact_Mutation_Response = {
  __typename?: 'contact_provider_contact_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Provider_Contact>;
};

/** input type for inserting object relation for remote table "contact.provider_contact" */
export type Contact_Provider_Contact_Obj_Rel_Insert_Input = {
  data: Contact_Provider_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_Contact_On_Conflict>;
};

/** on conflict condition type for table "contact.provider_contact" */
export type Contact_Provider_Contact_On_Conflict = {
  constraint: Contact_Provider_Contact_Constraint;
  update_columns: Array<Contact_Provider_Contact_Update_Column>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};

/** ordering options when selecting data from "contact.provider_contact" */
export type Contact_Provider_Contact_Order_By = {
  Contact?: Maybe<Contact_Contact_Order_By>;
  Provider?: Maybe<Contact_Provider_Order_By>;
  contactid?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.provider_contact" */
export type Contact_Provider_Contact_Pk_Columns_Input = {
  contactid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};

/** select columns of table "contact.provider_contact" */
export enum Contact_Provider_Contact_Select_Column {
  /** column name */
  Contactid = 'contactid',
  /** column name */
  Providerid = 'providerid'
}

/** input type for updating data in table "contact.provider_contact" */
export type Contact_Provider_Contact_Set_Input = {
  contactid?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "contact.provider_contact" */
export enum Contact_Provider_Contact_Update_Column {
  /** column name */
  Contactid = 'contactid',
  /** column name */
  Providerid = 'providerid'
}


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
  createdBy?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  createdByUser?: Maybe<Management_UserProfile>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  updatedBy?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  updatedByUser?: Maybe<Management_UserProfile>;
  website?: Maybe<Scalars['String']>;
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
  createdByUser?: Maybe<Management_UserProfile_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  updatedByUser?: Maybe<Management_UserProfile_Bool_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.Company" */
export enum Management_Company_Constraint {
  /** unique or primary key constraint */
  CompanieNameKey = 'Companie_name_key',
  /** unique or primary key constraint */
  CompaniePkey = 'Companie_pkey',
  /** unique or primary key constraint */
  CompanyCnssKey = 'Company_CNSS_key',
  /** unique or primary key constraint */
  CompanyIceIfCnssRcKey = 'Company_ICE_IF_CNSS_RC_key',
  /** unique or primary key constraint */
  CompanyIfKey = 'Company_IF_key',
  /** unique or primary key constraint */
  CompanyRcKey = 'Company_RC_key'
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
  createdByUser?: Maybe<Management_UserProfile_Obj_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updatedByUser?: Maybe<Management_UserProfile_Obj_Rel_Insert_Input>;
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
  createdByUser?: Maybe<Management_UserProfile_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updatedByUser?: Maybe<Management_UserProfile_Order_By>;
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
  Website = 'website'
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
  Website = 'website'
}

/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPoint = {
  __typename?: 'management_SalesPoint';
  address: Scalars['String'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  usersProfiles: Array<Management_UserProfile>;
  /** An aggregated array relationship */
  usersProfiles_aggregate: Management_UserProfile_Aggregate;
};


/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointUsersProfilesArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** columns and relationships of "management.SalesPoint" */
export type Management_SalesPointUsersProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
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
  _and?: Maybe<Array<Maybe<Management_SalesPoint_Bool_Exp>>>;
  _not?: Maybe<Management_SalesPoint_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_SalesPoint_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  fax?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  usersProfiles?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** unique or primary key constraints on table "management.SalesPoint" */
export enum Management_SalesPoint_Constraint {
  /** unique or primary key constraint */
  SalesPointAddressKey = 'SalesPoint_address_key',
  /** unique or primary key constraint */
  SalesPointNameKey = 'SalesPoint_name_key',
  /** unique or primary key constraint */
  SalesPointPkey = 'SalesPoint_pkey'
}

/** input type for inserting data into table "management.SalesPoint" */
export type Management_SalesPoint_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  usersProfiles?: Maybe<Management_UserProfile_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Management_SalesPoint_Max_Fields = {
  __typename?: 'management_SalesPoint_max_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "management.SalesPoint" */
export type Management_SalesPoint_Max_Order_By = {
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_SalesPoint_Min_Fields = {
  __typename?: 'management_SalesPoint_min_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "management.SalesPoint" */
export type Management_SalesPoint_Min_Order_By = {
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
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
  address?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  usersProfiles_aggregate?: Maybe<Management_UserProfile_Aggregate_Order_By>;
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
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
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
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "management.SalesPoint" */
export type Management_SalesPoint_Set_Input = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** update columns of table "management.SalesPoint" */
export enum Management_SalesPoint_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
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
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** columns and relationships of "management.userProfile" */
export type Management_UserProfile = {
  __typename?: 'management_userProfile';
  CIN?: Maybe<Scalars['String']>;
  /** An object relationship */
  SalesPoint?: Maybe<Management_SalesPoint>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  id: Scalars['uuid'];
  joinUs?: Maybe<Scalars['date']>;
  lastname: Scalars['String'];
  leftUs?: Maybe<Scalars['date']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  role: Management_User_Role_Enum;
  updatedAt: Scalars['timestamptz'];
  updatedBy?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user_role: Management_User_Role;
  username: Scalars['String'];
};

/** aggregated selection of "management.userProfile" */
export type Management_UserProfile_Aggregate = {
  __typename?: 'management_userProfile_aggregate';
  aggregate?: Maybe<Management_UserProfile_Aggregate_Fields>;
  nodes: Array<Management_UserProfile>;
};

/** aggregate fields of "management.userProfile" */
export type Management_UserProfile_Aggregate_Fields = {
  __typename?: 'management_userProfile_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_UserProfile_Max_Fields>;
  min?: Maybe<Management_UserProfile_Min_Fields>;
};


/** aggregate fields of "management.userProfile" */
export type Management_UserProfile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_UserProfile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.userProfile" */
export type Management_UserProfile_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_UserProfile_Max_Order_By>;
  min?: Maybe<Management_UserProfile_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.userProfile" */
export type Management_UserProfile_Arr_Rel_Insert_Input = {
  data: Array<Management_UserProfile_Insert_Input>;
  on_conflict?: Maybe<Management_UserProfile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.userProfile". All fields are combined with a logical 'AND'. */
export type Management_UserProfile_Bool_Exp = {
  CIN?: Maybe<String_Comparison_Exp>;
  SalesPoint?: Maybe<Management_SalesPoint_Bool_Exp>;
  SalesPointsid?: Maybe<Uuid_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Management_UserProfile_Bool_Exp>>>;
  _not?: Maybe<Management_UserProfile_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Management_UserProfile_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  joinUs?: Maybe<Date_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  leftUs?: Maybe<Date_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Management_User_Role_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  user_role?: Maybe<Management_User_Role_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.userProfile" */
export enum Management_UserProfile_Constraint {
  /** unique or primary key constraint */
  UserProfileCinKey = 'userProfile_CIN_key',
  /** unique or primary key constraint */
  UserProfileEmailKey = 'userProfile_email_key',
  /** unique or primary key constraint */
  UserProfilePasswordKey = 'userProfile_password_key',
  /** unique or primary key constraint */
  UserProfilePhoneKey = 'userProfile_phone_key',
  /** unique or primary key constraint */
  UserProfilePkey = 'user_profile_pkey',
  /** unique or primary key constraint */
  UserProfileUsernameKey = 'user_profile_username_key'
}

/** input type for inserting data into table "management.userProfile" */
export type Management_UserProfile_Insert_Input = {
  CIN?: Maybe<Scalars['String']>;
  SalesPoint?: Maybe<Management_SalesPoint_Obj_Rel_Insert_Input>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  user_role?: Maybe<Management_User_Role_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Management_UserProfile_Max_Fields = {
  __typename?: 'management_userProfile_max_fields';
  CIN?: Maybe<Scalars['String']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "management.userProfile" */
export type Management_UserProfile_Max_Order_By = {
  CIN?: Maybe<Order_By>;
  SalesPointsid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  joinUs?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  leftUs?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Management_UserProfile_Min_Fields = {
  __typename?: 'management_userProfile_min_fields';
  CIN?: Maybe<Scalars['String']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "management.userProfile" */
export type Management_UserProfile_Min_Order_By = {
  CIN?: Maybe<Order_By>;
  SalesPointsid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  joinUs?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  leftUs?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "management.userProfile" */
export type Management_UserProfile_Mutation_Response = {
  __typename?: 'management_userProfile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_UserProfile>;
};

/** input type for inserting object relation for remote table "management.userProfile" */
export type Management_UserProfile_Obj_Rel_Insert_Input = {
  data: Management_UserProfile_Insert_Input;
  on_conflict?: Maybe<Management_UserProfile_On_Conflict>;
};

/** on conflict condition type for table "management.userProfile" */
export type Management_UserProfile_On_Conflict = {
  constraint: Management_UserProfile_Constraint;
  update_columns: Array<Management_UserProfile_Update_Column>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** ordering options when selecting data from "management.userProfile" */
export type Management_UserProfile_Order_By = {
  CIN?: Maybe<Order_By>;
  SalesPoint?: Maybe<Management_SalesPoint_Order_By>;
  SalesPointsid?: Maybe<Order_By>;
  active?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  joinUs?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  leftUs?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  user_role?: Maybe<Management_User_Role_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "management.userProfile" */
export type Management_UserProfile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.userProfile" */
export enum Management_UserProfile_Select_Column {
  /** column name */
  Cin = 'CIN',
  /** column name */
  SalesPointsid = 'SalesPointsid',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinUs = 'joinUs',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LeftUs = 'leftUs',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "management.userProfile" */
export type Management_UserProfile_Set_Input = {
  CIN?: Maybe<Scalars['String']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "management.userProfile" */
export enum Management_UserProfile_Update_Column {
  /** column name */
  Cin = 'CIN',
  /** column name */
  SalesPointsid = 'SalesPointsid',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinUs = 'joinUs',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  LeftUs = 'leftUs',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "management.user_role" */
export type Management_User_Role = {
  __typename?: 'management_user_role';
  description: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  user_profiles: Array<Management_UserProfile>;
  /** An aggregated array relationship */
  user_profiles_aggregate: Management_UserProfile_Aggregate;
};


/** columns and relationships of "management.user_role" */
export type Management_User_RoleUser_ProfilesArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** columns and relationships of "management.user_role" */
export type Management_User_RoleUser_Profiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
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
  user_profiles?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** unique or primary key constraints on table "management.user_role" */
export enum Management_User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

export enum Management_User_Role_Enum {
  /** admin role */
  Admin = 'admin',
  /** empty user */
  User = 'user'
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
  user_profiles?: Maybe<Management_UserProfile_Arr_Rel_Insert_Input>;
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
  user_profiles_aggregate?: Maybe<Management_UserProfile_Aggregate_Order_By>;
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
  Name = 'name'
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
  Name = 'name'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contact.Address" */
  delete_contact_Address?: Maybe<Contact_Address_Mutation_Response>;
  /** delete single row from the table: "contact.Address" */
  delete_contact_Address_by_pk?: Maybe<Contact_Address>;
  /** delete data from the table: "contact.Contact" */
  delete_contact_Contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** delete single row from the table: "contact.Contact" */
  delete_contact_Contact_by_pk?: Maybe<Contact_Contact>;
  /** delete data from the table: "contact.Customer" */
  delete_contact_Customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** delete single row from the table: "contact.Customer" */
  delete_contact_Customer_by_pk?: Maybe<Contact_Customer>;
  /** delete data from the table: "contact.Provider" */
  delete_contact_Provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** delete data from the table: "contact.contact_address" */
  delete_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** delete single row from the table: "contact.contact_address" */
  delete_contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** delete data from the table: "contact.customer_address" */
  delete_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** delete single row from the table: "contact.customer_address" */
  delete_contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** delete data from the table: "contact.customer_contact" */
  delete_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** delete single row from the table: "contact.customer_contact" */
  delete_contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** delete data from the table: "contact.provider_address" */
  delete_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** delete single row from the table: "contact.provider_address" */
  delete_contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** delete data from the table: "contact.provider_contact" */
  delete_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** delete single row from the table: "contact.provider_contact" */
  delete_contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** delete data from the table: "management.Company" */
  delete_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** delete single row from the table: "management.Company" */
  delete_management_Company_by_pk?: Maybe<Management_Company>;
  /** delete data from the table: "management.SalesPoint" */
  delete_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** delete single row from the table: "management.SalesPoint" */
  delete_management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** delete data from the table: "management.userProfile" */
  delete_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** delete single row from the table: "management.userProfile" */
  delete_management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** delete data from the table: "management.user_role" */
  delete_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** delete single row from the table: "management.user_role" */
  delete_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** delete data from the table: "product.accessoires" */
  delete_product_accessoires?: Maybe<Product_Accessoires_Mutation_Response>;
  /** delete single row from the table: "product.accessoires" */
  delete_product_accessoires_by_pk?: Maybe<Product_Accessoires>;
  /** insert data into the table: "contact.Address" */
  insert_contact_Address?: Maybe<Contact_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.Address" */
  insert_contact_Address_one?: Maybe<Contact_Address>;
  /** insert data into the table: "contact.Contact" */
  insert_contact_Contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** insert a single row into the table: "contact.Contact" */
  insert_contact_Contact_one?: Maybe<Contact_Contact>;
  /** insert data into the table: "contact.Customer" */
  insert_contact_Customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** insert a single row into the table: "contact.Customer" */
  insert_contact_Customer_one?: Maybe<Contact_Customer>;
  /** insert data into the table: "contact.Provider" */
  insert_contact_Provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** insert a single row into the table: "contact.Provider" */
  insert_contact_Provider_one?: Maybe<Contact_Provider>;
  /** insert data into the table: "contact.contact_address" */
  insert_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.contact_address" */
  insert_contact_contact_address_one?: Maybe<Contact_Contact_Address>;
  /** insert data into the table: "contact.customer_address" */
  insert_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.customer_address" */
  insert_contact_customer_address_one?: Maybe<Contact_Customer_Address>;
  /** insert data into the table: "contact.customer_contact" */
  insert_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** insert a single row into the table: "contact.customer_contact" */
  insert_contact_customer_contact_one?: Maybe<Contact_Customer_Contact>;
  /** insert data into the table: "contact.provider_address" */
  insert_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.provider_address" */
  insert_contact_provider_address_one?: Maybe<Contact_Provider_Address>;
  /** insert data into the table: "contact.provider_contact" */
  insert_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** insert a single row into the table: "contact.provider_contact" */
  insert_contact_provider_contact_one?: Maybe<Contact_Provider_Contact>;
  /** insert data into the table: "management.Company" */
  insert_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** insert a single row into the table: "management.Company" */
  insert_management_Company_one?: Maybe<Management_Company>;
  /** insert data into the table: "management.SalesPoint" */
  insert_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** insert a single row into the table: "management.SalesPoint" */
  insert_management_SalesPoint_one?: Maybe<Management_SalesPoint>;
  /** insert data into the table: "management.userProfile" */
  insert_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** insert a single row into the table: "management.userProfile" */
  insert_management_userProfile_one?: Maybe<Management_UserProfile>;
  /** insert data into the table: "management.user_role" */
  insert_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** insert a single row into the table: "management.user_role" */
  insert_management_user_role_one?: Maybe<Management_User_Role>;
  /** insert data into the table: "product.accessoires" */
  insert_product_accessoires?: Maybe<Product_Accessoires_Mutation_Response>;
  /** insert a single row into the table: "product.accessoires" */
  insert_product_accessoires_one?: Maybe<Product_Accessoires>;
  /** perform the action: "login" */
  login?: Maybe<LoginOutput>;
  /** update data of the table: "contact.Address" */
  update_contact_Address?: Maybe<Contact_Address_Mutation_Response>;
  /** update single row of the table: "contact.Address" */
  update_contact_Address_by_pk?: Maybe<Contact_Address>;
  /** update data of the table: "contact.Contact" */
  update_contact_Contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** update single row of the table: "contact.Contact" */
  update_contact_Contact_by_pk?: Maybe<Contact_Contact>;
  /** update data of the table: "contact.Customer" */
  update_contact_Customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** update single row of the table: "contact.Customer" */
  update_contact_Customer_by_pk?: Maybe<Contact_Customer>;
  /** update data of the table: "contact.Provider" */
  update_contact_Provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** update data of the table: "contact.contact_address" */
  update_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** update single row of the table: "contact.contact_address" */
  update_contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** update data of the table: "contact.customer_address" */
  update_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** update single row of the table: "contact.customer_address" */
  update_contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** update data of the table: "contact.customer_contact" */
  update_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** update single row of the table: "contact.customer_contact" */
  update_contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** update data of the table: "contact.provider_address" */
  update_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** update single row of the table: "contact.provider_address" */
  update_contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** update data of the table: "contact.provider_contact" */
  update_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** update single row of the table: "contact.provider_contact" */
  update_contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** update data of the table: "management.Company" */
  update_management_Company?: Maybe<Management_Company_Mutation_Response>;
  /** update single row of the table: "management.Company" */
  update_management_Company_by_pk?: Maybe<Management_Company>;
  /** update data of the table: "management.SalesPoint" */
  update_management_SalesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** update single row of the table: "management.SalesPoint" */
  update_management_SalesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** update data of the table: "management.userProfile" */
  update_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** update single row of the table: "management.userProfile" */
  update_management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** update data of the table: "management.user_role" */
  update_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** update single row of the table: "management.user_role" */
  update_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** update data of the table: "product.accessoires" */
  update_product_accessoires?: Maybe<Product_Accessoires_Mutation_Response>;
  /** update single row of the table: "product.accessoires" */
  update_product_accessoires_by_pk?: Maybe<Product_Accessoires>;
};


/** mutation root */
export type Mutation_RootDelete_Contact_AddressArgs = {
  where: Contact_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_ContactArgs = {
  where: Contact_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_CustomerArgs = {
  where: Contact_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_ProviderArgs = {
  where: Contact_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Contact_AddressArgs = {
  where: Contact_Contact_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Contact_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_AddressArgs = {
  where: Contact_Customer_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_ContactArgs = {
  where: Contact_Customer_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Provider_AddressArgs = {
  where: Contact_Provider_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Provider_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Provider_ContactArgs = {
  where: Contact_Provider_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Provider_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  providerid: Scalars['uuid'];
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
export type Mutation_RootDelete_Management_UserProfileArgs = {
  where: Management_UserProfile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Management_UserProfile_By_PkArgs = {
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
export type Mutation_RootDelete_Product_AccessoiresArgs = {
  where: Product_Accessoires_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Accessoires_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Contact_AddressArgs = {
  objects: Array<Contact_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Address_OneArgs = {
  object: Contact_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_ContactArgs = {
  objects: Array<Contact_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Contact_OneArgs = {
  object: Contact_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_CustomerArgs = {
  objects: Array<Contact_Customer_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Customer_OneArgs = {
  object: Contact_Customer_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_ProviderArgs = {
  objects: Array<Contact_Provider_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Provider_OneArgs = {
  object: Contact_Provider_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Contact_AddressArgs = {
  objects: Array<Contact_Contact_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Contact_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Contact_Address_OneArgs = {
  object: Contact_Contact_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Contact_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Customer_AddressArgs = {
  objects: Array<Contact_Customer_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Customer_Address_OneArgs = {
  object: Contact_Customer_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Customer_ContactArgs = {
  objects: Array<Contact_Customer_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Customer_Contact_OneArgs = {
  object: Contact_Customer_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Provider_AddressArgs = {
  objects: Array<Contact_Provider_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Provider_Address_OneArgs = {
  object: Contact_Provider_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Provider_ContactArgs = {
  objects: Array<Contact_Provider_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Provider_Contact_OneArgs = {
  object: Contact_Provider_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_Contact_On_Conflict>;
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
export type Mutation_RootInsert_Management_UserProfileArgs = {
  objects: Array<Management_UserProfile_Insert_Input>;
  on_conflict?: Maybe<Management_UserProfile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Management_UserProfile_OneArgs = {
  object: Management_UserProfile_Insert_Input;
  on_conflict?: Maybe<Management_UserProfile_On_Conflict>;
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
export type Mutation_RootInsert_Product_AccessoiresArgs = {
  objects: Array<Product_Accessoires_Insert_Input>;
  on_conflict?: Maybe<Product_Accessoires_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Accessoires_OneArgs = {
  object: Product_Accessoires_Insert_Input;
  on_conflict?: Maybe<Product_Accessoires_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  user: LoginInput;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_AddressArgs = {
  _set?: Maybe<Contact_Address_Set_Input>;
  where: Contact_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Address_By_PkArgs = {
  _set?: Maybe<Contact_Address_Set_Input>;
  pk_columns: Contact_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_ContactArgs = {
  _set?: Maybe<Contact_Contact_Set_Input>;
  where: Contact_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Contact_By_PkArgs = {
  _set?: Maybe<Contact_Contact_Set_Input>;
  pk_columns: Contact_Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_CustomerArgs = {
  _set?: Maybe<Contact_Customer_Set_Input>;
  where: Contact_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Customer_By_PkArgs = {
  _set?: Maybe<Contact_Customer_Set_Input>;
  pk_columns: Contact_Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_ProviderArgs = {
  _set?: Maybe<Contact_Provider_Set_Input>;
  where: Contact_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Contact_AddressArgs = {
  _set?: Maybe<Contact_Contact_Address_Set_Input>;
  where: Contact_Contact_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Contact_Address_By_PkArgs = {
  _set?: Maybe<Contact_Contact_Address_Set_Input>;
  pk_columns: Contact_Contact_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Customer_AddressArgs = {
  _set?: Maybe<Contact_Customer_Address_Set_Input>;
  where: Contact_Customer_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Customer_Address_By_PkArgs = {
  _set?: Maybe<Contact_Customer_Address_Set_Input>;
  pk_columns: Contact_Customer_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Customer_ContactArgs = {
  _set?: Maybe<Contact_Customer_Contact_Set_Input>;
  where: Contact_Customer_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Customer_Contact_By_PkArgs = {
  _set?: Maybe<Contact_Customer_Contact_Set_Input>;
  pk_columns: Contact_Customer_Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Provider_AddressArgs = {
  _set?: Maybe<Contact_Provider_Address_Set_Input>;
  where: Contact_Provider_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Provider_Address_By_PkArgs = {
  _set?: Maybe<Contact_Provider_Address_Set_Input>;
  pk_columns: Contact_Provider_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Provider_ContactArgs = {
  _set?: Maybe<Contact_Provider_Contact_Set_Input>;
  where: Contact_Provider_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Provider_Contact_By_PkArgs = {
  _set?: Maybe<Contact_Provider_Contact_Set_Input>;
  pk_columns: Contact_Provider_Contact_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Management_UserProfileArgs = {
  _set?: Maybe<Management_UserProfile_Set_Input>;
  where: Management_UserProfile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Management_UserProfile_By_PkArgs = {
  _set?: Maybe<Management_UserProfile_Set_Input>;
  pk_columns: Management_UserProfile_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Product_AccessoiresArgs = {
  _inc?: Maybe<Product_Accessoires_Inc_Input>;
  _set?: Maybe<Product_Accessoires_Set_Input>;
  where: Product_Accessoires_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Accessoires_By_PkArgs = {
  _inc?: Maybe<Product_Accessoires_Inc_Input>;
  _set?: Maybe<Product_Accessoires_Set_Input>;
  pk_columns: Product_Accessoires_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product.accessoires" */
export type Product_Accessoires = {
  __typename?: 'product_accessoires';
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['uuid'];
  /** An object relationship */
  createdByUser: Management_UserProfile;
  id: Scalars['uuid'];
  quota: Scalars['numeric'];
  updatedAt: Scalars['timestamptz'];
  updatedBy: Scalars['uuid'];
  /** An object relationship */
  updatedByUser: Management_UserProfile;
};

/** aggregated selection of "product.accessoires" */
export type Product_Accessoires_Aggregate = {
  __typename?: 'product_accessoires_aggregate';
  aggregate?: Maybe<Product_Accessoires_Aggregate_Fields>;
  nodes: Array<Product_Accessoires>;
};

/** aggregate fields of "product.accessoires" */
export type Product_Accessoires_Aggregate_Fields = {
  __typename?: 'product_accessoires_aggregate_fields';
  avg?: Maybe<Product_Accessoires_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Accessoires_Max_Fields>;
  min?: Maybe<Product_Accessoires_Min_Fields>;
  stddev?: Maybe<Product_Accessoires_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Accessoires_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Accessoires_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Accessoires_Sum_Fields>;
  var_pop?: Maybe<Product_Accessoires_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Accessoires_Var_Samp_Fields>;
  variance?: Maybe<Product_Accessoires_Variance_Fields>;
};


/** aggregate fields of "product.accessoires" */
export type Product_Accessoires_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Accessoires_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.accessoires" */
export type Product_Accessoires_Aggregate_Order_By = {
  avg?: Maybe<Product_Accessoires_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Accessoires_Max_Order_By>;
  min?: Maybe<Product_Accessoires_Min_Order_By>;
  stddev?: Maybe<Product_Accessoires_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Accessoires_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Accessoires_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Accessoires_Sum_Order_By>;
  var_pop?: Maybe<Product_Accessoires_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Accessoires_Var_Samp_Order_By>;
  variance?: Maybe<Product_Accessoires_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.accessoires" */
export type Product_Accessoires_Arr_Rel_Insert_Input = {
  data: Array<Product_Accessoires_Insert_Input>;
  on_conflict?: Maybe<Product_Accessoires_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Accessoires_Avg_Fields = {
  __typename?: 'product_accessoires_avg_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.accessoires" */
export type Product_Accessoires_Avg_Order_By = {
  quota?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.accessoires". All fields are combined with a logical 'AND'. */
export type Product_Accessoires_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Accessoires_Bool_Exp>>>;
  _not?: Maybe<Product_Accessoires_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Accessoires_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  createdByUser?: Maybe<Management_UserProfile_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  quota?: Maybe<Numeric_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  updatedByUser?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** unique or primary key constraints on table "product.accessoires" */
export enum Product_Accessoires_Constraint {
  /** unique or primary key constraint */
  AccessoiresCreatedByKey = 'accessoires_createdBy_key',
  /** unique or primary key constraint */
  AccessoiresPkey = 'accessoires_pkey'
}

/** input type for incrementing integer column in table "product.accessoires" */
export type Product_Accessoires_Inc_Input = {
  quota?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product.accessoires" */
export type Product_Accessoires_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  createdByUser?: Maybe<Management_UserProfile_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  updatedByUser?: Maybe<Management_UserProfile_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Accessoires_Max_Fields = {
  __typename?: 'product_accessoires_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.accessoires" */
export type Product_Accessoires_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Accessoires_Min_Fields = {
  __typename?: 'product_accessoires_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.accessoires" */
export type Product_Accessoires_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.accessoires" */
export type Product_Accessoires_Mutation_Response = {
  __typename?: 'product_accessoires_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Accessoires>;
};

/** input type for inserting object relation for remote table "product.accessoires" */
export type Product_Accessoires_Obj_Rel_Insert_Input = {
  data: Product_Accessoires_Insert_Input;
  on_conflict?: Maybe<Product_Accessoires_On_Conflict>;
};

/** on conflict condition type for table "product.accessoires" */
export type Product_Accessoires_On_Conflict = {
  constraint: Product_Accessoires_Constraint;
  update_columns: Array<Product_Accessoires_Update_Column>;
  where?: Maybe<Product_Accessoires_Bool_Exp>;
};

/** ordering options when selecting data from "product.accessoires" */
export type Product_Accessoires_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  createdByUser?: Maybe<Management_UserProfile_Order_By>;
  id?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  updatedByUser?: Maybe<Management_UserProfile_Order_By>;
};

/** primary key columns input for table: "product.accessoires" */
export type Product_Accessoires_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.accessoires" */
export enum Product_Accessoires_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Quota = 'quota',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.accessoires" */
export type Product_Accessoires_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['numeric']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Accessoires_Stddev_Fields = {
  __typename?: 'product_accessoires_stddev_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.accessoires" */
export type Product_Accessoires_Stddev_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Accessoires_Stddev_Pop_Fields = {
  __typename?: 'product_accessoires_stddev_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.accessoires" */
export type Product_Accessoires_Stddev_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Accessoires_Stddev_Samp_Fields = {
  __typename?: 'product_accessoires_stddev_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.accessoires" */
export type Product_Accessoires_Stddev_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Accessoires_Sum_Fields = {
  __typename?: 'product_accessoires_sum_fields';
  quota?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "product.accessoires" */
export type Product_Accessoires_Sum_Order_By = {
  quota?: Maybe<Order_By>;
};

/** update columns of table "product.accessoires" */
export enum Product_Accessoires_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Quota = 'quota',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** aggregate var_pop on columns */
export type Product_Accessoires_Var_Pop_Fields = {
  __typename?: 'product_accessoires_var_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.accessoires" */
export type Product_Accessoires_Var_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Accessoires_Var_Samp_Fields = {
  __typename?: 'product_accessoires_var_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.accessoires" */
export type Product_Accessoires_Var_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Accessoires_Variance_Fields = {
  __typename?: 'product_accessoires_variance_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.accessoires" */
export type Product_Accessoires_Variance_Order_By = {
  quota?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contact.Address" */
  contact_Address: Array<Contact_Address>;
  /** fetch aggregated fields from the table: "contact.Address" */
  contact_Address_aggregate: Contact_Address_Aggregate;
  /** fetch data from the table: "contact.Address" using primary key columns */
  contact_Address_by_pk?: Maybe<Contact_Address>;
  /** fetch data from the table: "contact.Contact" */
  contact_Contact: Array<Contact_Contact>;
  /** fetch aggregated fields from the table: "contact.Contact" */
  contact_Contact_aggregate: Contact_Contact_Aggregate;
  /** fetch data from the table: "contact.Contact" using primary key columns */
  contact_Contact_by_pk?: Maybe<Contact_Contact>;
  /** fetch data from the table: "contact.Customer" */
  contact_Customer: Array<Contact_Customer>;
  /** fetch aggregated fields from the table: "contact.Customer" */
  contact_Customer_aggregate: Contact_Customer_Aggregate;
  /** fetch data from the table: "contact.Customer" using primary key columns */
  contact_Customer_by_pk?: Maybe<Contact_Customer>;
  /** fetch data from the table: "contact.Provider" */
  contact_Provider: Array<Contact_Provider>;
  /** fetch aggregated fields from the table: "contact.Provider" */
  contact_Provider_aggregate: Contact_Provider_Aggregate;
  /** fetch data from the table: "contact.contact_address" */
  contact_contact_address: Array<Contact_Contact_Address>;
  /** fetch aggregated fields from the table: "contact.contact_address" */
  contact_contact_address_aggregate: Contact_Contact_Address_Aggregate;
  /** fetch data from the table: "contact.contact_address" using primary key columns */
  contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** fetch data from the table: "contact.customer_address" */
  contact_customer_address: Array<Contact_Customer_Address>;
  /** fetch aggregated fields from the table: "contact.customer_address" */
  contact_customer_address_aggregate: Contact_Customer_Address_Aggregate;
  /** fetch data from the table: "contact.customer_address" using primary key columns */
  contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** fetch data from the table: "contact.customer_contact" */
  contact_customer_contact: Array<Contact_Customer_Contact>;
  /** fetch aggregated fields from the table: "contact.customer_contact" */
  contact_customer_contact_aggregate: Contact_Customer_Contact_Aggregate;
  /** fetch data from the table: "contact.customer_contact" using primary key columns */
  contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** fetch data from the table: "contact.provider_address" */
  contact_provider_address: Array<Contact_Provider_Address>;
  /** fetch aggregated fields from the table: "contact.provider_address" */
  contact_provider_address_aggregate: Contact_Provider_Address_Aggregate;
  /** fetch data from the table: "contact.provider_address" using primary key columns */
  contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** fetch data from the table: "contact.provider_contact" */
  contact_provider_contact: Array<Contact_Provider_Contact>;
  /** fetch aggregated fields from the table: "contact.provider_contact" */
  contact_provider_contact_aggregate: Contact_Provider_Contact_Aggregate;
  /** fetch data from the table: "contact.provider_contact" using primary key columns */
  contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
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
  /** fetch data from the table: "management.userProfile" */
  management_userProfile: Array<Management_UserProfile>;
  /** fetch aggregated fields from the table: "management.userProfile" */
  management_userProfile_aggregate: Management_UserProfile_Aggregate;
  /** fetch data from the table: "management.userProfile" using primary key columns */
  management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** fetch data from the table: "management.user_role" */
  management_user_role: Array<Management_User_Role>;
  /** fetch aggregated fields from the table: "management.user_role" */
  management_user_role_aggregate: Management_User_Role_Aggregate;
  /** fetch data from the table: "management.user_role" using primary key columns */
  management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** fetch data from the table: "product.accessoires" */
  product_accessoires: Array<Product_Accessoires>;
  /** fetch aggregated fields from the table: "product.accessoires" */
  product_accessoires_aggregate: Product_Accessoires_Aggregate;
  /** fetch data from the table: "product.accessoires" using primary key columns */
  product_accessoires_by_pk?: Maybe<Product_Accessoires>;
};


/** query root */
export type Query_RootContact_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Address_Order_By>>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Address_Order_By>>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Order_By>>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Order_By>>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_CustomerArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Order_By>>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Order_By>>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_ProviderArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Order_By>>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Order_By>>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_Customer_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_Customer_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_Provider_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};


/** query root */
export type Query_RootContact_Provider_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  providerid: Scalars['uuid'];
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
export type Query_RootManagement_UserProfileArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** query root */
export type Query_RootManagement_UserProfile_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** query root */
export type Query_RootManagement_UserProfile_By_PkArgs = {
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
export type Query_RootProduct_AccessoiresArgs = {
  distinct_on?: Maybe<Array<Product_Accessoires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessoires_Order_By>>;
  where?: Maybe<Product_Accessoires_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Accessoires_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Accessoires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessoires_Order_By>>;
  where?: Maybe<Product_Accessoires_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Accessoires_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contact.Address" */
  contact_Address: Array<Contact_Address>;
  /** fetch aggregated fields from the table: "contact.Address" */
  contact_Address_aggregate: Contact_Address_Aggregate;
  /** fetch data from the table: "contact.Address" using primary key columns */
  contact_Address_by_pk?: Maybe<Contact_Address>;
  /** fetch data from the table: "contact.Contact" */
  contact_Contact: Array<Contact_Contact>;
  /** fetch aggregated fields from the table: "contact.Contact" */
  contact_Contact_aggregate: Contact_Contact_Aggregate;
  /** fetch data from the table: "contact.Contact" using primary key columns */
  contact_Contact_by_pk?: Maybe<Contact_Contact>;
  /** fetch data from the table: "contact.Customer" */
  contact_Customer: Array<Contact_Customer>;
  /** fetch aggregated fields from the table: "contact.Customer" */
  contact_Customer_aggregate: Contact_Customer_Aggregate;
  /** fetch data from the table: "contact.Customer" using primary key columns */
  contact_Customer_by_pk?: Maybe<Contact_Customer>;
  /** fetch data from the table: "contact.Provider" */
  contact_Provider: Array<Contact_Provider>;
  /** fetch aggregated fields from the table: "contact.Provider" */
  contact_Provider_aggregate: Contact_Provider_Aggregate;
  /** fetch data from the table: "contact.contact_address" */
  contact_contact_address: Array<Contact_Contact_Address>;
  /** fetch aggregated fields from the table: "contact.contact_address" */
  contact_contact_address_aggregate: Contact_Contact_Address_Aggregate;
  /** fetch data from the table: "contact.contact_address" using primary key columns */
  contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** fetch data from the table: "contact.customer_address" */
  contact_customer_address: Array<Contact_Customer_Address>;
  /** fetch aggregated fields from the table: "contact.customer_address" */
  contact_customer_address_aggregate: Contact_Customer_Address_Aggregate;
  /** fetch data from the table: "contact.customer_address" using primary key columns */
  contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** fetch data from the table: "contact.customer_contact" */
  contact_customer_contact: Array<Contact_Customer_Contact>;
  /** fetch aggregated fields from the table: "contact.customer_contact" */
  contact_customer_contact_aggregate: Contact_Customer_Contact_Aggregate;
  /** fetch data from the table: "contact.customer_contact" using primary key columns */
  contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** fetch data from the table: "contact.provider_address" */
  contact_provider_address: Array<Contact_Provider_Address>;
  /** fetch aggregated fields from the table: "contact.provider_address" */
  contact_provider_address_aggregate: Contact_Provider_Address_Aggregate;
  /** fetch data from the table: "contact.provider_address" using primary key columns */
  contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** fetch data from the table: "contact.provider_contact" */
  contact_provider_contact: Array<Contact_Provider_Contact>;
  /** fetch aggregated fields from the table: "contact.provider_contact" */
  contact_provider_contact_aggregate: Contact_Provider_Contact_Aggregate;
  /** fetch data from the table: "contact.provider_contact" using primary key columns */
  contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
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
  /** fetch data from the table: "management.userProfile" */
  management_userProfile: Array<Management_UserProfile>;
  /** fetch aggregated fields from the table: "management.userProfile" */
  management_userProfile_aggregate: Management_UserProfile_Aggregate;
  /** fetch data from the table: "management.userProfile" using primary key columns */
  management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** fetch data from the table: "management.user_role" */
  management_user_role: Array<Management_User_Role>;
  /** fetch aggregated fields from the table: "management.user_role" */
  management_user_role_aggregate: Management_User_Role_Aggregate;
  /** fetch data from the table: "management.user_role" using primary key columns */
  management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** fetch data from the table: "product.accessoires" */
  product_accessoires: Array<Product_Accessoires>;
  /** fetch aggregated fields from the table: "product.accessoires" */
  product_accessoires_aggregate: Product_Accessoires_Aggregate;
  /** fetch data from the table: "product.accessoires" using primary key columns */
  product_accessoires_by_pk?: Maybe<Product_Accessoires>;
};


/** subscription root */
export type Subscription_RootContact_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Address_Order_By>>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Address_Order_By>>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Order_By>>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Order_By>>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_CustomerArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Order_By>>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Order_By>>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_ProviderArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Order_By>>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Order_By>>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_Customer_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_Customer_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_Provider_AddressArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  providerid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootContact_Provider_ContactArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Contact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Contact_By_PkArgs = {
  contactid: Scalars['uuid'];
  providerid: Scalars['uuid'];
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
export type Subscription_RootManagement_UserProfileArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootManagement_UserProfile_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootManagement_UserProfile_By_PkArgs = {
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
export type Subscription_RootProduct_AccessoiresArgs = {
  distinct_on?: Maybe<Array<Product_Accessoires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessoires_Order_By>>;
  where?: Maybe<Product_Accessoires_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Accessoires_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Accessoires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessoires_Order_By>>;
  where?: Maybe<Product_Accessoires_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Accessoires_By_PkArgs = {
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

export type InsertCustomerMutationVariables = Exact<{
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  addresses?: Array<Contact_Customer_Address_Insert_Input>;
}>;


export type InsertCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_Customer_one?: Maybe<(
    { __typename?: 'contact_Customer' }
    & Pick<Contact_Customer, 'id' | 'FAX' | 'ICE' | 'IF' | 'website' | 'phone' | 'note' | 'name' | 'mail'>
    & { addresses: Array<(
      { __typename?: 'contact_customer_address' }
      & { Address: (
        { __typename?: 'contact_Address' }
        & Pick<Contact_Address, 'city' | 'address' | 'zip'>
      ) }
    )> }
  )> }
);

export type GetAllContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContactsQuery = (
  { __typename?: 'query_root' }
  & { contact_Contact: Array<(
    { __typename?: 'contact_Contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'note' | 'phone'>
  )> }
);

export type GetAllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCustomersQuery = (
  { __typename?: 'query_root' }
  & { contact_Customer: Array<(
    { __typename?: 'contact_Customer' }
    & Pick<Contact_Customer, 'id' | 'ICE' | 'IF' | 'code' | 'mail' | 'name' | 'phone'>
  )> }
);

export type GetAllProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProvidersQuery = (
  { __typename?: 'query_root' }
  & { contact_Provider: Array<(
    { __typename?: 'contact_Provider' }
    & Pick<Contact_Provider, 'id' | 'code' | 'name' | 'note' | 'phone' | 'mail'>
  )> }
);

export type GetContactByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetContactByIdQuery = (
  { __typename?: 'query_root' }
  & { contact_Contact_by_pk?: Maybe<(
    { __typename?: 'contact_Contact' }
    & Pick<Contact_Contact, 'code' | 'createdAt' | 'createdBy' | 'id' | 'mail' | 'name' | 'note' | 'phone' | 'updatedAt' | 'updatedBy'>
    & { customers: Array<(
      { __typename?: 'contact_customer_contact' }
      & { Customer: (
        { __typename?: 'contact_Customer' }
        & Pick<Contact_Customer, 'code' | 'id' | 'name' | 'note' | 'phone'>
      ) }
    )>, addresses: Array<(
      { __typename?: 'contact_contact_address' }
      & { Address: (
        { __typename?: 'contact_Address' }
        & Pick<Contact_Address, 'address' | 'city' | 'id' | 'zip'>
      ) }
    )> }
  )> }
);

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCompanyMutation = (
  { __typename?: 'mutation_root' }
  & { delete_management_Company_by_pk?: Maybe<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'name' | 'id'>
  )> }
);

export type DeleteSalePointMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteSalePointMutation = (
  { __typename?: 'mutation_root' }
  & { delete_management_SalesPoint_by_pk?: Maybe<(
    { __typename?: 'management_SalesPoint' }
    & Pick<Management_SalesPoint, 'name' | 'id'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'mutation_root' }
  & { delete_management_userProfile_by_pk?: Maybe<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'username' | 'id'>
  )> }
);

export type InsertCompanyMutationVariables = Exact<{
  CNSS: Scalars['String'];
  ICE: Scalars['String'];
  IF: Scalars['String'];
  RC: Scalars['String'];
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  website?: Maybe<Scalars['String']>;
}>;


export type InsertCompanyMutation = (
  { __typename?: 'mutation_root' }
  & { insert_management_Company_one?: Maybe<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'id' | 'name' | 'phone' | 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email'>
  )> }
);

export type InsertSalePointMutationVariables = Exact<{
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
}>;


export type InsertSalePointMutation = (
  { __typename?: 'mutation_root' }
  & { insert_management_SalesPoint_one?: Maybe<(
    { __typename?: 'management_SalesPoint' }
    & Pick<Management_SalesPoint, 'id' | 'address' | 'email' | 'fax' | 'name' | 'phone'>
  )> }
);

export type InsertUserMutationVariables = Exact<{
  CIN?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type InsertUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_management_userProfile_one?: Maybe<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'id' | 'active' | 'firstname' | 'lastname' | 'phone' | 'username'>
    & { user_role: (
      { __typename?: 'management_user_role' }
      & Pick<Management_User_Role, 'name' | 'description'>
    ), SalesPoint?: Maybe<(
      { __typename?: 'management_SalesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export type UpdateCompanyMutationVariables = Exact<{
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
}>;


export type UpdateCompanyMutation = (
  { __typename?: 'mutation_root' }
  & { update_management_Company_by_pk?: Maybe<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'id' | 'name' | 'phone' | 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email'>
  )> }
);

export type UpdateSalePointMutationVariables = Exact<{
  id: Scalars['uuid'];
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}>;


export type UpdateSalePointMutation = (
  { __typename?: 'mutation_root' }
  & { update_management_SalesPoint_by_pk?: Maybe<(
    { __typename?: 'management_SalesPoint' }
    & Pick<Management_SalesPoint, 'id' | 'address' | 'email' | 'fax' | 'name' | 'phone'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  CIN?: Maybe<Scalars['String']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_management_userProfile_by_pk?: Maybe<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'id' | 'active' | 'firstname' | 'lastname' | 'phone' | 'username'>
    & { user_role: (
      { __typename?: 'management_user_role' }
      & Pick<Management_User_Role, 'name' | 'description'>
    ), SalesPoint?: Maybe<(
      { __typename?: 'management_SalesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = (
  { __typename?: 'query_root' }
  & { management_Company: Array<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'id' | 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email' | 'name' | 'phone'>
  )> }
);

export type GetAllSalesPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSalesPointsQuery = (
  { __typename?: 'query_root' }
  & { management_SalesPoint: Array<(
    { __typename?: 'management_SalesPoint' }
    & Pick<Management_SalesPoint, 'address' | 'email' | 'fax' | 'id' | 'name' | 'phone'>
  )> }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'query_root' }
  & { management_userProfile: Array<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'id' | 'active' | 'firstname' | 'lastname' | 'phone' | 'username'>
    & { user_role: (
      { __typename?: 'management_user_role' }
      & Pick<Management_User_Role, 'name' | 'description'>
    ), SalesPoint?: Maybe<(
      { __typename?: 'management_SalesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'address' | 'phone'>
    )> }
  )> }
);

export type GetCompanyByIdQueryVariables = Exact<{
  _id: Scalars['uuid'];
}>;


export type GetCompanyByIdQuery = (
  { __typename?: 'query_root' }
  & { management_Company: Array<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email' | 'name' | 'phone' | 'website' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'id'>
  )> }
);

export type GetSalePointByIdQueryVariables = Exact<{
  _id: Scalars['uuid'];
}>;


export type GetSalePointByIdQuery = (
  { __typename?: 'query_root' }
  & { management_SalesPoint: Array<(
    { __typename?: 'management_SalesPoint' }
    & Pick<Management_SalesPoint, 'address' | 'email' | 'fax' | 'id' | 'name' | 'phone' | 'createdBy' | 'updatedBy' | 'createdAt' | 'updatedAt'>
    & { usersProfiles: Array<(
      { __typename?: 'management_userProfile' }
      & Pick<Management_UserProfile, 'firstname' | 'id' | 'lastname' | 'phone' | 'username' | 'active'>
      & { user_role: (
        { __typename?: 'management_user_role' }
        & Pick<Management_User_Role, 'name'>
      ) }
    )> }
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  _id?: Maybe<Scalars['uuid']>;
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { management_userProfile: Array<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'CIN' | 'active' | 'createdAt' | 'createdBy' | 'email' | 'firstname' | 'id' | 'joinUs' | 'lastname' | 'leftUs' | 'phone' | 'password' | 'role' | 'updatedAt' | 'updatedBy' | 'username' | 'SalesPointsid'>
    & { user_role: (
      { __typename?: 'management_user_role' }
      & Pick<Management_User_Role, 'description' | 'name'>
    ), SalesPoint?: Maybe<(
      { __typename?: 'management_SalesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export const InsertCustomerDocument = gql`
    mutation insertCustomer($FAX: String = "", $ICE: String = "", $IF: String = "", $mail: String = "", $name: String = "", $note: String = "", $phone: String = "", $website: String = "", $addresses: [contact_customer_address_insert_input!]! = {Address: {data: {address: "", city: "", zip: ""}}}) {
  insert_contact_Customer_one(
    object: {FAX: $FAX, ICE: $ICE, IF: $IF, addresses: {data: $addresses}, mail: $mail, name: $name, note: $note, phone: $phone, website: $website}
  ) {
    id
    FAX
    ICE
    IF
    website
    phone
    note
    name
    mail
    addresses {
      Address {
        city
        address
        zip
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertCustomerGQL extends Apollo.Mutation<InsertCustomerMutation, InsertCustomerMutationVariables> {
    document = InsertCustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllContactsDocument = gql`
    query GetAllContacts {
  contact_Contact {
    id
    code
    mail
    name
    note
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllContactsGQL extends Apollo.Query<GetAllContactsQuery, GetAllContactsQueryVariables> {
    document = GetAllContactsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllCustomersDocument = gql`
    query GetAllCustomers {
  contact_Customer {
    id
    ICE
    IF
    code
    mail
    name
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllCustomersGQL extends Apollo.Query<GetAllCustomersQuery, GetAllCustomersQueryVariables> {
    document = GetAllCustomersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllProvidersDocument = gql`
    query GetAllProviders {
  contact_Provider {
    id
    code
    name
    note
    phone
    mail
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllProvidersGQL extends Apollo.Query<GetAllProvidersQuery, GetAllProvidersQueryVariables> {
    document = GetAllProvidersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContactByIdDocument = gql`
    query GetContactById($id: uuid!) {
  contact_Contact_by_pk(id: $id) {
    code
    createdAt
    createdBy
    id
    mail
    name
    note
    phone
    updatedAt
    updatedBy
    customers {
      Customer {
        code
        id
        name
        note
        phone
      }
    }
    addresses {
      Address {
        address
        city
        id
        zip
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContactByIdGQL extends Apollo.Query<GetContactByIdQuery, GetContactByIdQueryVariables> {
    document = GetContactByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCompanyDocument = gql`
    mutation DeleteCompany($id: uuid!) {
  delete_management_Company_by_pk(id: $id) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCompanyGQL extends Apollo.Mutation<DeleteCompanyMutation, DeleteCompanyMutationVariables> {
    document = DeleteCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSalePointDocument = gql`
    mutation DeleteSalePoint($id: uuid!) {
  delete_management_SalesPoint_by_pk(id: $id) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSalePointGQL extends Apollo.Mutation<DeleteSalePointMutation, DeleteSalePointMutationVariables> {
    document = DeleteSalePointDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: uuid!) {
  delete_management_userProfile_by_pk(id: $id) {
    username
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertCompanyDocument = gql`
    mutation InsertCompany($CNSS: String!, $ICE: String!, $IF: String!, $RC: String!, $address: String!, $email: String, $name: String!, $phone: String!, $website: String) {
  insert_management_Company_one(
    object: {CNSS: $CNSS, ICE: $ICE, IF: $IF, RC: $RC, address: $address, email: $email, name: $name, phone: $phone, website: $website}
  ) {
    id
    name
    phone
    CNSS
    ICE
    IF
    RC
    address
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertCompanyGQL extends Apollo.Mutation<InsertCompanyMutation, InsertCompanyMutationVariables> {
    document = InsertCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertSalePointDocument = gql`
    mutation InsertSalePoint($address: String!, $email: String, $name: String!, $phone: String!, $fax: String) {
  insert_management_SalesPoint_one(
    object: {address: $address, email: $email, name: $name, phone: $phone, fax: $fax}
  ) {
    id
    address
    email
    fax
    name
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertSalePointGQL extends Apollo.Mutation<InsertSalePointMutation, InsertSalePointMutationVariables> {
    document = InsertSalePointDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertUserDocument = gql`
    mutation InsertUser($CIN: String, $active: Boolean = true, $email: String, $firstname: String!, $lastname: String!, $password: String, $phone: String, $username: String!, $name: String = "", $description: String = "") {
  insert_management_userProfile_one(
    object: {CIN: $CIN, active: $active, email: $email, firstname: $firstname, lastname: $lastname, password: $password, phone: $phone, username: $username, user_role: {data: {description: $description, name: $name}}}
  ) {
    id
    active
    firstname
    lastname
    phone
    username
    user_role {
      name
      description
    }
    SalesPoint {
      name
      phone
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertUserGQL extends Apollo.Mutation<InsertUserMutation, InsertUserMutationVariables> {
    document = InsertUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($CNSS: String, $ICE: String, $IF: String, $RC: String, $address: String, $email: String, $name: String, $phone: String, $website: String, $id: uuid!) {
  update_management_Company_by_pk(
    pk_columns: {id: $id}
    _set: {CNSS: $CNSS, ICE: $ICE, IF: $IF, RC: $RC, address: $address, email: $email, name: $name, phone: $phone, website: $website}
  ) {
    id
    name
    phone
    CNSS
    ICE
    IF
    RC
    address
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCompanyGQL extends Apollo.Mutation<UpdateCompanyMutation, UpdateCompanyMutationVariables> {
    document = UpdateCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSalePointDocument = gql`
    mutation UpdateSalePoint($id: uuid!, $address: String = "", $email: String = "", $fax: String = "", $name: String = "", $phone: String = "") {
  update_management_SalesPoint_by_pk(
    pk_columns: {id: $id}
    _set: {address: $address, email: $email, fax: $fax, id: $id, name: $name, phone: $phone}
  ) {
    id
    address
    email
    fax
    name
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSalePointGQL extends Apollo.Mutation<UpdateSalePointMutation, UpdateSalePointMutationVariables> {
    document = UpdateSalePointDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $CIN: String, $SalesPointsid: uuid, $active: Boolean = true, $email: String, $firstname: String, $lastname: String, $password: String, $phone: String, $username: String, $role: management_user_role_enum = admin) {
  update_management_userProfile_by_pk(
    pk_columns: {id: $id}
    _set: {CIN: $CIN, SalesPointsid: $SalesPointsid, active: $active, email: $email, firstname: $firstname, lastname: $lastname, password: $password, phone: $phone, username: $username, role: $role}
  ) {
    id
    active
    firstname
    lastname
    phone
    username
    user_role {
      name
      description
    }
    SalesPoint {
      name
      phone
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllCompaniesDocument = gql`
    query GetAllCompanies {
  management_Company {
    id
    CNSS
    ICE
    IF
    RC
    address
    email
    name
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllCompaniesGQL extends Apollo.Query<GetAllCompaniesQuery, GetAllCompaniesQueryVariables> {
    document = GetAllCompaniesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllSalesPointsDocument = gql`
    query GetAllSalesPoints {
  management_SalesPoint {
    address
    email
    fax
    id
    name
    phone
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllSalesPointsGQL extends Apollo.Query<GetAllSalesPointsQuery, GetAllSalesPointsQueryVariables> {
    document = GetAllSalesPointsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  management_userProfile {
    id
    active
    firstname
    lastname
    phone
    username
    user_role {
      name
      description
    }
    SalesPoint {
      name
      address
      phone
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllUsersGQL extends Apollo.Query<GetAllUsersQuery, GetAllUsersQueryVariables> {
    document = GetAllUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCompanyByIdDocument = gql`
    query GetCompanyById($_id: uuid!) {
  management_Company(where: {id: {_eq: $_id}}) {
    CNSS
    ICE
    IF
    RC
    address
    email
    name
    phone
    website
    createdAt
    createdBy
    updatedAt
    updatedBy
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCompanyByIdGQL extends Apollo.Query<GetCompanyByIdQuery, GetCompanyByIdQueryVariables> {
    document = GetCompanyByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSalePointByIdDocument = gql`
    query GetSalePointById($_id: uuid!) {
  management_SalesPoint(where: {id: {_eq: $_id}}) {
    address
    email
    fax
    id
    name
    phone
    createdBy
    updatedBy
    usersProfiles {
      firstname
      id
      lastname
      phone
      username
      user_role {
        name
      }
      active
    }
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSalePointByIdGQL extends Apollo.Query<GetSalePointByIdQuery, GetSalePointByIdQueryVariables> {
    document = GetSalePointByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserByIdDocument = gql`
    query getUserById($_id: uuid) {
  management_userProfile(where: {id: {_eq: $_id}}) {
    CIN
    active
    createdAt
    createdBy
    email
    firstname
    id
    joinUs
    lastname
    leftUs
    phone
    password
    role
    updatedAt
    updatedBy
    username
    user_role {
      description
      name
    }
    SalesPoint {
      name
      phone
      address
    }
    SalesPointsid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }