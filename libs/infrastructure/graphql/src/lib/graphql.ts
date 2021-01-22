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
  jsonb: any;
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

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
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

/** columns and relationships of "contact.address" */
export type Contact_Address = {
  __typename?: 'contact_address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
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
  zip?: Maybe<Scalars['String']>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressContact_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressContact_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressCustomer_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressCustomer_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressProvider_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.address" */
export type Contact_AddressProvider_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};

/** aggregated selection of "contact.address" */
export type Contact_Address_Aggregate = {
  __typename?: 'contact_address_aggregate';
  aggregate?: Maybe<Contact_Address_Aggregate_Fields>;
  nodes: Array<Contact_Address>;
};

/** aggregate fields of "contact.address" */
export type Contact_Address_Aggregate_Fields = {
  __typename?: 'contact_address_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Address_Max_Fields>;
  min?: Maybe<Contact_Address_Min_Fields>;
};


/** aggregate fields of "contact.address" */
export type Contact_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.address" */
export type Contact_Address_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Address_Max_Order_By>;
  min?: Maybe<Contact_Address_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.address" */
export type Contact_Address_Arr_Rel_Insert_Input = {
  data: Array<Contact_Address_Insert_Input>;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.address". All fields are combined with a logical 'AND'. */
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

/** unique or primary key constraints on table "contact.address" */
export enum Contact_Address_Constraint {
  /** unique or primary key constraint */
  AddressPkey = 'Address_pkey'
}

/** input type for inserting data into table "contact.address" */
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
  __typename?: 'contact_address_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.address" */
export type Contact_Address_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Address_Min_Fields = {
  __typename?: 'contact_address_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.address" */
export type Contact_Address_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.address" */
export type Contact_Address_Mutation_Response = {
  __typename?: 'contact_address_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Address>;
};

/** input type for inserting object relation for remote table "contact.address" */
export type Contact_Address_Obj_Rel_Insert_Input = {
  data: Contact_Address_Insert_Input;
  on_conflict?: Maybe<Contact_Address_On_Conflict>;
};

/** on conflict condition type for table "contact.address" */
export type Contact_Address_On_Conflict = {
  constraint: Contact_Address_Constraint;
  update_columns: Array<Contact_Address_Update_Column>;
  where?: Maybe<Contact_Address_Bool_Exp>;
};

/** ordering options when selecting data from "contact.address" */
export type Contact_Address_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  contact_addresses_aggregate?: Maybe<Contact_Contact_Address_Aggregate_Order_By>;
  customer_addresses_aggregate?: Maybe<Contact_Customer_Address_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  provider_addresses_aggregate?: Maybe<Contact_Provider_Address_Aggregate_Order_By>;
  zip?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.address" */
export type Contact_Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.address" */
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

/** input type for updating data in table "contact.address" */
export type Contact_Address_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** update columns of table "contact.address" */
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

/** columns and relationships of "contact.contact" */
export type Contact_Contact = {
  __typename?: 'contact_contact';
  /** An array relationship */
  addresses: Array<Contact_Contact_Addresses_View>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Contact_Addresses_View_Aggregate;
  code?: Maybe<Scalars['String']>;
  /** An array relationship */
  contact_addresses: Array<Contact_Contact_Address>;
  /** An aggregated array relationship */
  contact_addresses_aggregate: Contact_Contact_Address_Aggregate;
  /** An array relationship */
  contact_customers: Array<Contact_Customer_Contact>;
  /** An aggregated array relationship */
  contact_customers_aggregate: Contact_Customer_Contact_Aggregate;
  /** An array relationship */
  contact_providers: Array<Contact_Provider_Contact>;
  /** An aggregated array relationship */
  contact_providers_aggregate: Contact_Provider_Contact_Aggregate;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  cutomers: Array<Contact_Contact_Customers_View>;
  /** An aggregated array relationship */
  cutomers_aggregate: Contact_Contact_Customers_View_Aggregate;
  id: Scalars['uuid'];
  mail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  /** An array relationship */
  providers: Array<Contact_Contact_Providers_View>;
  /** An aggregated array relationship */
  providers_aggregate: Contact_Contact_Providers_View_Aggregate;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Address_Order_By>>;
  where?: Maybe<Contact_Contact_Address_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_CustomersArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_Customers_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_ProvidersArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactContact_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactCutomersArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactCutomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactProvidersArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
};


/** columns and relationships of "contact.contact" */
export type Contact_ContactProviders_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
};

/** columns and relationships of "contact.contact_address" */
export type Contact_Contact_Address = {
  __typename?: 'contact_contact_address';
  /** An object relationship */
  address: Contact_Address;
  addressid: Scalars['uuid'];
  /** An object relationship */
  contact: Contact_Contact;
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
  _and?: Maybe<Array<Maybe<Contact_Contact_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Address_Bool_Exp>>>;
  address?: Maybe<Contact_Address_Bool_Exp>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  contact?: Maybe<Contact_Contact_Bool_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.contact_address" */
export enum Contact_Contact_Address_Constraint {
  /** unique or primary key constraint */
  ContactAddressPkey = 'contact_address_pkey'
}

/** input type for inserting data into table "contact.contact_address" */
export type Contact_Contact_Address_Insert_Input = {
  address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
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
  address?: Maybe<Contact_Address_Order_By>;
  addressid?: Maybe<Order_By>;
  contact?: Maybe<Contact_Contact_Order_By>;
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

/** columns and relationships of "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View = {
  __typename?: 'contact_contact_addresses_view';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Aggregate = {
  __typename?: 'contact_contact_addresses_view_aggregate';
  aggregate?: Maybe<Contact_Contact_Addresses_View_Aggregate_Fields>;
  nodes: Array<Contact_Contact_Addresses_View>;
};

/** aggregate fields of "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Aggregate_Fields = {
  __typename?: 'contact_contact_addresses_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Addresses_View_Max_Fields>;
  min?: Maybe<Contact_Contact_Addresses_View_Min_Fields>;
};


/** aggregate fields of "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Addresses_View_Max_Order_By>;
  min?: Maybe<Contact_Contact_Addresses_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.contact_addresses_view". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Addresses_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Contact_Addresses_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Addresses_View_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contact_Contact_Addresses_View_Max_Fields = {
  __typename?: 'contact_contact_addresses_view_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Contact_Addresses_View_Min_Fields = {
  __typename?: 'contact_contact_addresses_view_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** ordering options when selecting data from "contact.contact_addresses_view" */
export type Contact_Contact_Addresses_View_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** select columns of table "contact.contact_addresses_view" */
export enum Contact_Contact_Addresses_View_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Contactid = 'contactid',
  /** column name */
  Id = 'id',
  /** column name */
  Zip = 'zip'
}

/** aggregated selection of "contact.contact" */
export type Contact_Contact_Aggregate = {
  __typename?: 'contact_contact_aggregate';
  aggregate?: Maybe<Contact_Contact_Aggregate_Fields>;
  nodes: Array<Contact_Contact>;
};

/** aggregate fields of "contact.contact" */
export type Contact_Contact_Aggregate_Fields = {
  __typename?: 'contact_contact_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Max_Fields>;
  min?: Maybe<Contact_Contact_Min_Fields>;
};


/** aggregate fields of "contact.contact" */
export type Contact_Contact_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.contact" */
export type Contact_Contact_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Max_Order_By>;
  min?: Maybe<Contact_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.contact" */
export type Contact_Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.contact". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Bool_Exp>>>;
  addresses?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contact_addresses?: Maybe<Contact_Contact_Address_Bool_Exp>;
  contact_customers?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  contact_providers?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  cutomers?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  providers?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.contact" */
export enum Contact_Contact_Constraint {
  /** unique or primary key constraint */
  ContactCodeKey = 'Contact_code_key',
  /** unique or primary key constraint */
  ContactPhoneKey = 'Contact_phone_key',
  /** unique or primary key constraint */
  ContactPkey = 'Contact_pkey'
}

/** columns and relationships of "contact.contact_customers_view" */
export type Contact_Contact_Customers_View = {
  __typename?: 'contact_contact_customers_view';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** aggregated selection of "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Aggregate = {
  __typename?: 'contact_contact_customers_view_aggregate';
  aggregate?: Maybe<Contact_Contact_Customers_View_Aggregate_Fields>;
  nodes: Array<Contact_Contact_Customers_View>;
};

/** aggregate fields of "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Aggregate_Fields = {
  __typename?: 'contact_contact_customers_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Customers_View_Max_Fields>;
  min?: Maybe<Contact_Contact_Customers_View_Min_Fields>;
};


/** aggregate fields of "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Customers_View_Max_Order_By>;
  min?: Maybe<Contact_Contact_Customers_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.contact_customers_view". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Customers_View_Bool_Exp = {
  FAX?: Maybe<String_Comparison_Exp>;
  ICE?: Maybe<String_Comparison_Exp>;
  IF?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Contact_Customers_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Customers_View_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
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

/** aggregate max on columns */
export type Contact_Contact_Customers_View_Max_Fields = {
  __typename?: 'contact_contact_customers_view_max_fields';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** order by max() on columns of table "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Max_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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
export type Contact_Contact_Customers_View_Min_Fields = {
  __typename?: 'contact_contact_customers_view_min_fields';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** order by min() on columns of table "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Min_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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

/** ordering options when selecting data from "contact.contact_customers_view" */
export type Contact_Contact_Customers_View_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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

/** select columns of table "contact.contact_customers_view" */
export enum Contact_Contact_Customers_View_Select_Column {
  /** column name */
  Fax = 'FAX',
  /** column name */
  Ice = 'ICE',
  /** column name */
  If = 'IF',
  /** column name */
  Code = 'code',
  /** column name */
  Contactid = 'contactid',
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

/** input type for inserting data into table "contact.contact" */
export type Contact_Contact_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  contact_addresses?: Maybe<Contact_Contact_Address_Arr_Rel_Insert_Input>;
  contact_customers?: Maybe<Contact_Customer_Contact_Arr_Rel_Insert_Input>;
  contact_providers?: Maybe<Contact_Provider_Contact_Arr_Rel_Insert_Input>;
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
export type Contact_Contact_Max_Fields = {
  __typename?: 'contact_contact_max_fields';
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

/** order by max() on columns of table "contact.contact" */
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
  __typename?: 'contact_contact_min_fields';
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

/** order by min() on columns of table "contact.contact" */
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

/** response of any mutation on the table "contact.contact" */
export type Contact_Contact_Mutation_Response = {
  __typename?: 'contact_contact_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Contact>;
};

/** input type for inserting object relation for remote table "contact.contact" */
export type Contact_Contact_Obj_Rel_Insert_Input = {
  data: Contact_Contact_Insert_Input;
  on_conflict?: Maybe<Contact_Contact_On_Conflict>;
};

/** on conflict condition type for table "contact.contact" */
export type Contact_Contact_On_Conflict = {
  constraint: Contact_Contact_Constraint;
  update_columns: Array<Contact_Contact_Update_Column>;
  where?: Maybe<Contact_Contact_Bool_Exp>;
};

/** ordering options when selecting data from "contact.contact" */
export type Contact_Contact_Order_By = {
  addresses_aggregate?: Maybe<Contact_Contact_Addresses_View_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contact_addresses_aggregate?: Maybe<Contact_Contact_Address_Aggregate_Order_By>;
  contact_customers_aggregate?: Maybe<Contact_Customer_Contact_Aggregate_Order_By>;
  contact_providers_aggregate?: Maybe<Contact_Provider_Contact_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  cutomers_aggregate?: Maybe<Contact_Contact_Customers_View_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  providers_aggregate?: Maybe<Contact_Contact_Providers_View_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.contact" */
export type Contact_Contact_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "contact.contact_providers_view" */
export type Contact_Contact_Providers_View = {
  __typename?: 'contact_contact_providers_view';
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** aggregated selection of "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Aggregate = {
  __typename?: 'contact_contact_providers_view_aggregate';
  aggregate?: Maybe<Contact_Contact_Providers_View_Aggregate_Fields>;
  nodes: Array<Contact_Contact_Providers_View>;
};

/** aggregate fields of "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Aggregate_Fields = {
  __typename?: 'contact_contact_providers_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Contact_Providers_View_Max_Fields>;
  min?: Maybe<Contact_Contact_Providers_View_Min_Fields>;
};


/** aggregate fields of "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Contact_Providers_View_Max_Order_By>;
  min?: Maybe<Contact_Contact_Providers_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.contact_providers_view". All fields are combined with a logical 'AND'. */
export type Contact_Contact_Providers_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Contact_Providers_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Contact_Providers_View_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
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

/** aggregate max on columns */
export type Contact_Contact_Providers_View_Max_Fields = {
  __typename?: 'contact_contact_providers_view_max_fields';
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** order by max() on columns of table "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Max_Order_By = {
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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
export type Contact_Contact_Providers_View_Min_Fields = {
  __typename?: 'contact_contact_providers_view_min_fields';
  code?: Maybe<Scalars['String']>;
  contactid?: Maybe<Scalars['uuid']>;
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

/** order by min() on columns of table "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Min_Order_By = {
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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

/** ordering options when selecting data from "contact.contact_providers_view" */
export type Contact_Contact_Providers_View_Order_By = {
  code?: Maybe<Order_By>;
  contactid?: Maybe<Order_By>;
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

/** select columns of table "contact.contact_providers_view" */
export enum Contact_Contact_Providers_View_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Contactid = 'contactid',
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

/** select columns of table "contact.contact" */
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

/** input type for updating data in table "contact.contact" */
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

/** update columns of table "contact.contact" */
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

/** columns and relationships of "contact.customer" */
export type Contact_Customer = {
  __typename?: 'contact_customer';
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  /** An array relationship */
  addresses: Array<Contact_Customer_Addresses_View>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Customer_Addresses_View_Aggregate;
  code?: Maybe<Scalars['String']>;
  /** An array relationship */
  contacts: Array<Contact_Customer_Contacts_View>;
  /** An aggregated array relationship */
  contacts_aggregate: Contact_Customer_Contacts_View_Aggregate;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  customer_addresses: Array<Contact_Customer_Address>;
  /** An aggregated array relationship */
  customer_addresses_aggregate: Contact_Customer_Address_Aggregate;
  /** An array relationship */
  customer_contacts: Array<Contact_Customer_Contact>;
  /** An aggregated array relationship */
  customer_contacts_aggregate: Contact_Customer_Contact_Aggregate;
  id: Scalars['uuid'];
  mail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerCustomer_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerCustomer_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Address_Order_By>>;
  where?: Maybe<Contact_Customer_Address_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerCustomer_ContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.customer" */
export type Contact_CustomerCustomer_Contacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contact_Order_By>>;
  where?: Maybe<Contact_Customer_Contact_Bool_Exp>;
};

/** columns and relationships of "contact.customer_address" */
export type Contact_Customer_Address = {
  __typename?: 'contact_customer_address';
  /** An object relationship */
  address: Contact_Address;
  addressid: Scalars['uuid'];
  /** An object relationship */
  customer: Contact_Customer;
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
  _and?: Maybe<Array<Maybe<Contact_Customer_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Address_Bool_Exp>>>;
  address?: Maybe<Contact_Address_Bool_Exp>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  customer?: Maybe<Contact_Customer_Bool_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.customer_address" */
export enum Contact_Customer_Address_Constraint {
  /** unique or primary key constraint */
  CustomerAddressPkey = 'customer_address_pkey'
}

/** input type for inserting data into table "contact.customer_address" */
export type Contact_Customer_Address_Insert_Input = {
  address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  customer?: Maybe<Contact_Customer_Obj_Rel_Insert_Input>;
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
  address?: Maybe<Contact_Address_Order_By>;
  addressid?: Maybe<Order_By>;
  customer?: Maybe<Contact_Customer_Order_By>;
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

/** columns and relationships of "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View = {
  __typename?: 'contact_customer_addresses_view';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Aggregate = {
  __typename?: 'contact_customer_addresses_view_aggregate';
  aggregate?: Maybe<Contact_Customer_Addresses_View_Aggregate_Fields>;
  nodes: Array<Contact_Customer_Addresses_View>;
};

/** aggregate fields of "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Aggregate_Fields = {
  __typename?: 'contact_customer_addresses_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Addresses_View_Max_Fields>;
  min?: Maybe<Contact_Customer_Addresses_View_Min_Fields>;
};


/** aggregate fields of "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Addresses_View_Max_Order_By>;
  min?: Maybe<Contact_Customer_Addresses_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.customer_addresses_view". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Addresses_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Customer_Addresses_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Addresses_View_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contact_Customer_Addresses_View_Max_Fields = {
  __typename?: 'contact_customer_addresses_view_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Addresses_View_Min_Fields = {
  __typename?: 'contact_customer_addresses_view_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** ordering options when selecting data from "contact.customer_addresses_view" */
export type Contact_Customer_Addresses_View_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** select columns of table "contact.customer_addresses_view" */
export enum Contact_Customer_Addresses_View_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Customerid = 'customerid',
  /** column name */
  Id = 'id',
  /** column name */
  Zip = 'zip'
}

/** aggregated selection of "contact.customer" */
export type Contact_Customer_Aggregate = {
  __typename?: 'contact_customer_aggregate';
  aggregate?: Maybe<Contact_Customer_Aggregate_Fields>;
  nodes: Array<Contact_Customer>;
};

/** aggregate fields of "contact.customer" */
export type Contact_Customer_Aggregate_Fields = {
  __typename?: 'contact_customer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Max_Fields>;
  min?: Maybe<Contact_Customer_Min_Fields>;
};


/** aggregate fields of "contact.customer" */
export type Contact_Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.customer" */
export type Contact_Customer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Max_Order_By>;
  min?: Maybe<Contact_Customer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.customer" */
export type Contact_Customer_Arr_Rel_Insert_Input = {
  data: Array<Contact_Customer_Insert_Input>;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.customer". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Bool_Exp = {
  FAX?: Maybe<String_Comparison_Exp>;
  ICE?: Maybe<String_Comparison_Exp>;
  IF?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Customer_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Bool_Exp>>>;
  addresses?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contacts?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  customer_addresses?: Maybe<Contact_Customer_Address_Bool_Exp>;
  customer_contacts?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.customer" */
export enum Contact_Customer_Constraint {
  /** unique or primary key constraint */
  CustomerCodeKey = 'Customer_code_key',
  /** unique or primary key constraint */
  CustomerNameKey = 'Customer_name_key',
  /** unique or primary key constraint */
  CustomerPhoneKey = 'Customer_phone_key',
  /** unique or primary key constraint */
  CustomerPkey = 'Customer_pkey'
}

/** columns and relationships of "contact.customer_contact" */
export type Contact_Customer_Contact = {
  __typename?: 'contact_customer_contact';
  /** An object relationship */
  contact: Contact_Contact;
  contactid: Scalars['uuid'];
  /** An object relationship */
  customer: Contact_Customer;
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
  _and?: Maybe<Array<Maybe<Contact_Customer_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Contact_Bool_Exp>>>;
  contact?: Maybe<Contact_Contact_Bool_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
  customer?: Maybe<Contact_Customer_Bool_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.customer_contact" */
export enum Contact_Customer_Contact_Constraint {
  /** unique or primary key constraint */
  ContactCustomerPkey = 'contact_customer_pkey'
}

/** input type for inserting data into table "contact.customer_contact" */
export type Contact_Customer_Contact_Insert_Input = {
  contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
  contactid?: Maybe<Scalars['uuid']>;
  customer?: Maybe<Contact_Customer_Obj_Rel_Insert_Input>;
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
  contact?: Maybe<Contact_Contact_Order_By>;
  contactid?: Maybe<Order_By>;
  customer?: Maybe<Contact_Customer_Order_By>;
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

/** columns and relationships of "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View = {
  __typename?: 'contact_customer_contacts_view';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Aggregate = {
  __typename?: 'contact_customer_contacts_view_aggregate';
  aggregate?: Maybe<Contact_Customer_Contacts_View_Aggregate_Fields>;
  nodes: Array<Contact_Customer_Contacts_View>;
};

/** aggregate fields of "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Aggregate_Fields = {
  __typename?: 'contact_customer_contacts_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Customer_Contacts_View_Max_Fields>;
  min?: Maybe<Contact_Customer_Contacts_View_Min_Fields>;
};


/** aggregate fields of "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Customer_Contacts_View_Max_Order_By>;
  min?: Maybe<Contact_Customer_Contacts_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.customer_contacts_view". All fields are combined with a logical 'AND'. */
export type Contact_Customer_Contacts_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Customer_Contacts_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Customer_Contacts_View_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  customerid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contact_Customer_Contacts_View_Max_Fields = {
  __typename?: 'contact_customer_contacts_view_max_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Contacts_View_Min_Fields = {
  __typename?: 'contact_customer_contacts_view_min_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  customerid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** ordering options when selecting data from "contact.customer_contacts_view" */
export type Contact_Customer_Contacts_View_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  customerid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** select columns of table "contact.customer_contacts_view" */
export enum Contact_Customer_Contacts_View_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Customerid = 'customerid',
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

/** input type for inserting data into table "contact.customer" */
export type Contact_Customer_Insert_Input = {
  FAX?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  customer_addresses?: Maybe<Contact_Customer_Address_Arr_Rel_Insert_Input>;
  customer_contacts?: Maybe<Contact_Customer_Contact_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Contact_Customer_Max_Fields = {
  __typename?: 'contact_customer_max_fields';
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
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.customer" */
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
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Customer_Min_Fields = {
  __typename?: 'contact_customer_min_fields';
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
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.customer" */
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
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact.customer" */
export type Contact_Customer_Mutation_Response = {
  __typename?: 'contact_customer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Customer>;
};

/** input type for inserting object relation for remote table "contact.customer" */
export type Contact_Customer_Obj_Rel_Insert_Input = {
  data: Contact_Customer_Insert_Input;
  on_conflict?: Maybe<Contact_Customer_On_Conflict>;
};

/** on conflict condition type for table "contact.customer" */
export type Contact_Customer_On_Conflict = {
  constraint: Contact_Customer_Constraint;
  update_columns: Array<Contact_Customer_Update_Column>;
  where?: Maybe<Contact_Customer_Bool_Exp>;
};

/** ordering options when selecting data from "contact.customer" */
export type Contact_Customer_Order_By = {
  FAX?: Maybe<Order_By>;
  ICE?: Maybe<Order_By>;
  IF?: Maybe<Order_By>;
  addresses_aggregate?: Maybe<Contact_Customer_Addresses_View_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contacts_aggregate?: Maybe<Contact_Customer_Contacts_View_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  customer_addresses_aggregate?: Maybe<Contact_Customer_Address_Aggregate_Order_By>;
  customer_contacts_aggregate?: Maybe<Contact_Customer_Contact_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.customer" */
export type Contact_Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.customer" */
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
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "contact.customer" */
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
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** update columns of table "contact.customer" */
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
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website'
}

/** columns and relationships of "contact.provider" */
export type Contact_Provider = {
  __typename?: 'contact_provider';
  FAX?: Maybe<Scalars['String']>;
  /** An array relationship */
  addresses: Array<Contact_Provider_Addresses_View>;
  /** An aggregated array relationship */
  addresses_aggregate: Contact_Provider_Addresses_View_Aggregate;
  code?: Maybe<Scalars['String']>;
  /** An array relationship */
  contacts: Array<Contact_Provider_Contacts_View>;
  /** An aggregated array relationship */
  contacts_aggregate: Contact_Provider_Contacts_View_Aggregate;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  mail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  /** An array relationship */
  provider_addresses: Array<Contact_Provider_Address>;
  /** An aggregated array relationship */
  provider_addresses_aggregate: Contact_Provider_Address_Aggregate;
  /** An array relationship */
  provider_contacts: Array<Contact_Provider_Contact>;
  /** An aggregated array relationship */
  provider_contacts_aggregate: Contact_Provider_Contact_Aggregate;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderAddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderProvider_AddressesArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderProvider_Addresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Address_Order_By>>;
  where?: Maybe<Contact_Provider_Address_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderProvider_ContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};


/** columns and relationships of "contact.provider" */
export type Contact_ProviderProvider_Contacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contact_Order_By>>;
  where?: Maybe<Contact_Provider_Contact_Bool_Exp>;
};

/** columns and relationships of "contact.provider_address" */
export type Contact_Provider_Address = {
  __typename?: 'contact_provider_address';
  /** An object relationship */
  address: Contact_Address;
  addressid: Scalars['uuid'];
  /** An object relationship */
  provider: Contact_Provider;
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
  _and?: Maybe<Array<Maybe<Contact_Provider_Address_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Address_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Address_Bool_Exp>>>;
  address?: Maybe<Contact_Address_Bool_Exp>;
  addressid?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Contact_Provider_Bool_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.provider_address" */
export enum Contact_Provider_Address_Constraint {
  /** unique or primary key constraint */
  ProviderAddressPkey = 'provider_address_pkey'
}

/** input type for inserting data into table "contact.provider_address" */
export type Contact_Provider_Address_Insert_Input = {
  address?: Maybe<Contact_Address_Obj_Rel_Insert_Input>;
  addressid?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Contact_Provider_Obj_Rel_Insert_Input>;
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
  address?: Maybe<Contact_Address_Order_By>;
  addressid?: Maybe<Order_By>;
  provider?: Maybe<Contact_Provider_Order_By>;
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

/** columns and relationships of "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View = {
  __typename?: 'contact_provider_addresses_view';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Aggregate = {
  __typename?: 'contact_provider_addresses_view_aggregate';
  aggregate?: Maybe<Contact_Provider_Addresses_View_Aggregate_Fields>;
  nodes: Array<Contact_Provider_Addresses_View>;
};

/** aggregate fields of "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Aggregate_Fields = {
  __typename?: 'contact_provider_addresses_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Addresses_View_Max_Fields>;
  min?: Maybe<Contact_Provider_Addresses_View_Min_Fields>;
};


/** aggregate fields of "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Addresses_View_Max_Order_By>;
  min?: Maybe<Contact_Provider_Addresses_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.provider_addresses_view". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Addresses_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Provider_Addresses_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Addresses_View_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contact_Provider_Addresses_View_Max_Fields = {
  __typename?: 'contact_provider_addresses_view_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Provider_Addresses_View_Min_Fields = {
  __typename?: 'contact_provider_addresses_view_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  providerid?: Maybe<Scalars['uuid']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** ordering options when selecting data from "contact.provider_addresses_view" */
export type Contact_Provider_Addresses_View_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** select columns of table "contact.provider_addresses_view" */
export enum Contact_Provider_Addresses_View_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  Providerid = 'providerid',
  /** column name */
  Zip = 'zip'
}

/** aggregated selection of "contact.provider" */
export type Contact_Provider_Aggregate = {
  __typename?: 'contact_provider_aggregate';
  aggregate?: Maybe<Contact_Provider_Aggregate_Fields>;
  nodes: Array<Contact_Provider>;
};

/** aggregate fields of "contact.provider" */
export type Contact_Provider_Aggregate_Fields = {
  __typename?: 'contact_provider_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Max_Fields>;
  min?: Maybe<Contact_Provider_Min_Fields>;
};


/** aggregate fields of "contact.provider" */
export type Contact_Provider_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.provider" */
export type Contact_Provider_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Max_Order_By>;
  min?: Maybe<Contact_Provider_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact.provider" */
export type Contact_Provider_Arr_Rel_Insert_Input = {
  data: Array<Contact_Provider_Insert_Input>;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact.provider". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Bool_Exp = {
  FAX?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Contact_Provider_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Bool_Exp>>>;
  addresses?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contacts?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  provider_addresses?: Maybe<Contact_Provider_Address_Bool_Exp>;
  provider_contacts?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.provider" */
export enum Contact_Provider_Constraint {
  /** unique or primary key constraint */
  ProviderCodeKey = 'Provider_code_key',
  /** unique or primary key constraint */
  ProviderIdKey = 'Provider_id_key',
  /** unique or primary key constraint */
  ProviderNameKey = 'Provider_name_key',
  /** unique or primary key constraint */
  ProviderPhoneKey = 'Provider_phone_key',
  /** unique or primary key constraint */
  ProviderPkey = 'Provider_pkey'
}

/** columns and relationships of "contact.provider_contact" */
export type Contact_Provider_Contact = {
  __typename?: 'contact_provider_contact';
  /** An object relationship */
  contact: Contact_Contact;
  contactid: Scalars['uuid'];
  /** An object relationship */
  provider: Contact_Provider;
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
  _and?: Maybe<Array<Maybe<Contact_Provider_Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Contact_Bool_Exp>>>;
  contact?: Maybe<Contact_Contact_Bool_Exp>;
  contactid?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Contact_Provider_Bool_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact.provider_contact" */
export enum Contact_Provider_Contact_Constraint {
  /** unique or primary key constraint */
  ProviderContactPkey = 'provider_contact_pkey'
}

/** input type for inserting data into table "contact.provider_contact" */
export type Contact_Provider_Contact_Insert_Input = {
  contact?: Maybe<Contact_Contact_Obj_Rel_Insert_Input>;
  contactid?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Contact_Provider_Obj_Rel_Insert_Input>;
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
  contact?: Maybe<Contact_Contact_Order_By>;
  contactid?: Maybe<Order_By>;
  provider?: Maybe<Contact_Provider_Order_By>;
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

/** columns and relationships of "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View = {
  __typename?: 'contact_provider_contacts_view';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  providerid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Aggregate = {
  __typename?: 'contact_provider_contacts_view_aggregate';
  aggregate?: Maybe<Contact_Provider_Contacts_View_Aggregate_Fields>;
  nodes: Array<Contact_Provider_Contacts_View>;
};

/** aggregate fields of "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Aggregate_Fields = {
  __typename?: 'contact_provider_contacts_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Provider_Contacts_View_Max_Fields>;
  min?: Maybe<Contact_Provider_Contacts_View_Min_Fields>;
};


/** aggregate fields of "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Provider_Contacts_View_Max_Order_By>;
  min?: Maybe<Contact_Provider_Contacts_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contact.provider_contacts_view". All fields are combined with a logical 'AND'. */
export type Contact_Provider_Contacts_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Provider_Contacts_View_Bool_Exp>>>;
  _not?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Provider_Contacts_View_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mail?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  providerid?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contact_Provider_Contacts_View_Max_Fields = {
  __typename?: 'contact_provider_contacts_view_max_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  providerid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Provider_Contacts_View_Min_Fields = {
  __typename?: 'contact_provider_contacts_view_min_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  providerid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** ordering options when selecting data from "contact.provider_contacts_view" */
export type Contact_Provider_Contacts_View_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  providerid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** select columns of table "contact.provider_contacts_view" */
export enum Contact_Provider_Contacts_View_Select_Column {
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
  Providerid = 'providerid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for inserting data into table "contact.provider" */
export type Contact_Provider_Insert_Input = {
  FAX?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  provider_addresses?: Maybe<Contact_Provider_Address_Arr_Rel_Insert_Input>;
  provider_contacts?: Maybe<Contact_Provider_Contact_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Contact_Provider_Max_Fields = {
  __typename?: 'contact_provider_max_fields';
  FAX?: Maybe<Scalars['String']>;
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

/** order by max() on columns of table "contact.provider" */
export type Contact_Provider_Max_Order_By = {
  FAX?: Maybe<Order_By>;
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
export type Contact_Provider_Min_Fields = {
  __typename?: 'contact_provider_min_fields';
  FAX?: Maybe<Scalars['String']>;
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

/** order by min() on columns of table "contact.provider" */
export type Contact_Provider_Min_Order_By = {
  FAX?: Maybe<Order_By>;
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

/** response of any mutation on the table "contact.provider" */
export type Contact_Provider_Mutation_Response = {
  __typename?: 'contact_provider_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact_Provider>;
};

/** input type for inserting object relation for remote table "contact.provider" */
export type Contact_Provider_Obj_Rel_Insert_Input = {
  data: Contact_Provider_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
};

/** on conflict condition type for table "contact.provider" */
export type Contact_Provider_On_Conflict = {
  constraint: Contact_Provider_Constraint;
  update_columns: Array<Contact_Provider_Update_Column>;
  where?: Maybe<Contact_Provider_Bool_Exp>;
};

/** ordering options when selecting data from "contact.provider" */
export type Contact_Provider_Order_By = {
  FAX?: Maybe<Order_By>;
  addresses_aggregate?: Maybe<Contact_Provider_Addresses_View_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contacts_aggregate?: Maybe<Contact_Provider_Contacts_View_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mail?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  provider_addresses_aggregate?: Maybe<Contact_Provider_Address_Aggregate_Order_By>;
  provider_contacts_aggregate?: Maybe<Contact_Provider_Contact_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact.provider" */
export type Contact_Provider_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact.provider" */
export enum Contact_Provider_Select_Column {
  /** column name */
  Fax = 'FAX',
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

/** input type for updating data in table "contact.provider" */
export type Contact_Provider_Set_Input = {
  FAX?: Maybe<Scalars['String']>;
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

/** update columns of table "contact.provider" */
export enum Contact_Provider_Update_Column {
  /** column name */
  Fax = 'FAX',
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


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "management.company" */
export type Management_Company = {
  __typename?: 'management_company';
  CNSS: Scalars['String'];
  ICE: Scalars['String'];
  IF: Scalars['String'];
  RC: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "management.company" */
export type Management_Company_Aggregate = {
  __typename?: 'management_company_aggregate';
  aggregate?: Maybe<Management_Company_Aggregate_Fields>;
  nodes: Array<Management_Company>;
};

/** aggregate fields of "management.company" */
export type Management_Company_Aggregate_Fields = {
  __typename?: 'management_company_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_Company_Max_Fields>;
  min?: Maybe<Management_Company_Min_Fields>;
};


/** aggregate fields of "management.company" */
export type Management_Company_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_Company_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.company" */
export type Management_Company_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_Company_Max_Order_By>;
  min?: Maybe<Management_Company_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.company" */
export type Management_Company_Arr_Rel_Insert_Input = {
  data: Array<Management_Company_Insert_Input>;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.company". All fields are combined with a logical 'AND'. */
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
  createdBy?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "management.company" */
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

/** input type for inserting data into table "management.company" */
export type Management_Company_Insert_Input = {
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Management_Company_Max_Fields = {
  __typename?: 'management_company_max_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "management.company" */
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
  __typename?: 'management_company_min_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "management.company" */
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

/** response of any mutation on the table "management.company" */
export type Management_Company_Mutation_Response = {
  __typename?: 'management_company_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_Company>;
};

/** input type for inserting object relation for remote table "management.company" */
export type Management_Company_Obj_Rel_Insert_Input = {
  data: Management_Company_Insert_Input;
  on_conflict?: Maybe<Management_Company_On_Conflict>;
};

/** on conflict condition type for table "management.company" */
export type Management_Company_On_Conflict = {
  constraint: Management_Company_Constraint;
  update_columns: Array<Management_Company_Update_Column>;
  where?: Maybe<Management_Company_Bool_Exp>;
};

/** ordering options when selecting data from "management.company" */
export type Management_Company_Order_By = {
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

/** primary key columns input for table: "management.company" */
export type Management_Company_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.company" */
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

/** input type for updating data in table "management.company" */
export type Management_Company_Set_Input = {
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** update columns of table "management.company" */
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

/** columns and relationships of "management.salesPoint" */
export type Management_SalesPoint = {
  __typename?: 'management_salesPoint';
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


/** columns and relationships of "management.salesPoint" */
export type Management_SalesPointUsersProfilesArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** columns and relationships of "management.salesPoint" */
export type Management_SalesPointUsersProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** aggregated selection of "management.salesPoint" */
export type Management_SalesPoint_Aggregate = {
  __typename?: 'management_salesPoint_aggregate';
  aggregate?: Maybe<Management_SalesPoint_Aggregate_Fields>;
  nodes: Array<Management_SalesPoint>;
};

/** aggregate fields of "management.salesPoint" */
export type Management_SalesPoint_Aggregate_Fields = {
  __typename?: 'management_salesPoint_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Management_SalesPoint_Max_Fields>;
  min?: Maybe<Management_SalesPoint_Min_Fields>;
};


/** aggregate fields of "management.salesPoint" */
export type Management_SalesPoint_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Management_SalesPoint_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "management.salesPoint" */
export type Management_SalesPoint_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Management_SalesPoint_Max_Order_By>;
  min?: Maybe<Management_SalesPoint_Min_Order_By>;
};

/** input type for inserting array relation for remote table "management.salesPoint" */
export type Management_SalesPoint_Arr_Rel_Insert_Input = {
  data: Array<Management_SalesPoint_Insert_Input>;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** Boolean expression to filter rows from the table "management.salesPoint". All fields are combined with a logical 'AND'. */
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

/** unique or primary key constraints on table "management.salesPoint" */
export enum Management_SalesPoint_Constraint {
  /** unique or primary key constraint */
  SalesPointAddressKey = 'SalesPoint_address_key',
  /** unique or primary key constraint */
  SalesPointNameKey = 'SalesPoint_name_key',
  /** unique or primary key constraint */
  SalesPointPkey = 'SalesPoint_pkey'
}

/** input type for inserting data into table "management.salesPoint" */
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
  __typename?: 'management_salesPoint_max_fields';
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

/** order by max() on columns of table "management.salesPoint" */
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
  __typename?: 'management_salesPoint_min_fields';
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

/** order by min() on columns of table "management.salesPoint" */
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

/** response of any mutation on the table "management.salesPoint" */
export type Management_SalesPoint_Mutation_Response = {
  __typename?: 'management_salesPoint_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Management_SalesPoint>;
};

/** input type for inserting object relation for remote table "management.salesPoint" */
export type Management_SalesPoint_Obj_Rel_Insert_Input = {
  data: Management_SalesPoint_Insert_Input;
  on_conflict?: Maybe<Management_SalesPoint_On_Conflict>;
};

/** on conflict condition type for table "management.salesPoint" */
export type Management_SalesPoint_On_Conflict = {
  constraint: Management_SalesPoint_Constraint;
  update_columns: Array<Management_SalesPoint_Update_Column>;
  where?: Maybe<Management_SalesPoint_Bool_Exp>;
};

/** ordering options when selecting data from "management.salesPoint" */
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

/** primary key columns input for table: "management.salesPoint" */
export type Management_SalesPoint_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "management.salesPoint" */
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

/** input type for updating data in table "management.salesPoint" */
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

/** update columns of table "management.salesPoint" */
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
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
  phone?: Maybe<Scalars['String']>;
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
  id?: Maybe<String_Comparison_Exp>;
  joinUs?: Maybe<Date_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  leftUs?: Maybe<Date_Comparison_Exp>;
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
  id?: Maybe<Scalars['String']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
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
  id?: Maybe<Scalars['String']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
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
  id?: Maybe<Scalars['String']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
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
  phone?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  user_role?: Maybe<Management_User_Role_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "management.userProfile" */
export type Management_UserProfile_Pk_Columns_Input = {
  id: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
  joinUs?: Maybe<Scalars['date']>;
  lastname?: Maybe<Scalars['String']>;
  leftUs?: Maybe<Scalars['date']>;
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
  userProfiles: Array<Management_UserProfile>;
  /** An aggregated array relationship */
  userProfiles_aggregate: Management_UserProfile_Aggregate;
};


/** columns and relationships of "management.user_role" */
export type Management_User_RoleUserProfilesArgs = {
  distinct_on?: Maybe<Array<Management_UserProfile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Management_UserProfile_Order_By>>;
  where?: Maybe<Management_UserProfile_Bool_Exp>;
};


/** columns and relationships of "management.user_role" */
export type Management_User_RoleUserProfiles_AggregateArgs = {
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
  userProfiles?: Maybe<Management_UserProfile_Bool_Exp>;
};

/** unique or primary key constraints on table "management.user_role" */
export enum Management_User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

export enum Management_User_Role_Enum {
  /** admin description */
  Admin = 'admin',
  /** user des */
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
  userProfiles?: Maybe<Management_UserProfile_Arr_Rel_Insert_Input>;
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
  userProfiles_aggregate?: Maybe<Management_UserProfile_Aggregate_Order_By>;
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
  /** delete data from the table: "contact.address" */
  delete_contact_address?: Maybe<Contact_Address_Mutation_Response>;
  /** delete single row from the table: "contact.address" */
  delete_contact_address_by_pk?: Maybe<Contact_Address>;
  /** delete data from the table: "contact.contact" */
  delete_contact_contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** delete data from the table: "contact.contact_address" */
  delete_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** delete single row from the table: "contact.contact_address" */
  delete_contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** delete single row from the table: "contact.contact" */
  delete_contact_contact_by_pk?: Maybe<Contact_Contact>;
  /** delete data from the table: "contact.customer" */
  delete_contact_customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** delete data from the table: "contact.customer_address" */
  delete_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** delete single row from the table: "contact.customer_address" */
  delete_contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** delete single row from the table: "contact.customer" */
  delete_contact_customer_by_pk?: Maybe<Contact_Customer>;
  /** delete data from the table: "contact.customer_contact" */
  delete_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** delete single row from the table: "contact.customer_contact" */
  delete_contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** delete data from the table: "contact.provider" */
  delete_contact_provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** delete data from the table: "contact.provider_address" */
  delete_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** delete single row from the table: "contact.provider_address" */
  delete_contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** delete single row from the table: "contact.provider" */
  delete_contact_provider_by_pk?: Maybe<Contact_Provider>;
  /** delete data from the table: "contact.provider_contact" */
  delete_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** delete single row from the table: "contact.provider_contact" */
  delete_contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** delete data from the table: "management.company" */
  delete_management_company?: Maybe<Management_Company_Mutation_Response>;
  /** delete single row from the table: "management.company" */
  delete_management_company_by_pk?: Maybe<Management_Company>;
  /** delete data from the table: "management.salesPoint" */
  delete_management_salesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** delete single row from the table: "management.salesPoint" */
  delete_management_salesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** delete data from the table: "management.userProfile" */
  delete_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** delete single row from the table: "management.userProfile" */
  delete_management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** delete data from the table: "management.user_role" */
  delete_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** delete single row from the table: "management.user_role" */
  delete_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** delete data from the table: "product.accessory" */
  delete_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** delete data from the table: "product.accessoryTypes" */
  delete_product_accessoryTypes?: Maybe<Product_AccessoryTypes_Mutation_Response>;
  /** delete single row from the table: "product.accessoryTypes" */
  delete_product_accessoryTypes_by_pk?: Maybe<Product_AccessoryTypes>;
  /** delete single row from the table: "product.accessory" */
  delete_product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** delete data from the table: "product.consumable" */
  delete_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
  /** delete data from the table: "product.consumableCategory" */
  delete_product_consumableCategory?: Maybe<Product_ConsumableCategory_Mutation_Response>;
  /** delete single row from the table: "product.consumableCategory" */
  delete_product_consumableCategory_by_pk?: Maybe<Product_ConsumableCategory>;
  /** delete single row from the table: "product.consumable" */
  delete_product_consumable_by_pk?: Maybe<Product_Consumable>;
  /** delete data from the table: "product.glass" */
  delete_product_glass?: Maybe<Product_Glass_Mutation_Response>;
  /** delete single row from the table: "product.glass" */
  delete_product_glass_by_pk?: Maybe<Product_Glass>;
  /** delete data from the table: "product.optionalServiceParam" */
  delete_product_optionalServiceParam?: Maybe<Product_OptionalServiceParam_Mutation_Response>;
  /** delete data from the table: "product.optionalServiceParamValues" */
  delete_product_optionalServiceParamValues?: Maybe<Product_OptionalServiceParamValues_Mutation_Response>;
  /** delete single row from the table: "product.optionalServiceParamValues" */
  delete_product_optionalServiceParamValues_by_pk?: Maybe<Product_OptionalServiceParamValues>;
  /** delete single row from the table: "product.optionalServiceParam" */
  delete_product_optionalServiceParam_by_pk?: Maybe<Product_OptionalServiceParam>;
  /** delete data from the table: "product.product" */
  delete_product_product?: Maybe<Product_Product_Mutation_Response>;
  /** delete single row from the table: "product.product" */
  delete_product_product_by_pk?: Maybe<Product_Product>;
  /** delete data from the table: "product.product_companies" */
  delete_product_product_companies?: Maybe<Product_Product_Companies_Mutation_Response>;
  /** delete single row from the table: "product.product_companies" */
  delete_product_product_companies_by_pk?: Maybe<Product_Product_Companies>;
  /** delete data from the table: "product.product_unit" */
  delete_product_product_unit?: Maybe<Product_Product_Unit_Mutation_Response>;
  /** delete single row from the table: "product.product_unit" */
  delete_product_product_unit_by_pk?: Maybe<Product_Product_Unit>;
  /** delete data from the table: "product.service" */
  delete_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** delete data from the table: "product.serviceConfig" */
  delete_product_serviceConfig?: Maybe<Product_ServiceConfig_Mutation_Response>;
  /** delete single row from the table: "product.serviceConfig" */
  delete_product_serviceConfig_by_pk?: Maybe<Product_ServiceConfig>;
  /** delete data from the table: "product.service_consumable" */
  delete_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** delete single row from the table: "product.service_consumable" */
  delete_product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** delete data from the table: "product.substance" */
  delete_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** delete single row from the table: "product.substance" */
  delete_product_substance_by_pk?: Maybe<Product_Substance>;
  /** delete data from the table: "stock.item_tranfer" */
  delete_stock_item_tranfer?: Maybe<Stock_Item_Tranfer_Mutation_Response>;
  /** delete single row from the table: "stock.item_tranfer" */
  delete_stock_item_tranfer_by_pk?: Maybe<Stock_Item_Tranfer>;
  /** delete data from the table: "stock.tranfer_order_item" */
  delete_stock_tranfer_order_item?: Maybe<Stock_Tranfer_Order_Item_Mutation_Response>;
  /** delete single row from the table: "stock.tranfer_order_item" */
  delete_stock_tranfer_order_item_by_pk?: Maybe<Stock_Tranfer_Order_Item>;
  /** delete data from the table: "stock.transfer_order" */
  delete_stock_transfer_order?: Maybe<Stock_Transfer_Order_Mutation_Response>;
  /** delete single row from the table: "stock.transfer_order" */
  delete_stock_transfer_order_by_pk?: Maybe<Stock_Transfer_Order>;
  /** delete data from the table: "stock.warehouse" */
  delete_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** delete single row from the table: "stock.warehouse" */
  delete_stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
  /** delete data from the table: "stock.warehouse_subsctance" */
  delete_stock_warehouse_subsctance?: Maybe<Stock_Warehouse_Subsctance_Mutation_Response>;
  /** delete single row from the table: "stock.warehouse_subsctance" */
  delete_stock_warehouse_subsctance_by_pk?: Maybe<Stock_Warehouse_Subsctance>;
  /** insert data into the table: "contact.address" */
  insert_contact_address?: Maybe<Contact_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.address" */
  insert_contact_address_one?: Maybe<Contact_Address>;
  /** insert data into the table: "contact.contact" */
  insert_contact_contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** insert data into the table: "contact.contact_address" */
  insert_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.contact_address" */
  insert_contact_contact_address_one?: Maybe<Contact_Contact_Address>;
  /** insert a single row into the table: "contact.contact" */
  insert_contact_contact_one?: Maybe<Contact_Contact>;
  /** insert data into the table: "contact.customer" */
  insert_contact_customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** insert data into the table: "contact.customer_address" */
  insert_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.customer_address" */
  insert_contact_customer_address_one?: Maybe<Contact_Customer_Address>;
  /** insert data into the table: "contact.customer_contact" */
  insert_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** insert a single row into the table: "contact.customer_contact" */
  insert_contact_customer_contact_one?: Maybe<Contact_Customer_Contact>;
  /** insert a single row into the table: "contact.customer" */
  insert_contact_customer_one?: Maybe<Contact_Customer>;
  /** insert data into the table: "contact.provider" */
  insert_contact_provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** insert data into the table: "contact.provider_address" */
  insert_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** insert a single row into the table: "contact.provider_address" */
  insert_contact_provider_address_one?: Maybe<Contact_Provider_Address>;
  /** insert data into the table: "contact.provider_contact" */
  insert_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** insert a single row into the table: "contact.provider_contact" */
  insert_contact_provider_contact_one?: Maybe<Contact_Provider_Contact>;
  /** insert a single row into the table: "contact.provider" */
  insert_contact_provider_one?: Maybe<Contact_Provider>;
  /** insert data into the table: "management.company" */
  insert_management_company?: Maybe<Management_Company_Mutation_Response>;
  /** insert a single row into the table: "management.company" */
  insert_management_company_one?: Maybe<Management_Company>;
  /** insert data into the table: "management.salesPoint" */
  insert_management_salesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** insert a single row into the table: "management.salesPoint" */
  insert_management_salesPoint_one?: Maybe<Management_SalesPoint>;
  /** insert data into the table: "management.userProfile" */
  insert_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** insert a single row into the table: "management.userProfile" */
  insert_management_userProfile_one?: Maybe<Management_UserProfile>;
  /** insert data into the table: "management.user_role" */
  insert_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** insert a single row into the table: "management.user_role" */
  insert_management_user_role_one?: Maybe<Management_User_Role>;
  /** insert data into the table: "product.accessory" */
  insert_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** insert data into the table: "product.accessoryTypes" */
  insert_product_accessoryTypes?: Maybe<Product_AccessoryTypes_Mutation_Response>;
  /** insert a single row into the table: "product.accessoryTypes" */
  insert_product_accessoryTypes_one?: Maybe<Product_AccessoryTypes>;
  /** insert a single row into the table: "product.accessory" */
  insert_product_accessory_one?: Maybe<Product_Accessory>;
  /** insert data into the table: "product.consumable" */
  insert_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
  /** insert data into the table: "product.consumableCategory" */
  insert_product_consumableCategory?: Maybe<Product_ConsumableCategory_Mutation_Response>;
  /** insert a single row into the table: "product.consumableCategory" */
  insert_product_consumableCategory_one?: Maybe<Product_ConsumableCategory>;
  /** insert a single row into the table: "product.consumable" */
  insert_product_consumable_one?: Maybe<Product_Consumable>;
  /** insert data into the table: "product.glass" */
  insert_product_glass?: Maybe<Product_Glass_Mutation_Response>;
  /** insert a single row into the table: "product.glass" */
  insert_product_glass_one?: Maybe<Product_Glass>;
  /** insert data into the table: "product.optionalServiceParam" */
  insert_product_optionalServiceParam?: Maybe<Product_OptionalServiceParam_Mutation_Response>;
  /** insert data into the table: "product.optionalServiceParamValues" */
  insert_product_optionalServiceParamValues?: Maybe<Product_OptionalServiceParamValues_Mutation_Response>;
  /** insert a single row into the table: "product.optionalServiceParamValues" */
  insert_product_optionalServiceParamValues_one?: Maybe<Product_OptionalServiceParamValues>;
  /** insert a single row into the table: "product.optionalServiceParam" */
  insert_product_optionalServiceParam_one?: Maybe<Product_OptionalServiceParam>;
  /** insert data into the table: "product.product" */
  insert_product_product?: Maybe<Product_Product_Mutation_Response>;
  /** insert data into the table: "product.product_companies" */
  insert_product_product_companies?: Maybe<Product_Product_Companies_Mutation_Response>;
  /** insert a single row into the table: "product.product_companies" */
  insert_product_product_companies_one?: Maybe<Product_Product_Companies>;
  /** insert a single row into the table: "product.product" */
  insert_product_product_one?: Maybe<Product_Product>;
  /** insert data into the table: "product.product_unit" */
  insert_product_product_unit?: Maybe<Product_Product_Unit_Mutation_Response>;
  /** insert a single row into the table: "product.product_unit" */
  insert_product_product_unit_one?: Maybe<Product_Product_Unit>;
  /** insert data into the table: "product.service" */
  insert_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** insert data into the table: "product.serviceConfig" */
  insert_product_serviceConfig?: Maybe<Product_ServiceConfig_Mutation_Response>;
  /** insert a single row into the table: "product.serviceConfig" */
  insert_product_serviceConfig_one?: Maybe<Product_ServiceConfig>;
  /** insert data into the table: "product.service_consumable" */
  insert_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** insert a single row into the table: "product.service_consumable" */
  insert_product_service_consumable_one?: Maybe<Product_Service_Consumable>;
  /** insert a single row into the table: "product.service" */
  insert_product_service_one?: Maybe<Product_Service>;
  /** insert data into the table: "product.substance" */
  insert_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** insert a single row into the table: "product.substance" */
  insert_product_substance_one?: Maybe<Product_Substance>;
  /** insert data into the table: "stock.item_tranfer" */
  insert_stock_item_tranfer?: Maybe<Stock_Item_Tranfer_Mutation_Response>;
  /** insert a single row into the table: "stock.item_tranfer" */
  insert_stock_item_tranfer_one?: Maybe<Stock_Item_Tranfer>;
  /** insert data into the table: "stock.tranfer_order_item" */
  insert_stock_tranfer_order_item?: Maybe<Stock_Tranfer_Order_Item_Mutation_Response>;
  /** insert a single row into the table: "stock.tranfer_order_item" */
  insert_stock_tranfer_order_item_one?: Maybe<Stock_Tranfer_Order_Item>;
  /** insert data into the table: "stock.transfer_order" */
  insert_stock_transfer_order?: Maybe<Stock_Transfer_Order_Mutation_Response>;
  /** insert a single row into the table: "stock.transfer_order" */
  insert_stock_transfer_order_one?: Maybe<Stock_Transfer_Order>;
  /** insert data into the table: "stock.warehouse" */
  insert_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "stock.warehouse" */
  insert_stock_warehouse_one?: Maybe<Stock_Warehouse>;
  /** insert data into the table: "stock.warehouse_subsctance" */
  insert_stock_warehouse_subsctance?: Maybe<Stock_Warehouse_Subsctance_Mutation_Response>;
  /** insert a single row into the table: "stock.warehouse_subsctance" */
  insert_stock_warehouse_subsctance_one?: Maybe<Stock_Warehouse_Subsctance>;
  /** perform the action: "login" */
  login?: Maybe<LoginOutput>;
  /** update data of the table: "contact.address" */
  update_contact_address?: Maybe<Contact_Address_Mutation_Response>;
  /** update single row of the table: "contact.address" */
  update_contact_address_by_pk?: Maybe<Contact_Address>;
  /** update data of the table: "contact.contact" */
  update_contact_contact?: Maybe<Contact_Contact_Mutation_Response>;
  /** update data of the table: "contact.contact_address" */
  update_contact_contact_address?: Maybe<Contact_Contact_Address_Mutation_Response>;
  /** update single row of the table: "contact.contact_address" */
  update_contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** update single row of the table: "contact.contact" */
  update_contact_contact_by_pk?: Maybe<Contact_Contact>;
  /** update data of the table: "contact.customer" */
  update_contact_customer?: Maybe<Contact_Customer_Mutation_Response>;
  /** update data of the table: "contact.customer_address" */
  update_contact_customer_address?: Maybe<Contact_Customer_Address_Mutation_Response>;
  /** update single row of the table: "contact.customer_address" */
  update_contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** update single row of the table: "contact.customer" */
  update_contact_customer_by_pk?: Maybe<Contact_Customer>;
  /** update data of the table: "contact.customer_contact" */
  update_contact_customer_contact?: Maybe<Contact_Customer_Contact_Mutation_Response>;
  /** update single row of the table: "contact.customer_contact" */
  update_contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** update data of the table: "contact.provider" */
  update_contact_provider?: Maybe<Contact_Provider_Mutation_Response>;
  /** update data of the table: "contact.provider_address" */
  update_contact_provider_address?: Maybe<Contact_Provider_Address_Mutation_Response>;
  /** update single row of the table: "contact.provider_address" */
  update_contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** update single row of the table: "contact.provider" */
  update_contact_provider_by_pk?: Maybe<Contact_Provider>;
  /** update data of the table: "contact.provider_contact" */
  update_contact_provider_contact?: Maybe<Contact_Provider_Contact_Mutation_Response>;
  /** update single row of the table: "contact.provider_contact" */
  update_contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** update data of the table: "management.company" */
  update_management_company?: Maybe<Management_Company_Mutation_Response>;
  /** update single row of the table: "management.company" */
  update_management_company_by_pk?: Maybe<Management_Company>;
  /** update data of the table: "management.salesPoint" */
  update_management_salesPoint?: Maybe<Management_SalesPoint_Mutation_Response>;
  /** update single row of the table: "management.salesPoint" */
  update_management_salesPoint_by_pk?: Maybe<Management_SalesPoint>;
  /** update data of the table: "management.userProfile" */
  update_management_userProfile?: Maybe<Management_UserProfile_Mutation_Response>;
  /** update single row of the table: "management.userProfile" */
  update_management_userProfile_by_pk?: Maybe<Management_UserProfile>;
  /** update data of the table: "management.user_role" */
  update_management_user_role?: Maybe<Management_User_Role_Mutation_Response>;
  /** update single row of the table: "management.user_role" */
  update_management_user_role_by_pk?: Maybe<Management_User_Role>;
  /** update data of the table: "product.accessory" */
  update_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** update data of the table: "product.accessoryTypes" */
  update_product_accessoryTypes?: Maybe<Product_AccessoryTypes_Mutation_Response>;
  /** update single row of the table: "product.accessoryTypes" */
  update_product_accessoryTypes_by_pk?: Maybe<Product_AccessoryTypes>;
  /** update single row of the table: "product.accessory" */
  update_product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** update data of the table: "product.consumable" */
  update_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
  /** update data of the table: "product.consumableCategory" */
  update_product_consumableCategory?: Maybe<Product_ConsumableCategory_Mutation_Response>;
  /** update single row of the table: "product.consumableCategory" */
  update_product_consumableCategory_by_pk?: Maybe<Product_ConsumableCategory>;
  /** update single row of the table: "product.consumable" */
  update_product_consumable_by_pk?: Maybe<Product_Consumable>;
  /** update data of the table: "product.glass" */
  update_product_glass?: Maybe<Product_Glass_Mutation_Response>;
  /** update single row of the table: "product.glass" */
  update_product_glass_by_pk?: Maybe<Product_Glass>;
  /** update data of the table: "product.optionalServiceParam" */
  update_product_optionalServiceParam?: Maybe<Product_OptionalServiceParam_Mutation_Response>;
  /** update data of the table: "product.optionalServiceParamValues" */
  update_product_optionalServiceParamValues?: Maybe<Product_OptionalServiceParamValues_Mutation_Response>;
  /** update single row of the table: "product.optionalServiceParamValues" */
  update_product_optionalServiceParamValues_by_pk?: Maybe<Product_OptionalServiceParamValues>;
  /** update single row of the table: "product.optionalServiceParam" */
  update_product_optionalServiceParam_by_pk?: Maybe<Product_OptionalServiceParam>;
  /** update data of the table: "product.product" */
  update_product_product?: Maybe<Product_Product_Mutation_Response>;
  /** update single row of the table: "product.product" */
  update_product_product_by_pk?: Maybe<Product_Product>;
  /** update data of the table: "product.product_companies" */
  update_product_product_companies?: Maybe<Product_Product_Companies_Mutation_Response>;
  /** update single row of the table: "product.product_companies" */
  update_product_product_companies_by_pk?: Maybe<Product_Product_Companies>;
  /** update data of the table: "product.product_unit" */
  update_product_product_unit?: Maybe<Product_Product_Unit_Mutation_Response>;
  /** update single row of the table: "product.product_unit" */
  update_product_product_unit_by_pk?: Maybe<Product_Product_Unit>;
  /** update data of the table: "product.service" */
  update_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** update data of the table: "product.serviceConfig" */
  update_product_serviceConfig?: Maybe<Product_ServiceConfig_Mutation_Response>;
  /** update single row of the table: "product.serviceConfig" */
  update_product_serviceConfig_by_pk?: Maybe<Product_ServiceConfig>;
  /** update data of the table: "product.service_consumable" */
  update_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** update single row of the table: "product.service_consumable" */
  update_product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** update data of the table: "product.substance" */
  update_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** update single row of the table: "product.substance" */
  update_product_substance_by_pk?: Maybe<Product_Substance>;
  /** update data of the table: "stock.item_tranfer" */
  update_stock_item_tranfer?: Maybe<Stock_Item_Tranfer_Mutation_Response>;
  /** update single row of the table: "stock.item_tranfer" */
  update_stock_item_tranfer_by_pk?: Maybe<Stock_Item_Tranfer>;
  /** update data of the table: "stock.tranfer_order_item" */
  update_stock_tranfer_order_item?: Maybe<Stock_Tranfer_Order_Item_Mutation_Response>;
  /** update single row of the table: "stock.tranfer_order_item" */
  update_stock_tranfer_order_item_by_pk?: Maybe<Stock_Tranfer_Order_Item>;
  /** update data of the table: "stock.transfer_order" */
  update_stock_transfer_order?: Maybe<Stock_Transfer_Order_Mutation_Response>;
  /** update single row of the table: "stock.transfer_order" */
  update_stock_transfer_order_by_pk?: Maybe<Stock_Transfer_Order>;
  /** update data of the table: "stock.warehouse" */
  update_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** update single row of the table: "stock.warehouse" */
  update_stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
  /** update data of the table: "stock.warehouse_subsctance" */
  update_stock_warehouse_subsctance?: Maybe<Stock_Warehouse_Subsctance_Mutation_Response>;
  /** update single row of the table: "stock.warehouse_subsctance" */
  update_stock_warehouse_subsctance_by_pk?: Maybe<Stock_Warehouse_Subsctance>;
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
export type Mutation_RootDelete_Contact_Contact_AddressArgs = {
  where: Contact_Contact_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Contact_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  contactid: Scalars['uuid'];
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
export type Mutation_RootDelete_Contact_Customer_AddressArgs = {
  where: Contact_Customer_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_Address_By_PkArgs = {
  addressid: Scalars['uuid'];
  customerid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Customer_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Contact_ProviderArgs = {
  where: Contact_Provider_Bool_Exp;
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
export type Mutation_RootDelete_Contact_Provider_By_PkArgs = {
  id: Scalars['uuid'];
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
  id: Scalars['String'];
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
export type Mutation_RootDelete_Product_AccessoryArgs = {
  where: Product_Accessory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_AccessoryTypesArgs = {
  where: Product_AccessoryTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_AccessoryTypes_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Accessory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ConsumableArgs = {
  where: Product_Consumable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_ConsumableCategoryArgs = {
  where: Product_ConsumableCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_ConsumableCategory_By_PkArgs = {
  category: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Consumable_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_GlassArgs = {
  where: Product_Glass_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Glass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_OptionalServiceParamArgs = {
  where: Product_OptionalServiceParam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_OptionalServiceParamValuesArgs = {
  where: Product_OptionalServiceParamValues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_OptionalServiceParamValues_By_PkArgs = {
  serviceServiceConfigid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_OptionalServiceParam_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ProductArgs = {
  where: Product_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Product_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Product_CompaniesArgs = {
  where: Product_Product_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Product_Companies_By_PkArgs = {
  companyid: Scalars['uuid'];
  productcode: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Product_UnitArgs = {
  where: Product_Product_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Product_Unit_By_PkArgs = {
  unit: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ServiceArgs = {
  where: Product_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_ServiceConfigArgs = {
  where: Product_ServiceConfig_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_ServiceConfig_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Service_ConsumableArgs = {
  where: Product_Service_Consumable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Service_Consumable_By_PkArgs = {
  consumableid: Scalars['uuid'];
  serviceid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SubstanceArgs = {
  where: Product_Substance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Substance_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Item_TranferArgs = {
  where: Stock_Item_Tranfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Item_Tranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Tranfer_Order_ItemArgs = {
  where: Stock_Tranfer_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Tranfer_Order_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Transfer_OrderArgs = {
  where: Stock_Transfer_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Transfer_Order_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_WarehouseArgs = {
  where: Stock_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Warehouse_SubsctanceArgs = {
  where: Stock_Warehouse_Subsctance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Warehouse_Subsctance_By_PkArgs = {
  subsctanceid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
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
export type Mutation_RootInsert_Contact_Provider_OneArgs = {
  object: Contact_Provider_Insert_Input;
  on_conflict?: Maybe<Contact_Provider_On_Conflict>;
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
export type Mutation_RootInsert_Product_AccessoryArgs = {
  objects: Array<Product_Accessory_Insert_Input>;
  on_conflict?: Maybe<Product_Accessory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_AccessoryTypesArgs = {
  objects: Array<Product_AccessoryTypes_Insert_Input>;
  on_conflict?: Maybe<Product_AccessoryTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_AccessoryTypes_OneArgs = {
  object: Product_AccessoryTypes_Insert_Input;
  on_conflict?: Maybe<Product_AccessoryTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Accessory_OneArgs = {
  object: Product_Accessory_Insert_Input;
  on_conflict?: Maybe<Product_Accessory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ConsumableArgs = {
  objects: Array<Product_Consumable_Insert_Input>;
  on_conflict?: Maybe<Product_Consumable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ConsumableCategoryArgs = {
  objects: Array<Product_ConsumableCategory_Insert_Input>;
  on_conflict?: Maybe<Product_ConsumableCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ConsumableCategory_OneArgs = {
  object: Product_ConsumableCategory_Insert_Input;
  on_conflict?: Maybe<Product_ConsumableCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Consumable_OneArgs = {
  object: Product_Consumable_Insert_Input;
  on_conflict?: Maybe<Product_Consumable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_GlassArgs = {
  objects: Array<Product_Glass_Insert_Input>;
  on_conflict?: Maybe<Product_Glass_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Glass_OneArgs = {
  object: Product_Glass_Insert_Input;
  on_conflict?: Maybe<Product_Glass_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OptionalServiceParamArgs = {
  objects: Array<Product_OptionalServiceParam_Insert_Input>;
  on_conflict?: Maybe<Product_OptionalServiceParam_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OptionalServiceParamValuesArgs = {
  objects: Array<Product_OptionalServiceParamValues_Insert_Input>;
  on_conflict?: Maybe<Product_OptionalServiceParamValues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OptionalServiceParamValues_OneArgs = {
  object: Product_OptionalServiceParamValues_Insert_Input;
  on_conflict?: Maybe<Product_OptionalServiceParamValues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OptionalServiceParam_OneArgs = {
  object: Product_OptionalServiceParam_Insert_Input;
  on_conflict?: Maybe<Product_OptionalServiceParam_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ProductArgs = {
  objects: Array<Product_Product_Insert_Input>;
  on_conflict?: Maybe<Product_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Product_CompaniesArgs = {
  objects: Array<Product_Product_Companies_Insert_Input>;
  on_conflict?: Maybe<Product_Product_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Product_Companies_OneArgs = {
  object: Product_Product_Companies_Insert_Input;
  on_conflict?: Maybe<Product_Product_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Product_OneArgs = {
  object: Product_Product_Insert_Input;
  on_conflict?: Maybe<Product_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Product_UnitArgs = {
  objects: Array<Product_Product_Unit_Insert_Input>;
  on_conflict?: Maybe<Product_Product_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Product_Unit_OneArgs = {
  object: Product_Product_Unit_Insert_Input;
  on_conflict?: Maybe<Product_Product_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ServiceArgs = {
  objects: Array<Product_Service_Insert_Input>;
  on_conflict?: Maybe<Product_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ServiceConfigArgs = {
  objects: Array<Product_ServiceConfig_Insert_Input>;
  on_conflict?: Maybe<Product_ServiceConfig_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ServiceConfig_OneArgs = {
  object: Product_ServiceConfig_Insert_Input;
  on_conflict?: Maybe<Product_ServiceConfig_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Service_ConsumableArgs = {
  objects: Array<Product_Service_Consumable_Insert_Input>;
  on_conflict?: Maybe<Product_Service_Consumable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Service_Consumable_OneArgs = {
  object: Product_Service_Consumable_Insert_Input;
  on_conflict?: Maybe<Product_Service_Consumable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Service_OneArgs = {
  object: Product_Service_Insert_Input;
  on_conflict?: Maybe<Product_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SubstanceArgs = {
  objects: Array<Product_Substance_Insert_Input>;
  on_conflict?: Maybe<Product_Substance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Substance_OneArgs = {
  object: Product_Substance_Insert_Input;
  on_conflict?: Maybe<Product_Substance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Item_TranferArgs = {
  objects: Array<Stock_Item_Tranfer_Insert_Input>;
  on_conflict?: Maybe<Stock_Item_Tranfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Item_Tranfer_OneArgs = {
  object: Stock_Item_Tranfer_Insert_Input;
  on_conflict?: Maybe<Stock_Item_Tranfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Tranfer_Order_ItemArgs = {
  objects: Array<Stock_Tranfer_Order_Item_Insert_Input>;
  on_conflict?: Maybe<Stock_Tranfer_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Tranfer_Order_Item_OneArgs = {
  object: Stock_Tranfer_Order_Item_Insert_Input;
  on_conflict?: Maybe<Stock_Tranfer_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Transfer_OrderArgs = {
  objects: Array<Stock_Transfer_Order_Insert_Input>;
  on_conflict?: Maybe<Stock_Transfer_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Transfer_Order_OneArgs = {
  object: Stock_Transfer_Order_Insert_Input;
  on_conflict?: Maybe<Stock_Transfer_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_WarehouseArgs = {
  objects: Array<Stock_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Warehouse_OneArgs = {
  object: Stock_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Warehouse_SubsctanceArgs = {
  objects: Array<Stock_Warehouse_Subsctance_Insert_Input>;
  on_conflict?: Maybe<Stock_Warehouse_Subsctance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Warehouse_Subsctance_OneArgs = {
  object: Stock_Warehouse_Subsctance_Insert_Input;
  on_conflict?: Maybe<Stock_Warehouse_Subsctance_On_Conflict>;
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
export type Mutation_RootUpdate_Contact_Customer_By_PkArgs = {
  _set?: Maybe<Contact_Customer_Set_Input>;
  pk_columns: Contact_Customer_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Contact_ProviderArgs = {
  _set?: Maybe<Contact_Provider_Set_Input>;
  where: Contact_Provider_Bool_Exp;
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
export type Mutation_RootUpdate_Contact_Provider_By_PkArgs = {
  _set?: Maybe<Contact_Provider_Set_Input>;
  pk_columns: Contact_Provider_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Product_AccessoryArgs = {
  _inc?: Maybe<Product_Accessory_Inc_Input>;
  _set?: Maybe<Product_Accessory_Set_Input>;
  where: Product_Accessory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_AccessoryTypesArgs = {
  _set?: Maybe<Product_AccessoryTypes_Set_Input>;
  where: Product_AccessoryTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_AccessoryTypes_By_PkArgs = {
  _set?: Maybe<Product_AccessoryTypes_Set_Input>;
  pk_columns: Product_AccessoryTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Accessory_By_PkArgs = {
  _inc?: Maybe<Product_Accessory_Inc_Input>;
  _set?: Maybe<Product_Accessory_Set_Input>;
  pk_columns: Product_Accessory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ConsumableArgs = {
  _set?: Maybe<Product_Consumable_Set_Input>;
  where: Product_Consumable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ConsumableCategoryArgs = {
  _set?: Maybe<Product_ConsumableCategory_Set_Input>;
  where: Product_ConsumableCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ConsumableCategory_By_PkArgs = {
  _set?: Maybe<Product_ConsumableCategory_Set_Input>;
  pk_columns: Product_ConsumableCategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Consumable_By_PkArgs = {
  _set?: Maybe<Product_Consumable_Set_Input>;
  pk_columns: Product_Consumable_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_GlassArgs = {
  _inc?: Maybe<Product_Glass_Inc_Input>;
  _set?: Maybe<Product_Glass_Set_Input>;
  where: Product_Glass_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Glass_By_PkArgs = {
  _inc?: Maybe<Product_Glass_Inc_Input>;
  _set?: Maybe<Product_Glass_Set_Input>;
  pk_columns: Product_Glass_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OptionalServiceParamArgs = {
  _append?: Maybe<Product_OptionalServiceParam_Append_Input>;
  _delete_at_path?: Maybe<Product_OptionalServiceParam_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Product_OptionalServiceParam_Delete_Elem_Input>;
  _delete_key?: Maybe<Product_OptionalServiceParam_Delete_Key_Input>;
  _prepend?: Maybe<Product_OptionalServiceParam_Prepend_Input>;
  _set?: Maybe<Product_OptionalServiceParam_Set_Input>;
  where: Product_OptionalServiceParam_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OptionalServiceParamValuesArgs = {
  _set?: Maybe<Product_OptionalServiceParamValues_Set_Input>;
  where: Product_OptionalServiceParamValues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OptionalServiceParamValues_By_PkArgs = {
  _set?: Maybe<Product_OptionalServiceParamValues_Set_Input>;
  pk_columns: Product_OptionalServiceParamValues_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OptionalServiceParam_By_PkArgs = {
  _append?: Maybe<Product_OptionalServiceParam_Append_Input>;
  _delete_at_path?: Maybe<Product_OptionalServiceParam_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Product_OptionalServiceParam_Delete_Elem_Input>;
  _delete_key?: Maybe<Product_OptionalServiceParam_Delete_Key_Input>;
  _prepend?: Maybe<Product_OptionalServiceParam_Prepend_Input>;
  _set?: Maybe<Product_OptionalServiceParam_Set_Input>;
  pk_columns: Product_OptionalServiceParam_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ProductArgs = {
  _inc?: Maybe<Product_Product_Inc_Input>;
  _set?: Maybe<Product_Product_Set_Input>;
  where: Product_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Product_By_PkArgs = {
  _inc?: Maybe<Product_Product_Inc_Input>;
  _set?: Maybe<Product_Product_Set_Input>;
  pk_columns: Product_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Product_CompaniesArgs = {
  _set?: Maybe<Product_Product_Companies_Set_Input>;
  where: Product_Product_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Product_Companies_By_PkArgs = {
  _set?: Maybe<Product_Product_Companies_Set_Input>;
  pk_columns: Product_Product_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Product_UnitArgs = {
  _set?: Maybe<Product_Product_Unit_Set_Input>;
  where: Product_Product_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Product_Unit_By_PkArgs = {
  _set?: Maybe<Product_Product_Unit_Set_Input>;
  pk_columns: Product_Product_Unit_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ServiceArgs = {
  _set?: Maybe<Product_Service_Set_Input>;
  where: Product_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ServiceConfigArgs = {
  _set?: Maybe<Product_ServiceConfig_Set_Input>;
  where: Product_ServiceConfig_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ServiceConfig_By_PkArgs = {
  _set?: Maybe<Product_ServiceConfig_Set_Input>;
  pk_columns: Product_ServiceConfig_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Service_ConsumableArgs = {
  _inc?: Maybe<Product_Service_Consumable_Inc_Input>;
  _set?: Maybe<Product_Service_Consumable_Set_Input>;
  where: Product_Service_Consumable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Service_Consumable_By_PkArgs = {
  _inc?: Maybe<Product_Service_Consumable_Inc_Input>;
  _set?: Maybe<Product_Service_Consumable_Set_Input>;
  pk_columns: Product_Service_Consumable_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SubstanceArgs = {
  _inc?: Maybe<Product_Substance_Inc_Input>;
  _set?: Maybe<Product_Substance_Set_Input>;
  where: Product_Substance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Substance_By_PkArgs = {
  _inc?: Maybe<Product_Substance_Inc_Input>;
  _set?: Maybe<Product_Substance_Set_Input>;
  pk_columns: Product_Substance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Item_TranferArgs = {
  _inc?: Maybe<Stock_Item_Tranfer_Inc_Input>;
  _set?: Maybe<Stock_Item_Tranfer_Set_Input>;
  where: Stock_Item_Tranfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Item_Tranfer_By_PkArgs = {
  _inc?: Maybe<Stock_Item_Tranfer_Inc_Input>;
  _set?: Maybe<Stock_Item_Tranfer_Set_Input>;
  pk_columns: Stock_Item_Tranfer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Tranfer_Order_ItemArgs = {
  _inc?: Maybe<Stock_Tranfer_Order_Item_Inc_Input>;
  _set?: Maybe<Stock_Tranfer_Order_Item_Set_Input>;
  where: Stock_Tranfer_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Tranfer_Order_Item_By_PkArgs = {
  _inc?: Maybe<Stock_Tranfer_Order_Item_Inc_Input>;
  _set?: Maybe<Stock_Tranfer_Order_Item_Set_Input>;
  pk_columns: Stock_Tranfer_Order_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Transfer_OrderArgs = {
  _set?: Maybe<Stock_Transfer_Order_Set_Input>;
  where: Stock_Transfer_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Transfer_Order_By_PkArgs = {
  _set?: Maybe<Stock_Transfer_Order_Set_Input>;
  pk_columns: Stock_Transfer_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_WarehouseArgs = {
  _set?: Maybe<Stock_Warehouse_Set_Input>;
  where: Stock_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Warehouse_By_PkArgs = {
  _set?: Maybe<Stock_Warehouse_Set_Input>;
  pk_columns: Stock_Warehouse_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Warehouse_SubsctanceArgs = {
  _inc?: Maybe<Stock_Warehouse_Subsctance_Inc_Input>;
  _set?: Maybe<Stock_Warehouse_Subsctance_Set_Input>;
  where: Stock_Warehouse_Subsctance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Warehouse_Subsctance_By_PkArgs = {
  _inc?: Maybe<Stock_Warehouse_Subsctance_Inc_Input>;
  _set?: Maybe<Stock_Warehouse_Subsctance_Set_Input>;
  pk_columns: Stock_Warehouse_Subsctance_Pk_Columns_Input;
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

/** columns and relationships of "product.accessory" */
export type Product_Accessory = {
  __typename?: 'product_accessory';
  /** An object relationship */
  accessoryType: Product_AccessoryTypes;
  category: Product_AccessoryTypes_Enum;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productcode: Scalars['String'];
  quota?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  substance?: Maybe<Product_Substance>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** columns and relationships of "product.accessoryTypes" */
export type Product_AccessoryTypes = {
  __typename?: 'product_accessoryTypes';
  description: Scalars['String'];
  type: Scalars['String'];
};

/** aggregated selection of "product.accessoryTypes" */
export type Product_AccessoryTypes_Aggregate = {
  __typename?: 'product_accessoryTypes_aggregate';
  aggregate?: Maybe<Product_AccessoryTypes_Aggregate_Fields>;
  nodes: Array<Product_AccessoryTypes>;
};

/** aggregate fields of "product.accessoryTypes" */
export type Product_AccessoryTypes_Aggregate_Fields = {
  __typename?: 'product_accessoryTypes_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_AccessoryTypes_Max_Fields>;
  min?: Maybe<Product_AccessoryTypes_Min_Fields>;
};


/** aggregate fields of "product.accessoryTypes" */
export type Product_AccessoryTypes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_AccessoryTypes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.accessoryTypes" */
export type Product_AccessoryTypes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_AccessoryTypes_Max_Order_By>;
  min?: Maybe<Product_AccessoryTypes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.accessoryTypes" */
export type Product_AccessoryTypes_Arr_Rel_Insert_Input = {
  data: Array<Product_AccessoryTypes_Insert_Input>;
  on_conflict?: Maybe<Product_AccessoryTypes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.accessoryTypes". All fields are combined with a logical 'AND'. */
export type Product_AccessoryTypes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_AccessoryTypes_Bool_Exp>>>;
  _not?: Maybe<Product_AccessoryTypes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_AccessoryTypes_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.accessoryTypes" */
export enum Product_AccessoryTypes_Constraint {
  /** unique or primary key constraint */
  AccessoryTypesPkey = 'accessoryTypes_pkey'
}

export enum Product_AccessoryTypes_Enum {
  Accessoire = 'ACCESSOIRE',
  Apparent = 'APPARENT'
}

/** expression to compare columns of type product_accessoryTypes_enum. All fields are combined with logical 'AND'. */
export type Product_AccessoryTypes_Enum_Comparison_Exp = {
  _eq?: Maybe<Product_AccessoryTypes_Enum>;
  _in?: Maybe<Array<Product_AccessoryTypes_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Product_AccessoryTypes_Enum>;
  _nin?: Maybe<Array<Product_AccessoryTypes_Enum>>;
};

/** input type for inserting data into table "product.accessoryTypes" */
export type Product_AccessoryTypes_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_AccessoryTypes_Max_Fields = {
  __typename?: 'product_accessoryTypes_max_fields';
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.accessoryTypes" */
export type Product_AccessoryTypes_Max_Order_By = {
  description?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_AccessoryTypes_Min_Fields = {
  __typename?: 'product_accessoryTypes_min_fields';
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.accessoryTypes" */
export type Product_AccessoryTypes_Min_Order_By = {
  description?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.accessoryTypes" */
export type Product_AccessoryTypes_Mutation_Response = {
  __typename?: 'product_accessoryTypes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_AccessoryTypes>;
};

/** input type for inserting object relation for remote table "product.accessoryTypes" */
export type Product_AccessoryTypes_Obj_Rel_Insert_Input = {
  data: Product_AccessoryTypes_Insert_Input;
  on_conflict?: Maybe<Product_AccessoryTypes_On_Conflict>;
};

/** on conflict condition type for table "product.accessoryTypes" */
export type Product_AccessoryTypes_On_Conflict = {
  constraint: Product_AccessoryTypes_Constraint;
  update_columns: Array<Product_AccessoryTypes_Update_Column>;
  where?: Maybe<Product_AccessoryTypes_Bool_Exp>;
};

/** ordering options when selecting data from "product.accessoryTypes" */
export type Product_AccessoryTypes_Order_By = {
  description?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.accessoryTypes" */
export type Product_AccessoryTypes_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "product.accessoryTypes" */
export enum Product_AccessoryTypes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "product.accessoryTypes" */
export type Product_AccessoryTypes_Set_Input = {
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "product.accessoryTypes" */
export enum Product_AccessoryTypes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** aggregated selection of "product.accessory" */
export type Product_Accessory_Aggregate = {
  __typename?: 'product_accessory_aggregate';
  aggregate?: Maybe<Product_Accessory_Aggregate_Fields>;
  nodes: Array<Product_Accessory>;
};

/** aggregate fields of "product.accessory" */
export type Product_Accessory_Aggregate_Fields = {
  __typename?: 'product_accessory_aggregate_fields';
  avg?: Maybe<Product_Accessory_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Accessory_Max_Fields>;
  min?: Maybe<Product_Accessory_Min_Fields>;
  stddev?: Maybe<Product_Accessory_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Accessory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Accessory_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Accessory_Sum_Fields>;
  var_pop?: Maybe<Product_Accessory_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Accessory_Var_Samp_Fields>;
  variance?: Maybe<Product_Accessory_Variance_Fields>;
};


/** aggregate fields of "product.accessory" */
export type Product_Accessory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Accessory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.accessory" */
export type Product_Accessory_Aggregate_Order_By = {
  avg?: Maybe<Product_Accessory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Accessory_Max_Order_By>;
  min?: Maybe<Product_Accessory_Min_Order_By>;
  stddev?: Maybe<Product_Accessory_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Accessory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Accessory_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Accessory_Sum_Order_By>;
  var_pop?: Maybe<Product_Accessory_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Accessory_Var_Samp_Order_By>;
  variance?: Maybe<Product_Accessory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.accessory" */
export type Product_Accessory_Arr_Rel_Insert_Input = {
  data: Array<Product_Accessory_Insert_Input>;
  on_conflict?: Maybe<Product_Accessory_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Accessory_Avg_Fields = {
  __typename?: 'product_accessory_avg_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.accessory" */
export type Product_Accessory_Avg_Order_By = {
  quota?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.accessory". All fields are combined with a logical 'AND'. */
export type Product_Accessory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Accessory_Bool_Exp>>>;
  _not?: Maybe<Product_Accessory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Accessory_Bool_Exp>>>;
  accessoryType?: Maybe<Product_AccessoryTypes_Bool_Exp>;
  category?: Maybe<Product_AccessoryTypes_Enum_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
  quota?: Maybe<Numeric_Comparison_Exp>;
  substance?: Maybe<Product_Substance_Bool_Exp>;
  substanceid?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.accessory" */
export enum Product_Accessory_Constraint {
  /** unique or primary key constraint */
  AccessoiresPkey = 'accessoires_pkey',
  /** unique or primary key constraint */
  AccessoryProductCodeKey = 'accessory_productCode_key',
  /** unique or primary key constraint */
  AccessorySubstanceidKey = 'accessory_substanceid_key'
}

/** input type for incrementing integer column in table "product.accessory" */
export type Product_Accessory_Inc_Input = {
  quota?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product.accessory" */
export type Product_Accessory_Insert_Input = {
  accessoryType?: Maybe<Product_AccessoryTypes_Obj_Rel_Insert_Input>;
  category?: Maybe<Product_AccessoryTypes_Enum>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productcode?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['numeric']>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Accessory_Max_Fields = {
  __typename?: 'product_accessory_max_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['numeric']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.accessory" */
export type Product_Accessory_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Accessory_Min_Fields = {
  __typename?: 'product_accessory_min_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['numeric']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.accessory" */
export type Product_Accessory_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.accessory" */
export type Product_Accessory_Mutation_Response = {
  __typename?: 'product_accessory_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Accessory>;
};

/** input type for inserting object relation for remote table "product.accessory" */
export type Product_Accessory_Obj_Rel_Insert_Input = {
  data: Product_Accessory_Insert_Input;
  on_conflict?: Maybe<Product_Accessory_On_Conflict>;
};

/** on conflict condition type for table "product.accessory" */
export type Product_Accessory_On_Conflict = {
  constraint: Product_Accessory_Constraint;
  update_columns: Array<Product_Accessory_Update_Column>;
  where?: Maybe<Product_Accessory_Bool_Exp>;
};

/** ordering options when selecting data from "product.accessory" */
export type Product_Accessory_Order_By = {
  accessoryType?: Maybe<Product_AccessoryTypes_Order_By>;
  category?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productcode?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  substance?: Maybe<Product_Substance_Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.accessory" */
export type Product_Accessory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.accessory" */
export enum Product_Accessory_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Quota = 'quota',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.accessory" */
export type Product_Accessory_Set_Input = {
  category?: Maybe<Product_AccessoryTypes_Enum>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['numeric']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Product_Accessory_Stddev_Fields = {
  __typename?: 'product_accessory_stddev_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.accessory" */
export type Product_Accessory_Stddev_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Accessory_Stddev_Pop_Fields = {
  __typename?: 'product_accessory_stddev_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.accessory" */
export type Product_Accessory_Stddev_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Accessory_Stddev_Samp_Fields = {
  __typename?: 'product_accessory_stddev_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.accessory" */
export type Product_Accessory_Stddev_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Accessory_Sum_Fields = {
  __typename?: 'product_accessory_sum_fields';
  quota?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "product.accessory" */
export type Product_Accessory_Sum_Order_By = {
  quota?: Maybe<Order_By>;
};

/** update columns of table "product.accessory" */
export enum Product_Accessory_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Quota = 'quota',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** aggregate var_pop on columns */
export type Product_Accessory_Var_Pop_Fields = {
  __typename?: 'product_accessory_var_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.accessory" */
export type Product_Accessory_Var_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Accessory_Var_Samp_Fields = {
  __typename?: 'product_accessory_var_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.accessory" */
export type Product_Accessory_Var_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Accessory_Variance_Fields = {
  __typename?: 'product_accessory_variance_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.accessory" */
export type Product_Accessory_Variance_Order_By = {
  quota?: Maybe<Order_By>;
};

/** columns and relationships of "product.consumable" */
export type Product_Consumable = {
  __typename?: 'product_consumable';
  category: Product_ConsumableCategory_Enum;
  /** An object relationship */
  consumableCategory: Product_ConsumableCategory;
  createdAt: Scalars['date'];
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productcode: Scalars['String'];
  /** An array relationship */
  service_consumables: Array<Product_Service_Consumable>;
  /** An aggregated array relationship */
  service_consumables_aggregate: Product_Service_Consumable_Aggregate;
  /** An object relationship */
  substance?: Maybe<Product_Substance>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['date'];
  updatedBy?: Maybe<Scalars['String']>;
};


/** columns and relationships of "product.consumable" */
export type Product_ConsumableService_ConsumablesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.consumable" */
export type Product_ConsumableService_Consumables_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};

/** columns and relationships of "product.consumableCategory" */
export type Product_ConsumableCategory = {
  __typename?: 'product_consumableCategory';
  category: Scalars['String'];
  /** An array relationship */
  consumables: Array<Product_Consumable>;
  /** An aggregated array relationship */
  consumables_aggregate: Product_Consumable_Aggregate;
  description: Scalars['String'];
};


/** columns and relationships of "product.consumableCategory" */
export type Product_ConsumableCategoryConsumablesArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.consumableCategory" */
export type Product_ConsumableCategoryConsumables_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};

/** aggregated selection of "product.consumableCategory" */
export type Product_ConsumableCategory_Aggregate = {
  __typename?: 'product_consumableCategory_aggregate';
  aggregate?: Maybe<Product_ConsumableCategory_Aggregate_Fields>;
  nodes: Array<Product_ConsumableCategory>;
};

/** aggregate fields of "product.consumableCategory" */
export type Product_ConsumableCategory_Aggregate_Fields = {
  __typename?: 'product_consumableCategory_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_ConsumableCategory_Max_Fields>;
  min?: Maybe<Product_ConsumableCategory_Min_Fields>;
};


/** aggregate fields of "product.consumableCategory" */
export type Product_ConsumableCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_ConsumableCategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.consumableCategory" */
export type Product_ConsumableCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_ConsumableCategory_Max_Order_By>;
  min?: Maybe<Product_ConsumableCategory_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.consumableCategory" */
export type Product_ConsumableCategory_Arr_Rel_Insert_Input = {
  data: Array<Product_ConsumableCategory_Insert_Input>;
  on_conflict?: Maybe<Product_ConsumableCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.consumableCategory". All fields are combined with a logical 'AND'. */
export type Product_ConsumableCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_ConsumableCategory_Bool_Exp>>>;
  _not?: Maybe<Product_ConsumableCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_ConsumableCategory_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  consumables?: Maybe<Product_Consumable_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.consumableCategory" */
export enum Product_ConsumableCategory_Constraint {
  /** unique or primary key constraint */
  ConsumableCategoryPkey = 'consumableCategory_pkey'
}

export enum Product_ConsumableCategory_Enum {
  /** Consommable */
  Consommable = 'Consommable'
}

/** expression to compare columns of type product_consumableCategory_enum. All fields are combined with logical 'AND'. */
export type Product_ConsumableCategory_Enum_Comparison_Exp = {
  _eq?: Maybe<Product_ConsumableCategory_Enum>;
  _in?: Maybe<Array<Product_ConsumableCategory_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Product_ConsumableCategory_Enum>;
  _nin?: Maybe<Array<Product_ConsumableCategory_Enum>>;
};

/** input type for inserting data into table "product.consumableCategory" */
export type Product_ConsumableCategory_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  consumables?: Maybe<Product_Consumable_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_ConsumableCategory_Max_Fields = {
  __typename?: 'product_consumableCategory_max_fields';
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.consumableCategory" */
export type Product_ConsumableCategory_Max_Order_By = {
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_ConsumableCategory_Min_Fields = {
  __typename?: 'product_consumableCategory_min_fields';
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.consumableCategory" */
export type Product_ConsumableCategory_Min_Order_By = {
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.consumableCategory" */
export type Product_ConsumableCategory_Mutation_Response = {
  __typename?: 'product_consumableCategory_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_ConsumableCategory>;
};

/** input type for inserting object relation for remote table "product.consumableCategory" */
export type Product_ConsumableCategory_Obj_Rel_Insert_Input = {
  data: Product_ConsumableCategory_Insert_Input;
  on_conflict?: Maybe<Product_ConsumableCategory_On_Conflict>;
};

/** on conflict condition type for table "product.consumableCategory" */
export type Product_ConsumableCategory_On_Conflict = {
  constraint: Product_ConsumableCategory_Constraint;
  update_columns: Array<Product_ConsumableCategory_Update_Column>;
  where?: Maybe<Product_ConsumableCategory_Bool_Exp>;
};

/** ordering options when selecting data from "product.consumableCategory" */
export type Product_ConsumableCategory_Order_By = {
  category?: Maybe<Order_By>;
  consumables_aggregate?: Maybe<Product_Consumable_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.consumableCategory" */
export type Product_ConsumableCategory_Pk_Columns_Input = {
  category: Scalars['String'];
};

/** select columns of table "product.consumableCategory" */
export enum Product_ConsumableCategory_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "product.consumableCategory" */
export type Product_ConsumableCategory_Set_Input = {
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** update columns of table "product.consumableCategory" */
export enum Product_ConsumableCategory_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description'
}

/** aggregated selection of "product.consumable" */
export type Product_Consumable_Aggregate = {
  __typename?: 'product_consumable_aggregate';
  aggregate?: Maybe<Product_Consumable_Aggregate_Fields>;
  nodes: Array<Product_Consumable>;
};

/** aggregate fields of "product.consumable" */
export type Product_Consumable_Aggregate_Fields = {
  __typename?: 'product_consumable_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Consumable_Max_Fields>;
  min?: Maybe<Product_Consumable_Min_Fields>;
};


/** aggregate fields of "product.consumable" */
export type Product_Consumable_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Consumable_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.consumable" */
export type Product_Consumable_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Consumable_Max_Order_By>;
  min?: Maybe<Product_Consumable_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.consumable" */
export type Product_Consumable_Arr_Rel_Insert_Input = {
  data: Array<Product_Consumable_Insert_Input>;
  on_conflict?: Maybe<Product_Consumable_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.consumable". All fields are combined with a logical 'AND'. */
export type Product_Consumable_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Consumable_Bool_Exp>>>;
  _not?: Maybe<Product_Consumable_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Consumable_Bool_Exp>>>;
  category?: Maybe<Product_ConsumableCategory_Enum_Comparison_Exp>;
  consumableCategory?: Maybe<Product_ConsumableCategory_Bool_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
  service_consumables?: Maybe<Product_Service_Consumable_Bool_Exp>;
  substance?: Maybe<Product_Substance_Bool_Exp>;
  substanceid?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.consumable" */
export enum Product_Consumable_Constraint {
  /** unique or primary key constraint */
  ConsumablePkey = 'consumable_pkey',
  /** unique or primary key constraint */
  ConsumableProductCodeKey = 'consumable_productCode_key',
  /** unique or primary key constraint */
  ConsumableSubstanceidKey = 'consumable_substanceid_key'
}

/** input type for inserting data into table "product.consumable" */
export type Product_Consumable_Insert_Input = {
  category?: Maybe<Product_ConsumableCategory_Enum>;
  consumableCategory?: Maybe<Product_ConsumableCategory_Obj_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productcode?: Maybe<Scalars['String']>;
  service_consumables?: Maybe<Product_Service_Consumable_Arr_Rel_Insert_Input>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Consumable_Max_Fields = {
  __typename?: 'product_consumable_max_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.consumable" */
export type Product_Consumable_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Consumable_Min_Fields = {
  __typename?: 'product_consumable_min_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.consumable" */
export type Product_Consumable_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.consumable" */
export type Product_Consumable_Mutation_Response = {
  __typename?: 'product_consumable_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Consumable>;
};

/** input type for inserting object relation for remote table "product.consumable" */
export type Product_Consumable_Obj_Rel_Insert_Input = {
  data: Product_Consumable_Insert_Input;
  on_conflict?: Maybe<Product_Consumable_On_Conflict>;
};

/** on conflict condition type for table "product.consumable" */
export type Product_Consumable_On_Conflict = {
  constraint: Product_Consumable_Constraint;
  update_columns: Array<Product_Consumable_Update_Column>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};

/** ordering options when selecting data from "product.consumable" */
export type Product_Consumable_Order_By = {
  category?: Maybe<Order_By>;
  consumableCategory?: Maybe<Product_ConsumableCategory_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productcode?: Maybe<Order_By>;
  service_consumables_aggregate?: Maybe<Product_Service_Consumable_Aggregate_Order_By>;
  substance?: Maybe<Product_Substance_Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.consumable" */
export type Product_Consumable_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.consumable" */
export enum Product_Consumable_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.consumable" */
export type Product_Consumable_Set_Input = {
  category?: Maybe<Product_ConsumableCategory_Enum>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** update columns of table "product.consumable" */
export enum Product_Consumable_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** columns and relationships of "product.glass" */
export type Product_Glass = {
  __typename?: 'product_glass';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productcode: Scalars['String'];
  /** An object relationship */
  substance?: Maybe<Product_Substance>;
  substanceid?: Maybe<Scalars['uuid']>;
  thickness: Scalars['Int'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "product.glass" */
export type Product_Glass_Aggregate = {
  __typename?: 'product_glass_aggregate';
  aggregate?: Maybe<Product_Glass_Aggregate_Fields>;
  nodes: Array<Product_Glass>;
};

/** aggregate fields of "product.glass" */
export type Product_Glass_Aggregate_Fields = {
  __typename?: 'product_glass_aggregate_fields';
  avg?: Maybe<Product_Glass_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Glass_Max_Fields>;
  min?: Maybe<Product_Glass_Min_Fields>;
  stddev?: Maybe<Product_Glass_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Glass_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Glass_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Glass_Sum_Fields>;
  var_pop?: Maybe<Product_Glass_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Glass_Var_Samp_Fields>;
  variance?: Maybe<Product_Glass_Variance_Fields>;
};


/** aggregate fields of "product.glass" */
export type Product_Glass_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Glass_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.glass" */
export type Product_Glass_Aggregate_Order_By = {
  avg?: Maybe<Product_Glass_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Glass_Max_Order_By>;
  min?: Maybe<Product_Glass_Min_Order_By>;
  stddev?: Maybe<Product_Glass_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Glass_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Glass_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Glass_Sum_Order_By>;
  var_pop?: Maybe<Product_Glass_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Glass_Var_Samp_Order_By>;
  variance?: Maybe<Product_Glass_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.glass" */
export type Product_Glass_Arr_Rel_Insert_Input = {
  data: Array<Product_Glass_Insert_Input>;
  on_conflict?: Maybe<Product_Glass_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Glass_Avg_Fields = {
  __typename?: 'product_glass_avg_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.glass" */
export type Product_Glass_Avg_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.glass". All fields are combined with a logical 'AND'. */
export type Product_Glass_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Glass_Bool_Exp>>>;
  _not?: Maybe<Product_Glass_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Glass_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
  substance?: Maybe<Product_Substance_Bool_Exp>;
  substanceid?: Maybe<Uuid_Comparison_Exp>;
  thickness?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.glass" */
export enum Product_Glass_Constraint {
  /** unique or primary key constraint */
  GlassPkey = 'glass_pkey',
  /** unique or primary key constraint */
  GlassProductCodeKey = 'glass_productCode_key',
  /** unique or primary key constraint */
  GlassSubstanceidKey = 'glass_substanceid_key'
}

/** input type for incrementing integer column in table "product.glass" */
export type Product_Glass_Inc_Input = {
  thickness?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "product.glass" */
export type Product_Glass_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productcode?: Maybe<Scalars['String']>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  substanceid?: Maybe<Scalars['uuid']>;
  thickness?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Glass_Max_Fields = {
  __typename?: 'product_glass_max_fields';
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  thickness?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.glass" */
export type Product_Glass_Max_Order_By = {
  color?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  thickness?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Glass_Min_Fields = {
  __typename?: 'product_glass_min_fields';
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  thickness?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.glass" */
export type Product_Glass_Min_Order_By = {
  color?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  thickness?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.glass" */
export type Product_Glass_Mutation_Response = {
  __typename?: 'product_glass_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Glass>;
};

/** input type for inserting object relation for remote table "product.glass" */
export type Product_Glass_Obj_Rel_Insert_Input = {
  data: Product_Glass_Insert_Input;
  on_conflict?: Maybe<Product_Glass_On_Conflict>;
};

/** on conflict condition type for table "product.glass" */
export type Product_Glass_On_Conflict = {
  constraint: Product_Glass_Constraint;
  update_columns: Array<Product_Glass_Update_Column>;
  where?: Maybe<Product_Glass_Bool_Exp>;
};

/** ordering options when selecting data from "product.glass" */
export type Product_Glass_Order_By = {
  color?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productcode?: Maybe<Order_By>;
  substance?: Maybe<Product_Substance_Order_By>;
  substanceid?: Maybe<Order_By>;
  thickness?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.glass" */
export type Product_Glass_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.glass" */
export enum Product_Glass_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  Thickness = 'thickness',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.glass" */
export type Product_Glass_Set_Input = {
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  thickness?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Glass_Stddev_Fields = {
  __typename?: 'product_glass_stddev_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.glass" */
export type Product_Glass_Stddev_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Glass_Stddev_Pop_Fields = {
  __typename?: 'product_glass_stddev_pop_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.glass" */
export type Product_Glass_Stddev_Pop_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Glass_Stddev_Samp_Fields = {
  __typename?: 'product_glass_stddev_samp_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.glass" */
export type Product_Glass_Stddev_Samp_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Glass_Sum_Fields = {
  __typename?: 'product_glass_sum_fields';
  thickness?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "product.glass" */
export type Product_Glass_Sum_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** update columns of table "product.glass" */
export enum Product_Glass_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Productcode = 'productcode',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  Thickness = 'thickness',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** aggregate var_pop on columns */
export type Product_Glass_Var_Pop_Fields = {
  __typename?: 'product_glass_var_pop_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.glass" */
export type Product_Glass_Var_Pop_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Glass_Var_Samp_Fields = {
  __typename?: 'product_glass_var_samp_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.glass" */
export type Product_Glass_Var_Samp_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Glass_Variance_Fields = {
  __typename?: 'product_glass_variance_fields';
  thickness?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.glass" */
export type Product_Glass_Variance_Order_By = {
  thickness?: Maybe<Order_By>;
};

/** columns and relationships of "product.optionalServiceParam" */
export type Product_OptionalServiceParam = {
  __typename?: 'product_optionalServiceParam';
  id: Scalars['uuid'];
  param?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  serviceConfig: Product_ServiceConfig;
  serviceid: Scalars['uuid'];
};


/** columns and relationships of "product.optionalServiceParam" */
export type Product_OptionalServiceParamParamArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues = {
  __typename?: 'product_optionalServiceParamValues';
  /** An object relationship */
  service?: Maybe<Product_Service>;
  serviceServiceConfigid: Scalars['uuid'];
  values: Scalars['String'];
};

/** aggregated selection of "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Aggregate = {
  __typename?: 'product_optionalServiceParamValues_aggregate';
  aggregate?: Maybe<Product_OptionalServiceParamValues_Aggregate_Fields>;
  nodes: Array<Product_OptionalServiceParamValues>;
};

/** aggregate fields of "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Aggregate_Fields = {
  __typename?: 'product_optionalServiceParamValues_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_OptionalServiceParamValues_Max_Fields>;
  min?: Maybe<Product_OptionalServiceParamValues_Min_Fields>;
};


/** aggregate fields of "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_OptionalServiceParamValues_Max_Order_By>;
  min?: Maybe<Product_OptionalServiceParamValues_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Arr_Rel_Insert_Input = {
  data: Array<Product_OptionalServiceParamValues_Insert_Input>;
  on_conflict?: Maybe<Product_OptionalServiceParamValues_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.optionalServiceParamValues". All fields are combined with a logical 'AND'. */
export type Product_OptionalServiceParamValues_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_OptionalServiceParamValues_Bool_Exp>>>;
  _not?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_OptionalServiceParamValues_Bool_Exp>>>;
  service?: Maybe<Product_Service_Bool_Exp>;
  serviceServiceConfigid?: Maybe<Uuid_Comparison_Exp>;
  values?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Constraint {
  /** unique or primary key constraint */
  OptionalServiceParamValuesPkey = 'optionalServiceParamValues_pkey'
}

/** input type for inserting data into table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Insert_Input = {
  service?: Maybe<Product_Service_Obj_Rel_Insert_Input>;
  serviceServiceConfigid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_OptionalServiceParamValues_Max_Fields = {
  __typename?: 'product_optionalServiceParamValues_max_fields';
  serviceServiceConfigid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Max_Order_By = {
  serviceServiceConfigid?: Maybe<Order_By>;
  values?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_OptionalServiceParamValues_Min_Fields = {
  __typename?: 'product_optionalServiceParamValues_min_fields';
  serviceServiceConfigid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Min_Order_By = {
  serviceServiceConfigid?: Maybe<Order_By>;
  values?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Mutation_Response = {
  __typename?: 'product_optionalServiceParamValues_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_OptionalServiceParamValues>;
};

/** input type for inserting object relation for remote table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Obj_Rel_Insert_Input = {
  data: Product_OptionalServiceParamValues_Insert_Input;
  on_conflict?: Maybe<Product_OptionalServiceParamValues_On_Conflict>;
};

/** on conflict condition type for table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_On_Conflict = {
  constraint: Product_OptionalServiceParamValues_Constraint;
  update_columns: Array<Product_OptionalServiceParamValues_Update_Column>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};

/** ordering options when selecting data from "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Order_By = {
  service?: Maybe<Product_Service_Order_By>;
  serviceServiceConfigid?: Maybe<Order_By>;
  values?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Pk_Columns_Input = {
  serviceServiceConfigid: Scalars['uuid'];
};

/** select columns of table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Select_Column {
  /** column name */
  ServiceServiceConfigid = 'serviceServiceConfigid',
  /** column name */
  Values = 'values'
}

/** input type for updating data in table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Set_Input = {
  serviceServiceConfigid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** update columns of table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Update_Column {
  /** column name */
  ServiceServiceConfigid = 'serviceServiceConfigid',
  /** column name */
  Values = 'values'
}

/** aggregated selection of "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Aggregate = {
  __typename?: 'product_optionalServiceParam_aggregate';
  aggregate?: Maybe<Product_OptionalServiceParam_Aggregate_Fields>;
  nodes: Array<Product_OptionalServiceParam>;
};

/** aggregate fields of "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Aggregate_Fields = {
  __typename?: 'product_optionalServiceParam_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_OptionalServiceParam_Max_Fields>;
  min?: Maybe<Product_OptionalServiceParam_Min_Fields>;
};


/** aggregate fields of "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_OptionalServiceParam_Max_Order_By>;
  min?: Maybe<Product_OptionalServiceParam_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Product_OptionalServiceParam_Append_Input = {
  param?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Arr_Rel_Insert_Input = {
  data: Array<Product_OptionalServiceParam_Insert_Input>;
  on_conflict?: Maybe<Product_OptionalServiceParam_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.optionalServiceParam". All fields are combined with a logical 'AND'. */
export type Product_OptionalServiceParam_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_OptionalServiceParam_Bool_Exp>>>;
  _not?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_OptionalServiceParam_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  param?: Maybe<Jsonb_Comparison_Exp>;
  serviceConfig?: Maybe<Product_ServiceConfig_Bool_Exp>;
  serviceid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.optionalServiceParam" */
export enum Product_OptionalServiceParam_Constraint {
  /** unique or primary key constraint */
  OptionalServiceParamPkey = 'optionalServiceParam_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Product_OptionalServiceParam_Delete_At_Path_Input = {
  param?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Product_OptionalServiceParam_Delete_Elem_Input = {
  param?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Product_OptionalServiceParam_Delete_Key_Input = {
  param?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  param?: Maybe<Scalars['jsonb']>;
  serviceConfig?: Maybe<Product_ServiceConfig_Obj_Rel_Insert_Input>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_OptionalServiceParam_Max_Fields = {
  __typename?: 'product_optionalServiceParam_max_fields';
  id?: Maybe<Scalars['uuid']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Max_Order_By = {
  id?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_OptionalServiceParam_Min_Fields = {
  __typename?: 'product_optionalServiceParam_min_fields';
  id?: Maybe<Scalars['uuid']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Min_Order_By = {
  id?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Mutation_Response = {
  __typename?: 'product_optionalServiceParam_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_OptionalServiceParam>;
};

/** input type for inserting object relation for remote table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Obj_Rel_Insert_Input = {
  data: Product_OptionalServiceParam_Insert_Input;
  on_conflict?: Maybe<Product_OptionalServiceParam_On_Conflict>;
};

/** on conflict condition type for table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_On_Conflict = {
  constraint: Product_OptionalServiceParam_Constraint;
  update_columns: Array<Product_OptionalServiceParam_Update_Column>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};

/** ordering options when selecting data from "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Order_By = {
  id?: Maybe<Order_By>;
  param?: Maybe<Order_By>;
  serviceConfig?: Maybe<Product_ServiceConfig_Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Product_OptionalServiceParam_Prepend_Input = {
  param?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "product.optionalServiceParam" */
export enum Product_OptionalServiceParam_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Param = 'param',
  /** column name */
  Serviceid = 'serviceid'
}

/** input type for updating data in table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  param?: Maybe<Scalars['jsonb']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product.optionalServiceParam" */
export enum Product_OptionalServiceParam_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Param = 'param',
  /** column name */
  Serviceid = 'serviceid'
}

/** columns and relationships of "product.product" */
export type Product_Product = {
  __typename?: 'product_product';
  /** An object relationship */
  accessory?: Maybe<Product_Accessory>;
  code: Scalars['String'];
  /** An array relationship */
  companies: Array<Product_Product_Companies_View>;
  /** An aggregated array relationship */
  companies_aggregate: Product_Product_Companies_View_Aggregate;
  /** An object relationship */
  consumable?: Maybe<Product_Consumable>;
  /** An object relationship */
  glass?: Maybe<Product_Glass>;
  label: Scalars['String'];
  price: Scalars['Float'];
  priceMax: Scalars['Float'];
  priceMin: Scalars['Float'];
  /** An array relationship */
  product_companies: Array<Product_Product_Companies>;
  /** An aggregated array relationship */
  product_companies_aggregate: Product_Product_Companies_Aggregate;
  /** An object relationship */
  product_unit: Product_Product_Unit;
  /** An object relationship */
  service?: Maybe<Product_Service>;
  unit: Product_Product_Unit_Enum;
};


/** columns and relationships of "product.product" */
export type Product_ProductCompaniesArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** columns and relationships of "product.product" */
export type Product_ProductCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** columns and relationships of "product.product" */
export type Product_ProductProduct_CompaniesArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};


/** columns and relationships of "product.product" */
export type Product_ProductProduct_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};

/** aggregated selection of "product.product" */
export type Product_Product_Aggregate = {
  __typename?: 'product_product_aggregate';
  aggregate?: Maybe<Product_Product_Aggregate_Fields>;
  nodes: Array<Product_Product>;
};

/** aggregate fields of "product.product" */
export type Product_Product_Aggregate_Fields = {
  __typename?: 'product_product_aggregate_fields';
  avg?: Maybe<Product_Product_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Product_Max_Fields>;
  min?: Maybe<Product_Product_Min_Fields>;
  stddev?: Maybe<Product_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Product_Sum_Fields>;
  var_pop?: Maybe<Product_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Product_Variance_Fields>;
};


/** aggregate fields of "product.product" */
export type Product_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.product" */
export type Product_Product_Aggregate_Order_By = {
  avg?: Maybe<Product_Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Product_Max_Order_By>;
  min?: Maybe<Product_Product_Min_Order_By>;
  stddev?: Maybe<Product_Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Product_Sum_Order_By>;
  var_pop?: Maybe<Product_Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Product_Var_Samp_Order_By>;
  variance?: Maybe<Product_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.product" */
export type Product_Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Product_Insert_Input>;
  on_conflict?: Maybe<Product_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Product_Avg_Fields = {
  __typename?: 'product_product_avg_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.product" */
export type Product_Product_Avg_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.product". All fields are combined with a logical 'AND'. */
export type Product_Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Product_Bool_Exp>>>;
  _not?: Maybe<Product_Product_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Product_Bool_Exp>>>;
  accessory?: Maybe<Product_Accessory_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  companies?: Maybe<Product_Product_Companies_View_Bool_Exp>;
  consumable?: Maybe<Product_Consumable_Bool_Exp>;
  glass?: Maybe<Product_Glass_Bool_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Float_Comparison_Exp>;
  priceMax?: Maybe<Float_Comparison_Exp>;
  priceMin?: Maybe<Float_Comparison_Exp>;
  product_companies?: Maybe<Product_Product_Companies_Bool_Exp>;
  product_unit?: Maybe<Product_Product_Unit_Bool_Exp>;
  service?: Maybe<Product_Service_Bool_Exp>;
  unit?: Maybe<Product_Product_Unit_Enum_Comparison_Exp>;
};

/** columns and relationships of "product.product_companies" */
export type Product_Product_Companies = {
  __typename?: 'product_product_companies';
  /** An object relationship */
  Company: Management_Company;
  companyid: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productcode: Scalars['String'];
};

/** aggregated selection of "product.product_companies" */
export type Product_Product_Companies_Aggregate = {
  __typename?: 'product_product_companies_aggregate';
  aggregate?: Maybe<Product_Product_Companies_Aggregate_Fields>;
  nodes: Array<Product_Product_Companies>;
};

/** aggregate fields of "product.product_companies" */
export type Product_Product_Companies_Aggregate_Fields = {
  __typename?: 'product_product_companies_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Product_Companies_Max_Fields>;
  min?: Maybe<Product_Product_Companies_Min_Fields>;
};


/** aggregate fields of "product.product_companies" */
export type Product_Product_Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.product_companies" */
export type Product_Product_Companies_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Product_Companies_Max_Order_By>;
  min?: Maybe<Product_Product_Companies_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.product_companies" */
export type Product_Product_Companies_Arr_Rel_Insert_Input = {
  data: Array<Product_Product_Companies_Insert_Input>;
  on_conflict?: Maybe<Product_Product_Companies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.product_companies". All fields are combined with a logical 'AND'. */
export type Product_Product_Companies_Bool_Exp = {
  Company?: Maybe<Management_Company_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Product_Product_Companies_Bool_Exp>>>;
  _not?: Maybe<Product_Product_Companies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Product_Companies_Bool_Exp>>>;
  companyid?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.product_companies" */
export enum Product_Product_Companies_Constraint {
  /** unique or primary key constraint */
  ProductCompaniesPkey = 'product_companies_pkey'
}

/** input type for inserting data into table "product.product_companies" */
export type Product_Product_Companies_Insert_Input = {
  Company?: Maybe<Management_Company_Obj_Rel_Insert_Input>;
  companyid?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productcode?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Product_Companies_Max_Fields = {
  __typename?: 'product_product_companies_max_fields';
  companyid?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.product_companies" */
export type Product_Product_Companies_Max_Order_By = {
  companyid?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Product_Companies_Min_Fields = {
  __typename?: 'product_product_companies_min_fields';
  companyid?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.product_companies" */
export type Product_Product_Companies_Min_Order_By = {
  companyid?: Maybe<Order_By>;
  productcode?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.product_companies" */
export type Product_Product_Companies_Mutation_Response = {
  __typename?: 'product_product_companies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Product_Companies>;
};

/** input type for inserting object relation for remote table "product.product_companies" */
export type Product_Product_Companies_Obj_Rel_Insert_Input = {
  data: Product_Product_Companies_Insert_Input;
  on_conflict?: Maybe<Product_Product_Companies_On_Conflict>;
};

/** on conflict condition type for table "product.product_companies" */
export type Product_Product_Companies_On_Conflict = {
  constraint: Product_Product_Companies_Constraint;
  update_columns: Array<Product_Product_Companies_Update_Column>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};

/** ordering options when selecting data from "product.product_companies" */
export type Product_Product_Companies_Order_By = {
  Company?: Maybe<Management_Company_Order_By>;
  companyid?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productcode?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.product_companies" */
export type Product_Product_Companies_Pk_Columns_Input = {
  companyid: Scalars['uuid'];
  productcode: Scalars['String'];
};

/** select columns of table "product.product_companies" */
export enum Product_Product_Companies_Select_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  Productcode = 'productcode'
}

/** input type for updating data in table "product.product_companies" */
export type Product_Product_Companies_Set_Input = {
  companyid?: Maybe<Scalars['uuid']>;
  productcode?: Maybe<Scalars['String']>;
};

/** update columns of table "product.product_companies" */
export enum Product_Product_Companies_Update_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  Productcode = 'productcode'
}

/** columns and relationships of "product.product_companies_view" */
export type Product_Product_Companies_View = {
  __typename?: 'product_product_companies_view';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  productcode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "product.product_companies_view" */
export type Product_Product_Companies_View_Aggregate = {
  __typename?: 'product_product_companies_view_aggregate';
  aggregate?: Maybe<Product_Product_Companies_View_Aggregate_Fields>;
  nodes: Array<Product_Product_Companies_View>;
};

/** aggregate fields of "product.product_companies_view" */
export type Product_Product_Companies_View_Aggregate_Fields = {
  __typename?: 'product_product_companies_view_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Product_Companies_View_Max_Fields>;
  min?: Maybe<Product_Product_Companies_View_Min_Fields>;
};


/** aggregate fields of "product.product_companies_view" */
export type Product_Product_Companies_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.product_companies_view" */
export type Product_Product_Companies_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Product_Companies_View_Max_Order_By>;
  min?: Maybe<Product_Product_Companies_View_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "product.product_companies_view". All fields are combined with a logical 'AND'. */
export type Product_Product_Companies_View_Bool_Exp = {
  CNSS?: Maybe<String_Comparison_Exp>;
  ICE?: Maybe<String_Comparison_Exp>;
  IF?: Maybe<String_Comparison_Exp>;
  RC?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Product_Product_Companies_View_Bool_Exp>>>;
  _not?: Maybe<Product_Product_Companies_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Product_Companies_View_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Product_Product_Companies_View_Max_Fields = {
  __typename?: 'product_product_companies_view_max_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  productcode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.product_companies_view" */
export type Product_Product_Companies_View_Max_Order_By = {
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
  productcode?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Product_Companies_View_Min_Fields = {
  __typename?: 'product_product_companies_view_min_fields';
  CNSS?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  RC?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  productcode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  updatedBy?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.product_companies_view" */
export type Product_Product_Companies_View_Min_Order_By = {
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
  productcode?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** ordering options when selecting data from "product.product_companies_view" */
export type Product_Product_Companies_View_Order_By = {
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
  productcode?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** select columns of table "product.product_companies_view" */
export enum Product_Product_Companies_View_Select_Column {
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
  Productcode = 'productcode',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Website = 'website'
}

/** unique or primary key constraints on table "product.product" */
export enum Product_Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing integer column in table "product.product" */
export type Product_Product_Inc_Input = {
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "product.product" */
export type Product_Product_Insert_Input = {
  accessory?: Maybe<Product_Accessory_Obj_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  consumable?: Maybe<Product_Consumable_Obj_Rel_Insert_Input>;
  glass?: Maybe<Product_Glass_Obj_Rel_Insert_Input>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
  product_companies?: Maybe<Product_Product_Companies_Arr_Rel_Insert_Input>;
  product_unit?: Maybe<Product_Product_Unit_Obj_Rel_Insert_Input>;
  service?: Maybe<Product_Service_Obj_Rel_Insert_Input>;
  unit?: Maybe<Product_Product_Unit_Enum>;
};

/** aggregate max on columns */
export type Product_Product_Max_Fields = {
  __typename?: 'product_product_max_fields';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by max() on columns of table "product.product" */
export type Product_Product_Max_Order_By = {
  code?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Product_Min_Fields = {
  __typename?: 'product_product_min_fields';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by min() on columns of table "product.product" */
export type Product_Product_Min_Order_By = {
  code?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.product" */
export type Product_Product_Mutation_Response = {
  __typename?: 'product_product_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Product>;
};

/** input type for inserting object relation for remote table "product.product" */
export type Product_Product_Obj_Rel_Insert_Input = {
  data: Product_Product_Insert_Input;
  on_conflict?: Maybe<Product_Product_On_Conflict>;
};

/** on conflict condition type for table "product.product" */
export type Product_Product_On_Conflict = {
  constraint: Product_Product_Constraint;
  update_columns: Array<Product_Product_Update_Column>;
  where?: Maybe<Product_Product_Bool_Exp>;
};

/** ordering options when selecting data from "product.product" */
export type Product_Product_Order_By = {
  accessory?: Maybe<Product_Accessory_Order_By>;
  code?: Maybe<Order_By>;
  companies_aggregate?: Maybe<Product_Product_Companies_View_Aggregate_Order_By>;
  consumable?: Maybe<Product_Consumable_Order_By>;
  glass?: Maybe<Product_Glass_Order_By>;
  label?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
  product_companies_aggregate?: Maybe<Product_Product_Companies_Aggregate_Order_By>;
  product_unit?: Maybe<Product_Product_Unit_Order_By>;
  service?: Maybe<Product_Service_Order_By>;
  unit?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.product" */
export type Product_Product_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "product.product" */
export enum Product_Product_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Label = 'label',
  /** column name */
  Price = 'price',
  /** column name */
  PriceMax = 'priceMax',
  /** column name */
  PriceMin = 'priceMin',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "product.product" */
export type Product_Product_Set_Input = {
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
  unit?: Maybe<Product_Product_Unit_Enum>;
};

/** aggregate stddev on columns */
export type Product_Product_Stddev_Fields = {
  __typename?: 'product_product_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.product" */
export type Product_Product_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Product_Stddev_Pop_Fields = {
  __typename?: 'product_product_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.product" */
export type Product_Product_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Product_Stddev_Samp_Fields = {
  __typename?: 'product_product_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.product" */
export type Product_Product_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Product_Sum_Fields = {
  __typename?: 'product_product_sum_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "product.product" */
export type Product_Product_Sum_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** columns and relationships of "product.product_unit" */
export type Product_Product_Unit = {
  __typename?: 'product_product_unit';
  description: Scalars['String'];
  /** An array relationship */
  products: Array<Product_Product>;
  /** An aggregated array relationship */
  products_aggregate: Product_Product_Aggregate;
  unit: Scalars['String'];
};


/** columns and relationships of "product.product_unit" */
export type Product_Product_UnitProductsArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};


/** columns and relationships of "product.product_unit" */
export type Product_Product_UnitProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};

/** aggregated selection of "product.product_unit" */
export type Product_Product_Unit_Aggregate = {
  __typename?: 'product_product_unit_aggregate';
  aggregate?: Maybe<Product_Product_Unit_Aggregate_Fields>;
  nodes: Array<Product_Product_Unit>;
};

/** aggregate fields of "product.product_unit" */
export type Product_Product_Unit_Aggregate_Fields = {
  __typename?: 'product_product_unit_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Product_Unit_Max_Fields>;
  min?: Maybe<Product_Product_Unit_Min_Fields>;
};


/** aggregate fields of "product.product_unit" */
export type Product_Product_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Product_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.product_unit" */
export type Product_Product_Unit_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Product_Unit_Max_Order_By>;
  min?: Maybe<Product_Product_Unit_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.product_unit" */
export type Product_Product_Unit_Arr_Rel_Insert_Input = {
  data: Array<Product_Product_Unit_Insert_Input>;
  on_conflict?: Maybe<Product_Product_Unit_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.product_unit". All fields are combined with a logical 'AND'. */
export type Product_Product_Unit_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Product_Unit_Bool_Exp>>>;
  _not?: Maybe<Product_Product_Unit_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Product_Unit_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Product_Product_Bool_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.product_unit" */
export enum Product_Product_Unit_Constraint {
  /** unique or primary key constraint */
  ProductUnitPkey = 'product_unit_pkey'
}

export enum Product_Product_Unit_Enum {
  /** Mettre Carré */
  M2 = 'm2'
}

/** expression to compare columns of type product_product_unit_enum. All fields are combined with logical 'AND'. */
export type Product_Product_Unit_Enum_Comparison_Exp = {
  _eq?: Maybe<Product_Product_Unit_Enum>;
  _in?: Maybe<Array<Product_Product_Unit_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Product_Product_Unit_Enum>;
  _nin?: Maybe<Array<Product_Product_Unit_Enum>>;
};

/** input type for inserting data into table "product.product_unit" */
export type Product_Product_Unit_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Product_Product_Arr_Rel_Insert_Input>;
  unit?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Product_Unit_Max_Fields = {
  __typename?: 'product_product_unit_max_fields';
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.product_unit" */
export type Product_Product_Unit_Max_Order_By = {
  description?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Product_Unit_Min_Fields = {
  __typename?: 'product_product_unit_min_fields';
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.product_unit" */
export type Product_Product_Unit_Min_Order_By = {
  description?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.product_unit" */
export type Product_Product_Unit_Mutation_Response = {
  __typename?: 'product_product_unit_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Product_Unit>;
};

/** input type for inserting object relation for remote table "product.product_unit" */
export type Product_Product_Unit_Obj_Rel_Insert_Input = {
  data: Product_Product_Unit_Insert_Input;
  on_conflict?: Maybe<Product_Product_Unit_On_Conflict>;
};

/** on conflict condition type for table "product.product_unit" */
export type Product_Product_Unit_On_Conflict = {
  constraint: Product_Product_Unit_Constraint;
  update_columns: Array<Product_Product_Unit_Update_Column>;
  where?: Maybe<Product_Product_Unit_Bool_Exp>;
};

/** ordering options when selecting data from "product.product_unit" */
export type Product_Product_Unit_Order_By = {
  description?: Maybe<Order_By>;
  products_aggregate?: Maybe<Product_Product_Aggregate_Order_By>;
  unit?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.product_unit" */
export type Product_Product_Unit_Pk_Columns_Input = {
  unit: Scalars['String'];
};

/** select columns of table "product.product_unit" */
export enum Product_Product_Unit_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "product.product_unit" */
export type Product_Product_Unit_Set_Input = {
  description?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** update columns of table "product.product_unit" */
export enum Product_Product_Unit_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Unit = 'unit'
}

/** update columns of table "product.product" */
export enum Product_Product_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Label = 'label',
  /** column name */
  Price = 'price',
  /** column name */
  PriceMax = 'priceMax',
  /** column name */
  PriceMin = 'priceMin',
  /** column name */
  Unit = 'unit'
}

/** aggregate var_pop on columns */
export type Product_Product_Var_Pop_Fields = {
  __typename?: 'product_product_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.product" */
export type Product_Product_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Product_Var_Samp_Fields = {
  __typename?: 'product_product_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.product" */
export type Product_Product_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Product_Variance_Fields = {
  __typename?: 'product_product_variance_fields';
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.product" */
export type Product_Product_Variance_Order_By = {
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
};

/** columns and relationships of "product.service" */
export type Product_Service = {
  __typename?: 'product_service';
  /** An array relationship */
  paramsValues: Array<Product_OptionalServiceParamValues>;
  /** An aggregated array relationship */
  paramsValues_aggregate: Product_OptionalServiceParamValues_Aggregate;
  /** An object relationship */
  product: Product_Product;
  productcode: Scalars['String'];
  /** An object relationship */
  serviceConfig?: Maybe<Product_ServiceConfig>;
  serviceConfigid: Scalars['uuid'];
};


/** columns and relationships of "product.service" */
export type Product_ServiceParamsValuesArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceParamsValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};

/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfig = {
  __typename?: 'product_serviceConfig';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  labelFactory: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  optionalServiceParams: Array<Product_OptionalServiceParam>;
  /** An aggregated array relationship */
  optionalServiceParams_aggregate: Product_OptionalServiceParam_Aggregate;
  /** An array relationship */
  service_consumables: Array<Product_Service_Consumable>;
  /** An aggregated array relationship */
  service_consumables_aggregate: Product_Service_Consumable_Aggregate;
  /** An array relationship */
  services: Array<Product_Service>;
  /** An aggregated array relationship */
  services_aggregate: Product_Service_Aggregate;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigOptionalServiceParamsArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigOptionalServiceParams_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigService_ConsumablesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigService_Consumables_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigServicesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** columns and relationships of "product.serviceConfig" */
export type Product_ServiceConfigServices_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};

/** aggregated selection of "product.serviceConfig" */
export type Product_ServiceConfig_Aggregate = {
  __typename?: 'product_serviceConfig_aggregate';
  aggregate?: Maybe<Product_ServiceConfig_Aggregate_Fields>;
  nodes: Array<Product_ServiceConfig>;
};

/** aggregate fields of "product.serviceConfig" */
export type Product_ServiceConfig_Aggregate_Fields = {
  __typename?: 'product_serviceConfig_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_ServiceConfig_Max_Fields>;
  min?: Maybe<Product_ServiceConfig_Min_Fields>;
};


/** aggregate fields of "product.serviceConfig" */
export type Product_ServiceConfig_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_ServiceConfig_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.serviceConfig" */
export type Product_ServiceConfig_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_ServiceConfig_Max_Order_By>;
  min?: Maybe<Product_ServiceConfig_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.serviceConfig" */
export type Product_ServiceConfig_Arr_Rel_Insert_Input = {
  data: Array<Product_ServiceConfig_Insert_Input>;
  on_conflict?: Maybe<Product_ServiceConfig_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.serviceConfig". All fields are combined with a logical 'AND'. */
export type Product_ServiceConfig_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_ServiceConfig_Bool_Exp>>>;
  _not?: Maybe<Product_ServiceConfig_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_ServiceConfig_Bool_Exp>>>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  labelFactory?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  optionalServiceParams?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
  service_consumables?: Maybe<Product_Service_Consumable_Bool_Exp>;
  services?: Maybe<Product_Service_Bool_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.serviceConfig" */
export enum Product_ServiceConfig_Constraint {
  /** unique or primary key constraint */
  ServicePkey = 'service_pkey'
}

/** input type for inserting data into table "product.serviceConfig" */
export type Product_ServiceConfig_Insert_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  optionalServiceParams?: Maybe<Product_OptionalServiceParam_Arr_Rel_Insert_Input>;
  service_consumables?: Maybe<Product_Service_Consumable_Arr_Rel_Insert_Input>;
  services?: Maybe<Product_Service_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_ServiceConfig_Max_Fields = {
  __typename?: 'product_serviceConfig_max_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.serviceConfig" */
export type Product_ServiceConfig_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_ServiceConfig_Min_Fields = {
  __typename?: 'product_serviceConfig_min_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.serviceConfig" */
export type Product_ServiceConfig_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.serviceConfig" */
export type Product_ServiceConfig_Mutation_Response = {
  __typename?: 'product_serviceConfig_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_ServiceConfig>;
};

/** input type for inserting object relation for remote table "product.serviceConfig" */
export type Product_ServiceConfig_Obj_Rel_Insert_Input = {
  data: Product_ServiceConfig_Insert_Input;
  on_conflict?: Maybe<Product_ServiceConfig_On_Conflict>;
};

/** on conflict condition type for table "product.serviceConfig" */
export type Product_ServiceConfig_On_Conflict = {
  constraint: Product_ServiceConfig_Constraint;
  update_columns: Array<Product_ServiceConfig_Update_Column>;
  where?: Maybe<Product_ServiceConfig_Bool_Exp>;
};

/** ordering options when selecting data from "product.serviceConfig" */
export type Product_ServiceConfig_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  optionalServiceParams_aggregate?: Maybe<Product_OptionalServiceParam_Aggregate_Order_By>;
  service_consumables_aggregate?: Maybe<Product_Service_Consumable_Aggregate_Order_By>;
  services_aggregate?: Maybe<Product_Service_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.serviceConfig" */
export type Product_ServiceConfig_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.serviceConfig" */
export enum Product_ServiceConfig_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  LabelFactory = 'labelFactory',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.serviceConfig" */
export type Product_ServiceConfig_Set_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product.serviceConfig" */
export enum Product_ServiceConfig_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  LabelFactory = 'labelFactory',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** aggregated selection of "product.service" */
export type Product_Service_Aggregate = {
  __typename?: 'product_service_aggregate';
  aggregate?: Maybe<Product_Service_Aggregate_Fields>;
  nodes: Array<Product_Service>;
};

/** aggregate fields of "product.service" */
export type Product_Service_Aggregate_Fields = {
  __typename?: 'product_service_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Service_Max_Fields>;
  min?: Maybe<Product_Service_Min_Fields>;
};


/** aggregate fields of "product.service" */
export type Product_Service_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Service_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.service" */
export type Product_Service_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Service_Max_Order_By>;
  min?: Maybe<Product_Service_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.service" */
export type Product_Service_Arr_Rel_Insert_Input = {
  data: Array<Product_Service_Insert_Input>;
  on_conflict?: Maybe<Product_Service_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.service". All fields are combined with a logical 'AND'. */
export type Product_Service_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Service_Bool_Exp>>>;
  _not?: Maybe<Product_Service_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Service_Bool_Exp>>>;
  paramsValues?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productcode?: Maybe<String_Comparison_Exp>;
  serviceConfig?: Maybe<Product_ServiceConfig_Bool_Exp>;
  serviceConfigid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.service" */
export enum Product_Service_Constraint {
  /** unique or primary key constraint */
  ServiceProductCodeKey = 'service_productCode_key'
}

/** columns and relationships of "product.service_consumable" */
export type Product_Service_Consumable = {
  __typename?: 'product_service_consumable';
  /** An object relationship */
  consumable: Product_Consumable;
  consumableid: Scalars['uuid'];
  quota: Scalars['Float'];
  /** An object relationship */
  serviceConfig: Product_ServiceConfig;
  serviceid: Scalars['uuid'];
};

/** aggregated selection of "product.service_consumable" */
export type Product_Service_Consumable_Aggregate = {
  __typename?: 'product_service_consumable_aggregate';
  aggregate?: Maybe<Product_Service_Consumable_Aggregate_Fields>;
  nodes: Array<Product_Service_Consumable>;
};

/** aggregate fields of "product.service_consumable" */
export type Product_Service_Consumable_Aggregate_Fields = {
  __typename?: 'product_service_consumable_aggregate_fields';
  avg?: Maybe<Product_Service_Consumable_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Service_Consumable_Max_Fields>;
  min?: Maybe<Product_Service_Consumable_Min_Fields>;
  stddev?: Maybe<Product_Service_Consumable_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Service_Consumable_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Service_Consumable_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Service_Consumable_Sum_Fields>;
  var_pop?: Maybe<Product_Service_Consumable_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Service_Consumable_Var_Samp_Fields>;
  variance?: Maybe<Product_Service_Consumable_Variance_Fields>;
};


/** aggregate fields of "product.service_consumable" */
export type Product_Service_Consumable_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.service_consumable" */
export type Product_Service_Consumable_Aggregate_Order_By = {
  avg?: Maybe<Product_Service_Consumable_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Service_Consumable_Max_Order_By>;
  min?: Maybe<Product_Service_Consumable_Min_Order_By>;
  stddev?: Maybe<Product_Service_Consumable_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Service_Consumable_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Service_Consumable_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Service_Consumable_Sum_Order_By>;
  var_pop?: Maybe<Product_Service_Consumable_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Service_Consumable_Var_Samp_Order_By>;
  variance?: Maybe<Product_Service_Consumable_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.service_consumable" */
export type Product_Service_Consumable_Arr_Rel_Insert_Input = {
  data: Array<Product_Service_Consumable_Insert_Input>;
  on_conflict?: Maybe<Product_Service_Consumable_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Service_Consumable_Avg_Fields = {
  __typename?: 'product_service_consumable_avg_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Avg_Order_By = {
  quota?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.service_consumable". All fields are combined with a logical 'AND'. */
export type Product_Service_Consumable_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Service_Consumable_Bool_Exp>>>;
  _not?: Maybe<Product_Service_Consumable_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Service_Consumable_Bool_Exp>>>;
  consumable?: Maybe<Product_Consumable_Bool_Exp>;
  consumableid?: Maybe<Uuid_Comparison_Exp>;
  quota?: Maybe<Float_Comparison_Exp>;
  serviceConfig?: Maybe<Product_ServiceConfig_Bool_Exp>;
  serviceid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.service_consumable" */
export enum Product_Service_Consumable_Constraint {
  /** unique or primary key constraint */
  ServiceConsumablePkey = 'service_consumable_pkey'
}

/** input type for incrementing integer column in table "product.service_consumable" */
export type Product_Service_Consumable_Inc_Input = {
  quota?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "product.service_consumable" */
export type Product_Service_Consumable_Insert_Input = {
  consumable?: Maybe<Product_Consumable_Obj_Rel_Insert_Input>;
  consumableid?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['Float']>;
  serviceConfig?: Maybe<Product_ServiceConfig_Obj_Rel_Insert_Input>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Service_Consumable_Max_Fields = {
  __typename?: 'product_service_consumable_max_fields';
  consumableid?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['Float']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Max_Order_By = {
  consumableid?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Service_Consumable_Min_Fields = {
  __typename?: 'product_service_consumable_min_fields';
  consumableid?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['Float']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Min_Order_By = {
  consumableid?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.service_consumable" */
export type Product_Service_Consumable_Mutation_Response = {
  __typename?: 'product_service_consumable_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Service_Consumable>;
};

/** input type for inserting object relation for remote table "product.service_consumable" */
export type Product_Service_Consumable_Obj_Rel_Insert_Input = {
  data: Product_Service_Consumable_Insert_Input;
  on_conflict?: Maybe<Product_Service_Consumable_On_Conflict>;
};

/** on conflict condition type for table "product.service_consumable" */
export type Product_Service_Consumable_On_Conflict = {
  constraint: Product_Service_Consumable_Constraint;
  update_columns: Array<Product_Service_Consumable_Update_Column>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};

/** ordering options when selecting data from "product.service_consumable" */
export type Product_Service_Consumable_Order_By = {
  consumable?: Maybe<Product_Consumable_Order_By>;
  consumableid?: Maybe<Order_By>;
  quota?: Maybe<Order_By>;
  serviceConfig?: Maybe<Product_ServiceConfig_Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.service_consumable" */
export type Product_Service_Consumable_Pk_Columns_Input = {
  consumableid: Scalars['uuid'];
  serviceid: Scalars['uuid'];
};

/** select columns of table "product.service_consumable" */
export enum Product_Service_Consumable_Select_Column {
  /** column name */
  Consumableid = 'consumableid',
  /** column name */
  Quota = 'quota',
  /** column name */
  Serviceid = 'serviceid'
}

/** input type for updating data in table "product.service_consumable" */
export type Product_Service_Consumable_Set_Input = {
  consumableid?: Maybe<Scalars['uuid']>;
  quota?: Maybe<Scalars['Float']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Service_Consumable_Stddev_Fields = {
  __typename?: 'product_service_consumable_stddev_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Stddev_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Service_Consumable_Stddev_Pop_Fields = {
  __typename?: 'product_service_consumable_stddev_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Stddev_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Service_Consumable_Stddev_Samp_Fields = {
  __typename?: 'product_service_consumable_stddev_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Stddev_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Service_Consumable_Sum_Fields = {
  __typename?: 'product_service_consumable_sum_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Sum_Order_By = {
  quota?: Maybe<Order_By>;
};

/** update columns of table "product.service_consumable" */
export enum Product_Service_Consumable_Update_Column {
  /** column name */
  Consumableid = 'consumableid',
  /** column name */
  Quota = 'quota',
  /** column name */
  Serviceid = 'serviceid'
}

/** aggregate var_pop on columns */
export type Product_Service_Consumable_Var_Pop_Fields = {
  __typename?: 'product_service_consumable_var_pop_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Var_Pop_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Service_Consumable_Var_Samp_Fields = {
  __typename?: 'product_service_consumable_var_samp_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Var_Samp_Order_By = {
  quota?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Service_Consumable_Variance_Fields = {
  __typename?: 'product_service_consumable_variance_fields';
  quota?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.service_consumable" */
export type Product_Service_Consumable_Variance_Order_By = {
  quota?: Maybe<Order_By>;
};

/** input type for inserting data into table "product.service" */
export type Product_Service_Insert_Input = {
  paramsValues?: Maybe<Product_OptionalServiceParamValues_Arr_Rel_Insert_Input>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productcode?: Maybe<Scalars['String']>;
  serviceConfig?: Maybe<Product_ServiceConfig_Obj_Rel_Insert_Input>;
  serviceConfigid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Service_Max_Fields = {
  __typename?: 'product_service_max_fields';
  productcode?: Maybe<Scalars['String']>;
  serviceConfigid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.service" */
export type Product_Service_Max_Order_By = {
  productcode?: Maybe<Order_By>;
  serviceConfigid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Service_Min_Fields = {
  __typename?: 'product_service_min_fields';
  productcode?: Maybe<Scalars['String']>;
  serviceConfigid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.service" */
export type Product_Service_Min_Order_By = {
  productcode?: Maybe<Order_By>;
  serviceConfigid?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.service" */
export type Product_Service_Mutation_Response = {
  __typename?: 'product_service_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Service>;
};

/** input type for inserting object relation for remote table "product.service" */
export type Product_Service_Obj_Rel_Insert_Input = {
  data: Product_Service_Insert_Input;
  on_conflict?: Maybe<Product_Service_On_Conflict>;
};

/** on conflict condition type for table "product.service" */
export type Product_Service_On_Conflict = {
  constraint: Product_Service_Constraint;
  update_columns: Array<Product_Service_Update_Column>;
  where?: Maybe<Product_Service_Bool_Exp>;
};

/** ordering options when selecting data from "product.service" */
export type Product_Service_Order_By = {
  paramsValues_aggregate?: Maybe<Product_OptionalServiceParamValues_Aggregate_Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productcode?: Maybe<Order_By>;
  serviceConfig?: Maybe<Product_ServiceConfig_Order_By>;
  serviceConfigid?: Maybe<Order_By>;
};

/** select columns of table "product.service" */
export enum Product_Service_Select_Column {
  /** column name */
  Productcode = 'productcode',
  /** column name */
  ServiceConfigid = 'serviceConfigid'
}

/** input type for updating data in table "product.service" */
export type Product_Service_Set_Input = {
  productcode?: Maybe<Scalars['String']>;
  serviceConfigid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product.service" */
export enum Product_Service_Update_Column {
  /** column name */
  Productcode = 'productcode',
  /** column name */
  ServiceConfigid = 'serviceConfigid'
}

/** columns and relationships of "product.substance" */
export type Product_Substance = {
  __typename?: 'product_substance';
  /** An object relationship */
  accessory?: Maybe<Product_Accessory>;
  category: Scalars['String'];
  /** An object relationship */
  consomable?: Maybe<Product_Consumable>;
  cost?: Maybe<Scalars['Float']>;
  /** An object relationship */
  glass?: Maybe<Product_Glass>;
  id: Scalars['uuid'];
};

/** aggregated selection of "product.substance" */
export type Product_Substance_Aggregate = {
  __typename?: 'product_substance_aggregate';
  aggregate?: Maybe<Product_Substance_Aggregate_Fields>;
  nodes: Array<Product_Substance>;
};

/** aggregate fields of "product.substance" */
export type Product_Substance_Aggregate_Fields = {
  __typename?: 'product_substance_aggregate_fields';
  avg?: Maybe<Product_Substance_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Substance_Max_Fields>;
  min?: Maybe<Product_Substance_Min_Fields>;
  stddev?: Maybe<Product_Substance_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Substance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Substance_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Substance_Sum_Fields>;
  var_pop?: Maybe<Product_Substance_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Substance_Var_Samp_Fields>;
  variance?: Maybe<Product_Substance_Variance_Fields>;
};


/** aggregate fields of "product.substance" */
export type Product_Substance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Substance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.substance" */
export type Product_Substance_Aggregate_Order_By = {
  avg?: Maybe<Product_Substance_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Substance_Max_Order_By>;
  min?: Maybe<Product_Substance_Min_Order_By>;
  stddev?: Maybe<Product_Substance_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Substance_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Substance_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Substance_Sum_Order_By>;
  var_pop?: Maybe<Product_Substance_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Substance_Var_Samp_Order_By>;
  variance?: Maybe<Product_Substance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product.substance" */
export type Product_Substance_Arr_Rel_Insert_Input = {
  data: Array<Product_Substance_Insert_Input>;
  on_conflict?: Maybe<Product_Substance_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Substance_Avg_Fields = {
  __typename?: 'product_substance_avg_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product.substance" */
export type Product_Substance_Avg_Order_By = {
  cost?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product.substance". All fields are combined with a logical 'AND'. */
export type Product_Substance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Substance_Bool_Exp>>>;
  _not?: Maybe<Product_Substance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Substance_Bool_Exp>>>;
  accessory?: Maybe<Product_Accessory_Bool_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  consomable?: Maybe<Product_Consumable_Bool_Exp>;
  cost?: Maybe<Float_Comparison_Exp>;
  glass?: Maybe<Product_Glass_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.substance" */
export enum Product_Substance_Constraint {
  /** unique or primary key constraint */
  SubstancePkey = 'substance_pkey'
}

/** input type for incrementing integer column in table "product.substance" */
export type Product_Substance_Inc_Input = {
  cost?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "product.substance" */
export type Product_Substance_Insert_Input = {
  accessory?: Maybe<Product_Accessory_Obj_Rel_Insert_Input>;
  category?: Maybe<Scalars['String']>;
  consomable?: Maybe<Product_Consumable_Obj_Rel_Insert_Input>;
  cost?: Maybe<Scalars['Float']>;
  glass?: Maybe<Product_Glass_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Substance_Max_Fields = {
  __typename?: 'product_substance_max_fields';
  category?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.substance" */
export type Product_Substance_Max_Order_By = {
  category?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Substance_Min_Fields = {
  __typename?: 'product_substance_min_fields';
  category?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.substance" */
export type Product_Substance_Min_Order_By = {
  category?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.substance" */
export type Product_Substance_Mutation_Response = {
  __typename?: 'product_substance_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Substance>;
};

/** input type for inserting object relation for remote table "product.substance" */
export type Product_Substance_Obj_Rel_Insert_Input = {
  data: Product_Substance_Insert_Input;
  on_conflict?: Maybe<Product_Substance_On_Conflict>;
};

/** on conflict condition type for table "product.substance" */
export type Product_Substance_On_Conflict = {
  constraint: Product_Substance_Constraint;
  update_columns: Array<Product_Substance_Update_Column>;
  where?: Maybe<Product_Substance_Bool_Exp>;
};

/** ordering options when selecting data from "product.substance" */
export type Product_Substance_Order_By = {
  accessory?: Maybe<Product_Accessory_Order_By>;
  category?: Maybe<Order_By>;
  consomable?: Maybe<Product_Consumable_Order_By>;
  cost?: Maybe<Order_By>;
  glass?: Maybe<Product_Glass_Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.substance" */
export type Product_Substance_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.substance" */
export enum Product_Substance_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "product.substance" */
export type Product_Substance_Set_Input = {
  category?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Substance_Stddev_Fields = {
  __typename?: 'product_substance_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product.substance" */
export type Product_Substance_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Substance_Stddev_Pop_Fields = {
  __typename?: 'product_substance_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product.substance" */
export type Product_Substance_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Substance_Stddev_Samp_Fields = {
  __typename?: 'product_substance_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product.substance" */
export type Product_Substance_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Substance_Sum_Fields = {
  __typename?: 'product_substance_sum_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "product.substance" */
export type Product_Substance_Sum_Order_By = {
  cost?: Maybe<Order_By>;
};

/** update columns of table "product.substance" */
export enum Product_Substance_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Product_Substance_Var_Pop_Fields = {
  __typename?: 'product_substance_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product.substance" */
export type Product_Substance_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Substance_Var_Samp_Fields = {
  __typename?: 'product_substance_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product.substance" */
export type Product_Substance_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Substance_Variance_Fields = {
  __typename?: 'product_substance_variance_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product.substance" */
export type Product_Substance_Variance_Order_By = {
  cost?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contact.address" */
  contact_address: Array<Contact_Address>;
  /** fetch aggregated fields from the table: "contact.address" */
  contact_address_aggregate: Contact_Address_Aggregate;
  /** fetch data from the table: "contact.address" using primary key columns */
  contact_address_by_pk?: Maybe<Contact_Address>;
  /** fetch data from the table: "contact.contact" */
  contact_contact: Array<Contact_Contact>;
  /** fetch data from the table: "contact.contact_address" */
  contact_contact_address: Array<Contact_Contact_Address>;
  /** fetch aggregated fields from the table: "contact.contact_address" */
  contact_contact_address_aggregate: Contact_Contact_Address_Aggregate;
  /** fetch data from the table: "contact.contact_address" using primary key columns */
  contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** fetch data from the table: "contact.contact_addresses_view" */
  contact_contact_addresses_view: Array<Contact_Contact_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.contact_addresses_view" */
  contact_contact_addresses_view_aggregate: Contact_Contact_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.contact" */
  contact_contact_aggregate: Contact_Contact_Aggregate;
  /** fetch data from the table: "contact.contact" using primary key columns */
  contact_contact_by_pk?: Maybe<Contact_Contact>;
  /** fetch data from the table: "contact.contact_customers_view" */
  contact_contact_customers_view: Array<Contact_Contact_Customers_View>;
  /** fetch aggregated fields from the table: "contact.contact_customers_view" */
  contact_contact_customers_view_aggregate: Contact_Contact_Customers_View_Aggregate;
  /** fetch data from the table: "contact.contact_providers_view" */
  contact_contact_providers_view: Array<Contact_Contact_Providers_View>;
  /** fetch aggregated fields from the table: "contact.contact_providers_view" */
  contact_contact_providers_view_aggregate: Contact_Contact_Providers_View_Aggregate;
  /** fetch data from the table: "contact.customer" */
  contact_customer: Array<Contact_Customer>;
  /** fetch data from the table: "contact.customer_address" */
  contact_customer_address: Array<Contact_Customer_Address>;
  /** fetch aggregated fields from the table: "contact.customer_address" */
  contact_customer_address_aggregate: Contact_Customer_Address_Aggregate;
  /** fetch data from the table: "contact.customer_address" using primary key columns */
  contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** fetch data from the table: "contact.customer_addresses_view" */
  contact_customer_addresses_view: Array<Contact_Customer_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.customer_addresses_view" */
  contact_customer_addresses_view_aggregate: Contact_Customer_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.customer" */
  contact_customer_aggregate: Contact_Customer_Aggregate;
  /** fetch data from the table: "contact.customer" using primary key columns */
  contact_customer_by_pk?: Maybe<Contact_Customer>;
  /** fetch data from the table: "contact.customer_contact" */
  contact_customer_contact: Array<Contact_Customer_Contact>;
  /** fetch aggregated fields from the table: "contact.customer_contact" */
  contact_customer_contact_aggregate: Contact_Customer_Contact_Aggregate;
  /** fetch data from the table: "contact.customer_contact" using primary key columns */
  contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** fetch data from the table: "contact.customer_contacts_view" */
  contact_customer_contacts_view: Array<Contact_Customer_Contacts_View>;
  /** fetch aggregated fields from the table: "contact.customer_contacts_view" */
  contact_customer_contacts_view_aggregate: Contact_Customer_Contacts_View_Aggregate;
  /** fetch data from the table: "contact.provider" */
  contact_provider: Array<Contact_Provider>;
  /** fetch data from the table: "contact.provider_address" */
  contact_provider_address: Array<Contact_Provider_Address>;
  /** fetch aggregated fields from the table: "contact.provider_address" */
  contact_provider_address_aggregate: Contact_Provider_Address_Aggregate;
  /** fetch data from the table: "contact.provider_address" using primary key columns */
  contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** fetch data from the table: "contact.provider_addresses_view" */
  contact_provider_addresses_view: Array<Contact_Provider_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.provider_addresses_view" */
  contact_provider_addresses_view_aggregate: Contact_Provider_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.provider" */
  contact_provider_aggregate: Contact_Provider_Aggregate;
  /** fetch data from the table: "contact.provider" using primary key columns */
  contact_provider_by_pk?: Maybe<Contact_Provider>;
  /** fetch data from the table: "contact.provider_contact" */
  contact_provider_contact: Array<Contact_Provider_Contact>;
  /** fetch aggregated fields from the table: "contact.provider_contact" */
  contact_provider_contact_aggregate: Contact_Provider_Contact_Aggregate;
  /** fetch data from the table: "contact.provider_contact" using primary key columns */
  contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** fetch data from the table: "contact.provider_contacts_view" */
  contact_provider_contacts_view: Array<Contact_Provider_Contacts_View>;
  /** fetch aggregated fields from the table: "contact.provider_contacts_view" */
  contact_provider_contacts_view_aggregate: Contact_Provider_Contacts_View_Aggregate;
  /** fetch data from the table: "management.company" */
  management_company: Array<Management_Company>;
  /** fetch aggregated fields from the table: "management.company" */
  management_company_aggregate: Management_Company_Aggregate;
  /** fetch data from the table: "management.company" using primary key columns */
  management_company_by_pk?: Maybe<Management_Company>;
  /** fetch data from the table: "management.salesPoint" */
  management_salesPoint: Array<Management_SalesPoint>;
  /** fetch aggregated fields from the table: "management.salesPoint" */
  management_salesPoint_aggregate: Management_SalesPoint_Aggregate;
  /** fetch data from the table: "management.salesPoint" using primary key columns */
  management_salesPoint_by_pk?: Maybe<Management_SalesPoint>;
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
  /** fetch data from the table: "product.accessory" */
  product_accessory: Array<Product_Accessory>;
  /** fetch data from the table: "product.accessoryTypes" */
  product_accessoryTypes: Array<Product_AccessoryTypes>;
  /** fetch aggregated fields from the table: "product.accessoryTypes" */
  product_accessoryTypes_aggregate: Product_AccessoryTypes_Aggregate;
  /** fetch data from the table: "product.accessoryTypes" using primary key columns */
  product_accessoryTypes_by_pk?: Maybe<Product_AccessoryTypes>;
  /** fetch aggregated fields from the table: "product.accessory" */
  product_accessory_aggregate: Product_Accessory_Aggregate;
  /** fetch data from the table: "product.accessory" using primary key columns */
  product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** fetch data from the table: "product.consumable" */
  product_consumable: Array<Product_Consumable>;
  /** fetch data from the table: "product.consumableCategory" */
  product_consumableCategory: Array<Product_ConsumableCategory>;
  /** fetch aggregated fields from the table: "product.consumableCategory" */
  product_consumableCategory_aggregate: Product_ConsumableCategory_Aggregate;
  /** fetch data from the table: "product.consumableCategory" using primary key columns */
  product_consumableCategory_by_pk?: Maybe<Product_ConsumableCategory>;
  /** fetch aggregated fields from the table: "product.consumable" */
  product_consumable_aggregate: Product_Consumable_Aggregate;
  /** fetch data from the table: "product.consumable" using primary key columns */
  product_consumable_by_pk?: Maybe<Product_Consumable>;
  /** fetch data from the table: "product.glass" */
  product_glass: Array<Product_Glass>;
  /** fetch aggregated fields from the table: "product.glass" */
  product_glass_aggregate: Product_Glass_Aggregate;
  /** fetch data from the table: "product.glass" using primary key columns */
  product_glass_by_pk?: Maybe<Product_Glass>;
  /** fetch data from the table: "product.optionalServiceParam" */
  product_optionalServiceParam: Array<Product_OptionalServiceParam>;
  /** fetch data from the table: "product.optionalServiceParamValues" */
  product_optionalServiceParamValues: Array<Product_OptionalServiceParamValues>;
  /** fetch aggregated fields from the table: "product.optionalServiceParamValues" */
  product_optionalServiceParamValues_aggregate: Product_OptionalServiceParamValues_Aggregate;
  /** fetch data from the table: "product.optionalServiceParamValues" using primary key columns */
  product_optionalServiceParamValues_by_pk?: Maybe<Product_OptionalServiceParamValues>;
  /** fetch aggregated fields from the table: "product.optionalServiceParam" */
  product_optionalServiceParam_aggregate: Product_OptionalServiceParam_Aggregate;
  /** fetch data from the table: "product.optionalServiceParam" using primary key columns */
  product_optionalServiceParam_by_pk?: Maybe<Product_OptionalServiceParam>;
  /** fetch data from the table: "product.product" */
  product_product: Array<Product_Product>;
  /** fetch aggregated fields from the table: "product.product" */
  product_product_aggregate: Product_Product_Aggregate;
  /** fetch data from the table: "product.product" using primary key columns */
  product_product_by_pk?: Maybe<Product_Product>;
  /** fetch data from the table: "product.product_companies" */
  product_product_companies: Array<Product_Product_Companies>;
  /** fetch aggregated fields from the table: "product.product_companies" */
  product_product_companies_aggregate: Product_Product_Companies_Aggregate;
  /** fetch data from the table: "product.product_companies" using primary key columns */
  product_product_companies_by_pk?: Maybe<Product_Product_Companies>;
  /** fetch data from the table: "product.product_companies_view" */
  product_product_companies_view: Array<Product_Product_Companies_View>;
  /** fetch aggregated fields from the table: "product.product_companies_view" */
  product_product_companies_view_aggregate: Product_Product_Companies_View_Aggregate;
  /** fetch data from the table: "product.product_unit" */
  product_product_unit: Array<Product_Product_Unit>;
  /** fetch aggregated fields from the table: "product.product_unit" */
  product_product_unit_aggregate: Product_Product_Unit_Aggregate;
  /** fetch data from the table: "product.product_unit" using primary key columns */
  product_product_unit_by_pk?: Maybe<Product_Product_Unit>;
  /** fetch data from the table: "product.service" */
  product_service: Array<Product_Service>;
  /** fetch data from the table: "product.serviceConfig" */
  product_serviceConfig: Array<Product_ServiceConfig>;
  /** fetch aggregated fields from the table: "product.serviceConfig" */
  product_serviceConfig_aggregate: Product_ServiceConfig_Aggregate;
  /** fetch data from the table: "product.serviceConfig" using primary key columns */
  product_serviceConfig_by_pk?: Maybe<Product_ServiceConfig>;
  /** fetch aggregated fields from the table: "product.service" */
  product_service_aggregate: Product_Service_Aggregate;
  /** fetch data from the table: "product.service_consumable" */
  product_service_consumable: Array<Product_Service_Consumable>;
  /** fetch aggregated fields from the table: "product.service_consumable" */
  product_service_consumable_aggregate: Product_Service_Consumable_Aggregate;
  /** fetch data from the table: "product.service_consumable" using primary key columns */
  product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** fetch data from the table: "product.substance" */
  product_substance: Array<Product_Substance>;
  /** fetch aggregated fields from the table: "product.substance" */
  product_substance_aggregate: Product_Substance_Aggregate;
  /** fetch data from the table: "product.substance" using primary key columns */
  product_substance_by_pk?: Maybe<Product_Substance>;
  /** fetch data from the table: "stock.item_tranfer" */
  stock_item_tranfer: Array<Stock_Item_Tranfer>;
  /** fetch aggregated fields from the table: "stock.item_tranfer" */
  stock_item_tranfer_aggregate: Stock_Item_Tranfer_Aggregate;
  /** fetch data from the table: "stock.item_tranfer" using primary key columns */
  stock_item_tranfer_by_pk?: Maybe<Stock_Item_Tranfer>;
  /** fetch data from the table: "stock.tranfer_order_item" */
  stock_tranfer_order_item: Array<Stock_Tranfer_Order_Item>;
  /** fetch aggregated fields from the table: "stock.tranfer_order_item" */
  stock_tranfer_order_item_aggregate: Stock_Tranfer_Order_Item_Aggregate;
  /** fetch data from the table: "stock.tranfer_order_item" using primary key columns */
  stock_tranfer_order_item_by_pk?: Maybe<Stock_Tranfer_Order_Item>;
  /** fetch data from the table: "stock.transfer_order" */
  stock_transfer_order: Array<Stock_Transfer_Order>;
  /** fetch aggregated fields from the table: "stock.transfer_order" */
  stock_transfer_order_aggregate: Stock_Transfer_Order_Aggregate;
  /** fetch data from the table: "stock.transfer_order" using primary key columns */
  stock_transfer_order_by_pk?: Maybe<Stock_Transfer_Order>;
  /** fetch data from the table: "stock.warehouse" */
  stock_warehouse: Array<Stock_Warehouse>;
  /** fetch aggregated fields from the table: "stock.warehouse" */
  stock_warehouse_aggregate: Stock_Warehouse_Aggregate;
  /** fetch data from the table: "stock.warehouse" using primary key columns */
  stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
  /** fetch data from the table: "stock.warehouse_subsctance" */
  stock_warehouse_subsctance: Array<Stock_Warehouse_Subsctance>;
  /** fetch aggregated fields from the table: "stock.warehouse_subsctance" */
  stock_warehouse_subsctance_aggregate: Stock_Warehouse_Subsctance_Aggregate;
  /** fetch data from the table: "stock.warehouse_subsctance" using primary key columns */
  stock_warehouse_subsctance_by_pk?: Maybe<Stock_Warehouse_Subsctance>;
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
export type Query_RootContact_Contact_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
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
export type Query_RootContact_Contact_Customers_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Customers_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Providers_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Contact_Providers_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
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
export type Query_RootContact_Customer_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
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
export type Query_RootContact_Customer_Contacts_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Customer_Contacts_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
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
export type Query_RootContact_Provider_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
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
export type Query_RootContact_Provider_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Query_RootContact_Provider_Contacts_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
};


/** query root */
export type Query_RootContact_Provider_Contacts_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
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
  id: Scalars['String'];
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
export type Query_RootProduct_AccessoryArgs = {
  distinct_on?: Maybe<Array<Product_Accessory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessory_Order_By>>;
  where?: Maybe<Product_Accessory_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_AccessoryTypesArgs = {
  distinct_on?: Maybe<Array<Product_AccessoryTypes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_AccessoryTypes_Order_By>>;
  where?: Maybe<Product_AccessoryTypes_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_AccessoryTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_AccessoryTypes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_AccessoryTypes_Order_By>>;
  where?: Maybe<Product_AccessoryTypes_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_AccessoryTypes_By_PkArgs = {
  type: Scalars['String'];
};


/** query root */
export type Query_RootProduct_Accessory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Accessory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessory_Order_By>>;
  where?: Maybe<Product_Accessory_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Accessory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_ConsumableArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ConsumableCategoryArgs = {
  distinct_on?: Maybe<Array<Product_ConsumableCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ConsumableCategory_Order_By>>;
  where?: Maybe<Product_ConsumableCategory_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ConsumableCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_ConsumableCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ConsumableCategory_Order_By>>;
  where?: Maybe<Product_ConsumableCategory_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ConsumableCategory_By_PkArgs = {
  category: Scalars['String'];
};


/** query root */
export type Query_RootProduct_Consumable_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Consumable_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_GlassArgs = {
  distinct_on?: Maybe<Array<Product_Glass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Glass_Order_By>>;
  where?: Maybe<Product_Glass_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Glass_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Glass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Glass_Order_By>>;
  where?: Maybe<Product_Glass_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Glass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_OptionalServiceParamArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_OptionalServiceParamValuesArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_OptionalServiceParamValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_OptionalServiceParamValues_By_PkArgs = {
  serviceServiceConfigid: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_OptionalServiceParam_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_OptionalServiceParam_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_ProductArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_By_PkArgs = {
  code: Scalars['String'];
};


/** query root */
export type Query_RootProduct_Product_CompaniesArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_Companies_By_PkArgs = {
  companyid: Scalars['uuid'];
  productcode: Scalars['String'];
};


/** query root */
export type Query_RootProduct_Product_Companies_ViewArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_Companies_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_UnitArgs = {
  distinct_on?: Maybe<Array<Product_Product_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Unit_Order_By>>;
  where?: Maybe<Product_Product_Unit_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Unit_Order_By>>;
  where?: Maybe<Product_Product_Unit_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Product_Unit_By_PkArgs = {
  unit: Scalars['String'];
};


/** query root */
export type Query_RootProduct_ServiceArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ServiceConfigArgs = {
  distinct_on?: Maybe<Array<Product_ServiceConfig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ServiceConfig_Order_By>>;
  where?: Maybe<Product_ServiceConfig_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ServiceConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_ServiceConfig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ServiceConfig_Order_By>>;
  where?: Maybe<Product_ServiceConfig_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_ServiceConfig_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_Service_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_ConsumableArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_Consumable_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_Consumable_By_PkArgs = {
  consumableid: Scalars['uuid'];
  serviceid: Scalars['uuid'];
};


/** query root */
export type Query_RootProduct_SubstanceArgs = {
  distinct_on?: Maybe<Array<Product_Substance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Substance_Order_By>>;
  where?: Maybe<Product_Substance_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Substance_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Substance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Substance_Order_By>>;
  where?: Maybe<Product_Substance_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Substance_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Item_TranferArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Tranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Tranfer_Order_By>>;
  where?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Item_Tranfer_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Tranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Tranfer_Order_By>>;
  where?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Item_Tranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Tranfer_Order_ItemArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Tranfer_Order_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Tranfer_Order_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Transfer_OrderArgs = {
  distinct_on?: Maybe<Array<Stock_Transfer_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Transfer_Order_Order_By>>;
  where?: Maybe<Stock_Transfer_Order_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Transfer_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Transfer_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Transfer_Order_Order_By>>;
  where?: Maybe<Stock_Transfer_Order_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Transfer_Order_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Order_By>>;
  where?: Maybe<Stock_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Order_By>>;
  where?: Maybe<Stock_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Warehouse_SubsctanceArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Warehouse_Subsctance_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Warehouse_Subsctance_By_PkArgs = {
  subsctanceid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};

/** columns and relationships of "stock.item_tranfer" */
export type Stock_Item_Tranfer = {
  __typename?: 'stock_item_tranfer';
  id: Scalars['uuid'];
  quantity?: Maybe<Scalars['Float']>;
  status: Scalars['uuid'];
  transfer_orderid: Scalars['uuid'];
};

/** aggregated selection of "stock.item_tranfer" */
export type Stock_Item_Tranfer_Aggregate = {
  __typename?: 'stock_item_tranfer_aggregate';
  aggregate?: Maybe<Stock_Item_Tranfer_Aggregate_Fields>;
  nodes: Array<Stock_Item_Tranfer>;
};

/** aggregate fields of "stock.item_tranfer" */
export type Stock_Item_Tranfer_Aggregate_Fields = {
  __typename?: 'stock_item_tranfer_aggregate_fields';
  avg?: Maybe<Stock_Item_Tranfer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Item_Tranfer_Max_Fields>;
  min?: Maybe<Stock_Item_Tranfer_Min_Fields>;
  stddev?: Maybe<Stock_Item_Tranfer_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Item_Tranfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Item_Tranfer_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Item_Tranfer_Sum_Fields>;
  var_pop?: Maybe<Stock_Item_Tranfer_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Item_Tranfer_Var_Samp_Fields>;
  variance?: Maybe<Stock_Item_Tranfer_Variance_Fields>;
};


/** aggregate fields of "stock.item_tranfer" */
export type Stock_Item_Tranfer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Item_Tranfer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Aggregate_Order_By = {
  avg?: Maybe<Stock_Item_Tranfer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Item_Tranfer_Max_Order_By>;
  min?: Maybe<Stock_Item_Tranfer_Min_Order_By>;
  stddev?: Maybe<Stock_Item_Tranfer_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Item_Tranfer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Item_Tranfer_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Item_Tranfer_Sum_Order_By>;
  var_pop?: Maybe<Stock_Item_Tranfer_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Item_Tranfer_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Item_Tranfer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Arr_Rel_Insert_Input = {
  data: Array<Stock_Item_Tranfer_Insert_Input>;
  on_conflict?: Maybe<Stock_Item_Tranfer_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Item_Tranfer_Avg_Fields = {
  __typename?: 'stock_item_tranfer_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock.item_tranfer". All fields are combined with a logical 'AND'. */
export type Stock_Item_Tranfer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Item_Tranfer_Bool_Exp>>>;
  _not?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Item_Tranfer_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Float_Comparison_Exp>;
  status?: Maybe<Uuid_Comparison_Exp>;
  transfer_orderid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.item_tranfer" */
export enum Stock_Item_Tranfer_Constraint {
  /** unique or primary key constraint */
  AccessoryTranferPkey = 'accessoryTranfer_pkey'
}

/** input type for incrementing integer column in table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Inc_Input = {
  quantity?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_Item_Tranfer_Max_Fields = {
  __typename?: 'stock_item_tranfer_max_fields';
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Max_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transfer_orderid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Item_Tranfer_Min_Fields = {
  __typename?: 'stock_item_tranfer_min_fields';
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Min_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transfer_orderid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Mutation_Response = {
  __typename?: 'stock_item_tranfer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Item_Tranfer>;
};

/** input type for inserting object relation for remote table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Obj_Rel_Insert_Input = {
  data: Stock_Item_Tranfer_Insert_Input;
  on_conflict?: Maybe<Stock_Item_Tranfer_On_Conflict>;
};

/** on conflict condition type for table "stock.item_tranfer" */
export type Stock_Item_Tranfer_On_Conflict = {
  constraint: Stock_Item_Tranfer_Constraint;
  update_columns: Array<Stock_Item_Tranfer_Update_Column>;
  where?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
};

/** ordering options when selecting data from "stock.item_tranfer" */
export type Stock_Item_Tranfer_Order_By = {
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transfer_orderid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.item_tranfer" */
export type Stock_Item_Tranfer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.item_tranfer" */
export enum Stock_Item_Tranfer_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  TransferOrderid = 'transfer_orderid'
}

/** input type for updating data in table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stock_Item_Tranfer_Stddev_Fields = {
  __typename?: 'stock_item_tranfer_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Item_Tranfer_Stddev_Pop_Fields = {
  __typename?: 'stock_item_tranfer_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Item_Tranfer_Stddev_Samp_Fields = {
  __typename?: 'stock_item_tranfer_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Item_Tranfer_Sum_Fields = {
  __typename?: 'stock_item_tranfer_sum_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.item_tranfer" */
export enum Stock_Item_Tranfer_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  TransferOrderid = 'transfer_orderid'
}

/** aggregate var_pop on columns */
export type Stock_Item_Tranfer_Var_Pop_Fields = {
  __typename?: 'stock_item_tranfer_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Item_Tranfer_Var_Samp_Fields = {
  __typename?: 'stock_item_tranfer_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Item_Tranfer_Variance_Fields = {
  __typename?: 'stock_item_tranfer_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock.item_tranfer" */
export type Stock_Item_Tranfer_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item = {
  __typename?: 'stock_tranfer_order_item';
  fromwarehouseid: Scalars['uuid'];
  id: Scalars['uuid'];
  quantity?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  subsctanceid?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  substance?: Maybe<Product_Substance>;
  towarehouseid: Scalars['uuid'];
  /** An object relationship */
  transfer_order?: Maybe<Stock_Transfer_Order>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  warehouse: Stock_Warehouse;
  /** An object relationship */
  warehouseByFromwarehouseid: Stock_Warehouse;
};

/** aggregated selection of "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Aggregate = {
  __typename?: 'stock_tranfer_order_item_aggregate';
  aggregate?: Maybe<Stock_Tranfer_Order_Item_Aggregate_Fields>;
  nodes: Array<Stock_Tranfer_Order_Item>;
};

/** aggregate fields of "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Aggregate_Fields = {
  __typename?: 'stock_tranfer_order_item_aggregate_fields';
  avg?: Maybe<Stock_Tranfer_Order_Item_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Tranfer_Order_Item_Max_Fields>;
  min?: Maybe<Stock_Tranfer_Order_Item_Min_Fields>;
  stddev?: Maybe<Stock_Tranfer_Order_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Tranfer_Order_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Tranfer_Order_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Tranfer_Order_Item_Sum_Fields>;
  var_pop?: Maybe<Stock_Tranfer_Order_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Tranfer_Order_Item_Var_Samp_Fields>;
  variance?: Maybe<Stock_Tranfer_Order_Item_Variance_Fields>;
};


/** aggregate fields of "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Aggregate_Order_By = {
  avg?: Maybe<Stock_Tranfer_Order_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Tranfer_Order_Item_Max_Order_By>;
  min?: Maybe<Stock_Tranfer_Order_Item_Min_Order_By>;
  stddev?: Maybe<Stock_Tranfer_Order_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Tranfer_Order_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Tranfer_Order_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Tranfer_Order_Item_Sum_Order_By>;
  var_pop?: Maybe<Stock_Tranfer_Order_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Tranfer_Order_Item_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Tranfer_Order_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Arr_Rel_Insert_Input = {
  data: Array<Stock_Tranfer_Order_Item_Insert_Input>;
  on_conflict?: Maybe<Stock_Tranfer_Order_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Tranfer_Order_Item_Avg_Fields = {
  __typename?: 'stock_tranfer_order_item_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock.tranfer_order_item". All fields are combined with a logical 'AND'. */
export type Stock_Tranfer_Order_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Tranfer_Order_Item_Bool_Exp>>>;
  _not?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Tranfer_Order_Item_Bool_Exp>>>;
  fromwarehouseid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Float_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  subsctanceid?: Maybe<Uuid_Comparison_Exp>;
  substance?: Maybe<Product_Substance_Bool_Exp>;
  towarehouseid?: Maybe<Uuid_Comparison_Exp>;
  transfer_order?: Maybe<Stock_Transfer_Order_Bool_Exp>;
  transfer_orderid?: Maybe<Uuid_Comparison_Exp>;
  warehouse?: Maybe<Stock_Warehouse_Bool_Exp>;
  warehouseByFromwarehouseid?: Maybe<Stock_Warehouse_Bool_Exp>;
};

/** unique or primary key constraints on table "stock.tranfer_order_item" */
export enum Stock_Tranfer_Order_Item_Constraint {
  /** unique or primary key constraint */
  AccessoryTranferOrderPkey = 'accessoryTranferOrder_pkey'
}

/** input type for incrementing integer column in table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Inc_Input = {
  quantity?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Insert_Input = {
  fromwarehouseid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  towarehouseid?: Maybe<Scalars['uuid']>;
  transfer_order?: Maybe<Stock_Transfer_Order_Obj_Rel_Insert_Input>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
  warehouse?: Maybe<Stock_Warehouse_Obj_Rel_Insert_Input>;
  warehouseByFromwarehouseid?: Maybe<Stock_Warehouse_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Stock_Tranfer_Order_Item_Max_Fields = {
  __typename?: 'stock_tranfer_order_item_max_fields';
  fromwarehouseid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  towarehouseid?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Max_Order_By = {
  fromwarehouseid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  towarehouseid?: Maybe<Order_By>;
  transfer_orderid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Tranfer_Order_Item_Min_Fields = {
  __typename?: 'stock_tranfer_order_item_min_fields';
  fromwarehouseid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  towarehouseid?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Min_Order_By = {
  fromwarehouseid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  towarehouseid?: Maybe<Order_By>;
  transfer_orderid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Mutation_Response = {
  __typename?: 'stock_tranfer_order_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Tranfer_Order_Item>;
};

/** input type for inserting object relation for remote table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Obj_Rel_Insert_Input = {
  data: Stock_Tranfer_Order_Item_Insert_Input;
  on_conflict?: Maybe<Stock_Tranfer_Order_Item_On_Conflict>;
};

/** on conflict condition type for table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_On_Conflict = {
  constraint: Stock_Tranfer_Order_Item_Constraint;
  update_columns: Array<Stock_Tranfer_Order_Item_Update_Column>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};

/** ordering options when selecting data from "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Order_By = {
  fromwarehouseid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  substance?: Maybe<Product_Substance_Order_By>;
  towarehouseid?: Maybe<Order_By>;
  transfer_order?: Maybe<Stock_Transfer_Order_Order_By>;
  transfer_orderid?: Maybe<Order_By>;
  warehouse?: Maybe<Stock_Warehouse_Order_By>;
  warehouseByFromwarehouseid?: Maybe<Stock_Warehouse_Order_By>;
};

/** primary key columns input for table: "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.tranfer_order_item" */
export enum Stock_Tranfer_Order_Item_Select_Column {
  /** column name */
  Fromwarehouseid = 'fromwarehouseid',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  Subsctanceid = 'subsctanceid',
  /** column name */
  Towarehouseid = 'towarehouseid',
  /** column name */
  TransferOrderid = 'transfer_orderid'
}

/** input type for updating data in table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Set_Input = {
  fromwarehouseid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  towarehouseid?: Maybe<Scalars['uuid']>;
  transfer_orderid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stock_Tranfer_Order_Item_Stddev_Fields = {
  __typename?: 'stock_tranfer_order_item_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Tranfer_Order_Item_Stddev_Pop_Fields = {
  __typename?: 'stock_tranfer_order_item_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Tranfer_Order_Item_Stddev_Samp_Fields = {
  __typename?: 'stock_tranfer_order_item_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Tranfer_Order_Item_Sum_Fields = {
  __typename?: 'stock_tranfer_order_item_sum_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.tranfer_order_item" */
export enum Stock_Tranfer_Order_Item_Update_Column {
  /** column name */
  Fromwarehouseid = 'fromwarehouseid',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  Subsctanceid = 'subsctanceid',
  /** column name */
  Towarehouseid = 'towarehouseid',
  /** column name */
  TransferOrderid = 'transfer_orderid'
}

/** aggregate var_pop on columns */
export type Stock_Tranfer_Order_Item_Var_Pop_Fields = {
  __typename?: 'stock_tranfer_order_item_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Tranfer_Order_Item_Var_Samp_Fields = {
  __typename?: 'stock_tranfer_order_item_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Tranfer_Order_Item_Variance_Fields = {
  __typename?: 'stock_tranfer_order_item_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock.tranfer_order_item" */
export type Stock_Tranfer_Order_Item_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "stock.transfer_order" */
export type Stock_Transfer_Order = {
  __typename?: 'stock_transfer_order';
  createdAt: Scalars['date'];
  createdBy: Scalars['String'];
  date: Scalars['date'];
  deadline: Scalars['date'];
  id: Scalars['uuid'];
  updatedAt: Scalars['date'];
  updatedBy: Scalars['String'];
};

/** aggregated selection of "stock.transfer_order" */
export type Stock_Transfer_Order_Aggregate = {
  __typename?: 'stock_transfer_order_aggregate';
  aggregate?: Maybe<Stock_Transfer_Order_Aggregate_Fields>;
  nodes: Array<Stock_Transfer_Order>;
};

/** aggregate fields of "stock.transfer_order" */
export type Stock_Transfer_Order_Aggregate_Fields = {
  __typename?: 'stock_transfer_order_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Transfer_Order_Max_Fields>;
  min?: Maybe<Stock_Transfer_Order_Min_Fields>;
};


/** aggregate fields of "stock.transfer_order" */
export type Stock_Transfer_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Transfer_Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.transfer_order" */
export type Stock_Transfer_Order_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Transfer_Order_Max_Order_By>;
  min?: Maybe<Stock_Transfer_Order_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stock.transfer_order" */
export type Stock_Transfer_Order_Arr_Rel_Insert_Input = {
  data: Array<Stock_Transfer_Order_Insert_Input>;
  on_conflict?: Maybe<Stock_Transfer_Order_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stock.transfer_order". All fields are combined with a logical 'AND'. */
export type Stock_Transfer_Order_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Transfer_Order_Bool_Exp>>>;
  _not?: Maybe<Stock_Transfer_Order_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Transfer_Order_Bool_Exp>>>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  deadline?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.transfer_order" */
export enum Stock_Transfer_Order_Constraint {
  /** unique or primary key constraint */
  TransferOrderPkey = 'transfer_order_pkey'
}

/** input type for inserting data into table "stock.transfer_order" */
export type Stock_Transfer_Order_Insert_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  deadline?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Stock_Transfer_Order_Max_Fields = {
  __typename?: 'stock_transfer_order_max_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  deadline?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stock.transfer_order" */
export type Stock_Transfer_Order_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  deadline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Transfer_Order_Min_Fields = {
  __typename?: 'stock_transfer_order_min_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  deadline?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stock.transfer_order" */
export type Stock_Transfer_Order_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  deadline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.transfer_order" */
export type Stock_Transfer_Order_Mutation_Response = {
  __typename?: 'stock_transfer_order_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Transfer_Order>;
};

/** input type for inserting object relation for remote table "stock.transfer_order" */
export type Stock_Transfer_Order_Obj_Rel_Insert_Input = {
  data: Stock_Transfer_Order_Insert_Input;
  on_conflict?: Maybe<Stock_Transfer_Order_On_Conflict>;
};

/** on conflict condition type for table "stock.transfer_order" */
export type Stock_Transfer_Order_On_Conflict = {
  constraint: Stock_Transfer_Order_Constraint;
  update_columns: Array<Stock_Transfer_Order_Update_Column>;
  where?: Maybe<Stock_Transfer_Order_Bool_Exp>;
};

/** ordering options when selecting data from "stock.transfer_order" */
export type Stock_Transfer_Order_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  deadline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.transfer_order" */
export type Stock_Transfer_Order_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.transfer_order" */
export enum Stock_Transfer_Order_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Date = 'date',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "stock.transfer_order" */
export type Stock_Transfer_Order_Set_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  deadline?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** update columns of table "stock.transfer_order" */
export enum Stock_Transfer_Order_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Date = 'date',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** columns and relationships of "stock.warehouse" */
export type Stock_Warehouse = {
  __typename?: 'stock_warehouse';
  /** An object relationship */
  company: Management_Company;
  companyid: Scalars['uuid'];
  createdAt: Scalars['date'];
  createdBy: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  salesPoint: Management_SalesPoint;
  salesPointid: Scalars['uuid'];
  /** An array relationship */
  tranferOrderItemsByTowarehouseid: Array<Stock_Tranfer_Order_Item>;
  /** An aggregated array relationship */
  tranferOrderItemsByTowarehouseid_aggregate: Stock_Tranfer_Order_Item_Aggregate;
  /** An array relationship */
  tranfer_order_items: Array<Stock_Tranfer_Order_Item>;
  /** An aggregated array relationship */
  tranfer_order_items_aggregate: Stock_Tranfer_Order_Item_Aggregate;
  type: Scalars['String'];
  updatedAt: Scalars['date'];
  updatedBy: Scalars['String'];
  /** An array relationship */
  warehouse_subsctances: Array<Stock_Warehouse_Subsctance>;
  /** An aggregated array relationship */
  warehouse_subsctances_aggregate: Stock_Warehouse_Subsctance_Aggregate;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseTranferOrderItemsByTowarehouseidArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseTranferOrderItemsByTowarehouseid_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseTranfer_Order_ItemsArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseTranfer_Order_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseWarehouse_SubsctancesArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};


/** columns and relationships of "stock.warehouse" */
export type Stock_WarehouseWarehouse_Subsctances_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};

/** aggregated selection of "stock.warehouse" */
export type Stock_Warehouse_Aggregate = {
  __typename?: 'stock_warehouse_aggregate';
  aggregate?: Maybe<Stock_Warehouse_Aggregate_Fields>;
  nodes: Array<Stock_Warehouse>;
};

/** aggregate fields of "stock.warehouse" */
export type Stock_Warehouse_Aggregate_Fields = {
  __typename?: 'stock_warehouse_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Warehouse_Max_Fields>;
  min?: Maybe<Stock_Warehouse_Min_Fields>;
};


/** aggregate fields of "stock.warehouse" */
export type Stock_Warehouse_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Warehouse_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.warehouse" */
export type Stock_Warehouse_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Warehouse_Max_Order_By>;
  min?: Maybe<Stock_Warehouse_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stock.warehouse" */
export type Stock_Warehouse_Arr_Rel_Insert_Input = {
  data: Array<Stock_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Warehouse_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stock.warehouse". All fields are combined with a logical 'AND'. */
export type Stock_Warehouse_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Warehouse_Bool_Exp>>>;
  _not?: Maybe<Stock_Warehouse_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Warehouse_Bool_Exp>>>;
  company?: Maybe<Management_Company_Bool_Exp>;
  companyid?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  salesPoint?: Maybe<Management_SalesPoint_Bool_Exp>;
  salesPointid?: Maybe<Uuid_Comparison_Exp>;
  tranferOrderItemsByTowarehouseid?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
  tranfer_order_items?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<String_Comparison_Exp>;
  warehouse_subsctances?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};

/** unique or primary key constraints on table "stock.warehouse" */
export enum Stock_Warehouse_Constraint {
  /** unique or primary key constraint */
  WarehousePkey = 'warehouse_pkey'
}

/** input type for inserting data into table "stock.warehouse" */
export type Stock_Warehouse_Insert_Input = {
  company?: Maybe<Management_Company_Obj_Rel_Insert_Input>;
  companyid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  salesPoint?: Maybe<Management_SalesPoint_Obj_Rel_Insert_Input>;
  salesPointid?: Maybe<Scalars['uuid']>;
  tranferOrderItemsByTowarehouseid?: Maybe<Stock_Tranfer_Order_Item_Arr_Rel_Insert_Input>;
  tranfer_order_items?: Maybe<Stock_Tranfer_Order_Item_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
  warehouse_subsctances?: Maybe<Stock_Warehouse_Subsctance_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Stock_Warehouse_Max_Fields = {
  __typename?: 'stock_warehouse_max_fields';
  companyid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  salesPointid?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stock.warehouse" */
export type Stock_Warehouse_Max_Order_By = {
  companyid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salesPointid?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Warehouse_Min_Fields = {
  __typename?: 'stock_warehouse_min_fields';
  companyid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  salesPointid?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stock.warehouse" */
export type Stock_Warehouse_Min_Order_By = {
  companyid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salesPointid?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.warehouse" */
export type Stock_Warehouse_Mutation_Response = {
  __typename?: 'stock_warehouse_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Warehouse>;
};

/** input type for inserting object relation for remote table "stock.warehouse" */
export type Stock_Warehouse_Obj_Rel_Insert_Input = {
  data: Stock_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Warehouse_On_Conflict>;
};

/** on conflict condition type for table "stock.warehouse" */
export type Stock_Warehouse_On_Conflict = {
  constraint: Stock_Warehouse_Constraint;
  update_columns: Array<Stock_Warehouse_Update_Column>;
  where?: Maybe<Stock_Warehouse_Bool_Exp>;
};

/** ordering options when selecting data from "stock.warehouse" */
export type Stock_Warehouse_Order_By = {
  company?: Maybe<Management_Company_Order_By>;
  companyid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salesPoint?: Maybe<Management_SalesPoint_Order_By>;
  salesPointid?: Maybe<Order_By>;
  tranferOrderItemsByTowarehouseid_aggregate?: Maybe<Stock_Tranfer_Order_Item_Aggregate_Order_By>;
  tranfer_order_items_aggregate?: Maybe<Stock_Tranfer_Order_Item_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  warehouse_subsctances_aggregate?: Maybe<Stock_Warehouse_Subsctance_Aggregate_Order_By>;
};

/** primary key columns input for table: "stock.warehouse" */
export type Stock_Warehouse_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.warehouse" */
export enum Stock_Warehouse_Select_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SalesPointid = 'salesPointid',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "stock.warehouse" */
export type Stock_Warehouse_Set_Input = {
  companyid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  salesPointid?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** columns and relationships of "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance = {
  __typename?: 'stock_warehouse_subsctance';
  quantity: Scalars['Float'];
  subsctanceid: Scalars['uuid'];
  /** An object relationship */
  substance: Product_Substance;
  /** An object relationship */
  warehouse: Stock_Warehouse;
  warehouseid: Scalars['uuid'];
};

/** aggregated selection of "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Aggregate = {
  __typename?: 'stock_warehouse_subsctance_aggregate';
  aggregate?: Maybe<Stock_Warehouse_Subsctance_Aggregate_Fields>;
  nodes: Array<Stock_Warehouse_Subsctance>;
};

/** aggregate fields of "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Aggregate_Fields = {
  __typename?: 'stock_warehouse_subsctance_aggregate_fields';
  avg?: Maybe<Stock_Warehouse_Subsctance_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Warehouse_Subsctance_Max_Fields>;
  min?: Maybe<Stock_Warehouse_Subsctance_Min_Fields>;
  stddev?: Maybe<Stock_Warehouse_Subsctance_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Warehouse_Subsctance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Warehouse_Subsctance_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Warehouse_Subsctance_Sum_Fields>;
  var_pop?: Maybe<Stock_Warehouse_Subsctance_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Warehouse_Subsctance_Var_Samp_Fields>;
  variance?: Maybe<Stock_Warehouse_Subsctance_Variance_Fields>;
};


/** aggregate fields of "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Aggregate_Order_By = {
  avg?: Maybe<Stock_Warehouse_Subsctance_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Warehouse_Subsctance_Max_Order_By>;
  min?: Maybe<Stock_Warehouse_Subsctance_Min_Order_By>;
  stddev?: Maybe<Stock_Warehouse_Subsctance_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Warehouse_Subsctance_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Warehouse_Subsctance_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Warehouse_Subsctance_Sum_Order_By>;
  var_pop?: Maybe<Stock_Warehouse_Subsctance_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Warehouse_Subsctance_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Warehouse_Subsctance_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Arr_Rel_Insert_Input = {
  data: Array<Stock_Warehouse_Subsctance_Insert_Input>;
  on_conflict?: Maybe<Stock_Warehouse_Subsctance_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Warehouse_Subsctance_Avg_Fields = {
  __typename?: 'stock_warehouse_subsctance_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock.warehouse_subsctance". All fields are combined with a logical 'AND'. */
export type Stock_Warehouse_Subsctance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Warehouse_Subsctance_Bool_Exp>>>;
  _not?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Warehouse_Subsctance_Bool_Exp>>>;
  quantity?: Maybe<Float_Comparison_Exp>;
  subsctanceid?: Maybe<Uuid_Comparison_Exp>;
  substance?: Maybe<Product_Substance_Bool_Exp>;
  warehouse?: Maybe<Stock_Warehouse_Bool_Exp>;
  warehouseid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.warehouse_subsctance" */
export enum Stock_Warehouse_Subsctance_Constraint {
  /** unique or primary key constraint */
  WarehouseSubsctancePkey = 'warehouse_subsctance_pkey'
}

/** input type for incrementing integer column in table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Inc_Input = {
  quantity?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Insert_Input = {
  quantity?: Maybe<Scalars['Float']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  warehouse?: Maybe<Stock_Warehouse_Obj_Rel_Insert_Input>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_Warehouse_Subsctance_Max_Fields = {
  __typename?: 'stock_warehouse_subsctance_max_fields';
  quantity?: Maybe<Scalars['Float']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Max_Order_By = {
  quantity?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Warehouse_Subsctance_Min_Fields = {
  __typename?: 'stock_warehouse_subsctance_min_fields';
  quantity?: Maybe<Scalars['Float']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Min_Order_By = {
  quantity?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Mutation_Response = {
  __typename?: 'stock_warehouse_subsctance_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Warehouse_Subsctance>;
};

/** input type for inserting object relation for remote table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Obj_Rel_Insert_Input = {
  data: Stock_Warehouse_Subsctance_Insert_Input;
  on_conflict?: Maybe<Stock_Warehouse_Subsctance_On_Conflict>;
};

/** on conflict condition type for table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_On_Conflict = {
  constraint: Stock_Warehouse_Subsctance_Constraint;
  update_columns: Array<Stock_Warehouse_Subsctance_Update_Column>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};

/** ordering options when selecting data from "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Order_By = {
  quantity?: Maybe<Order_By>;
  subsctanceid?: Maybe<Order_By>;
  substance?: Maybe<Product_Substance_Order_By>;
  warehouse?: Maybe<Stock_Warehouse_Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Pk_Columns_Input = {
  subsctanceid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};

/** select columns of table "stock.warehouse_subsctance" */
export enum Stock_Warehouse_Subsctance_Select_Column {
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Subsctanceid = 'subsctanceid',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** input type for updating data in table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Set_Input = {
  quantity?: Maybe<Scalars['Float']>;
  subsctanceid?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stock_Warehouse_Subsctance_Stddev_Fields = {
  __typename?: 'stock_warehouse_subsctance_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Warehouse_Subsctance_Stddev_Pop_Fields = {
  __typename?: 'stock_warehouse_subsctance_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Warehouse_Subsctance_Stddev_Samp_Fields = {
  __typename?: 'stock_warehouse_subsctance_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Warehouse_Subsctance_Sum_Fields = {
  __typename?: 'stock_warehouse_subsctance_sum_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.warehouse_subsctance" */
export enum Stock_Warehouse_Subsctance_Update_Column {
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Subsctanceid = 'subsctanceid',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** aggregate var_pop on columns */
export type Stock_Warehouse_Subsctance_Var_Pop_Fields = {
  __typename?: 'stock_warehouse_subsctance_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Warehouse_Subsctance_Var_Samp_Fields = {
  __typename?: 'stock_warehouse_subsctance_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Warehouse_Subsctance_Variance_Fields = {
  __typename?: 'stock_warehouse_subsctance_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock.warehouse_subsctance" */
export type Stock_Warehouse_Subsctance_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.warehouse" */
export enum Stock_Warehouse_Update_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SalesPointid = 'salesPointid',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contact.address" */
  contact_address: Array<Contact_Address>;
  /** fetch aggregated fields from the table: "contact.address" */
  contact_address_aggregate: Contact_Address_Aggregate;
  /** fetch data from the table: "contact.address" using primary key columns */
  contact_address_by_pk?: Maybe<Contact_Address>;
  /** fetch data from the table: "contact.contact" */
  contact_contact: Array<Contact_Contact>;
  /** fetch data from the table: "contact.contact_address" */
  contact_contact_address: Array<Contact_Contact_Address>;
  /** fetch aggregated fields from the table: "contact.contact_address" */
  contact_contact_address_aggregate: Contact_Contact_Address_Aggregate;
  /** fetch data from the table: "contact.contact_address" using primary key columns */
  contact_contact_address_by_pk?: Maybe<Contact_Contact_Address>;
  /** fetch data from the table: "contact.contact_addresses_view" */
  contact_contact_addresses_view: Array<Contact_Contact_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.contact_addresses_view" */
  contact_contact_addresses_view_aggregate: Contact_Contact_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.contact" */
  contact_contact_aggregate: Contact_Contact_Aggregate;
  /** fetch data from the table: "contact.contact" using primary key columns */
  contact_contact_by_pk?: Maybe<Contact_Contact>;
  /** fetch data from the table: "contact.contact_customers_view" */
  contact_contact_customers_view: Array<Contact_Contact_Customers_View>;
  /** fetch aggregated fields from the table: "contact.contact_customers_view" */
  contact_contact_customers_view_aggregate: Contact_Contact_Customers_View_Aggregate;
  /** fetch data from the table: "contact.contact_providers_view" */
  contact_contact_providers_view: Array<Contact_Contact_Providers_View>;
  /** fetch aggregated fields from the table: "contact.contact_providers_view" */
  contact_contact_providers_view_aggregate: Contact_Contact_Providers_View_Aggregate;
  /** fetch data from the table: "contact.customer" */
  contact_customer: Array<Contact_Customer>;
  /** fetch data from the table: "contact.customer_address" */
  contact_customer_address: Array<Contact_Customer_Address>;
  /** fetch aggregated fields from the table: "contact.customer_address" */
  contact_customer_address_aggregate: Contact_Customer_Address_Aggregate;
  /** fetch data from the table: "contact.customer_address" using primary key columns */
  contact_customer_address_by_pk?: Maybe<Contact_Customer_Address>;
  /** fetch data from the table: "contact.customer_addresses_view" */
  contact_customer_addresses_view: Array<Contact_Customer_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.customer_addresses_view" */
  contact_customer_addresses_view_aggregate: Contact_Customer_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.customer" */
  contact_customer_aggregate: Contact_Customer_Aggregate;
  /** fetch data from the table: "contact.customer" using primary key columns */
  contact_customer_by_pk?: Maybe<Contact_Customer>;
  /** fetch data from the table: "contact.customer_contact" */
  contact_customer_contact: Array<Contact_Customer_Contact>;
  /** fetch aggregated fields from the table: "contact.customer_contact" */
  contact_customer_contact_aggregate: Contact_Customer_Contact_Aggregate;
  /** fetch data from the table: "contact.customer_contact" using primary key columns */
  contact_customer_contact_by_pk?: Maybe<Contact_Customer_Contact>;
  /** fetch data from the table: "contact.customer_contacts_view" */
  contact_customer_contacts_view: Array<Contact_Customer_Contacts_View>;
  /** fetch aggregated fields from the table: "contact.customer_contacts_view" */
  contact_customer_contacts_view_aggregate: Contact_Customer_Contacts_View_Aggregate;
  /** fetch data from the table: "contact.provider" */
  contact_provider: Array<Contact_Provider>;
  /** fetch data from the table: "contact.provider_address" */
  contact_provider_address: Array<Contact_Provider_Address>;
  /** fetch aggregated fields from the table: "contact.provider_address" */
  contact_provider_address_aggregate: Contact_Provider_Address_Aggregate;
  /** fetch data from the table: "contact.provider_address" using primary key columns */
  contact_provider_address_by_pk?: Maybe<Contact_Provider_Address>;
  /** fetch data from the table: "contact.provider_addresses_view" */
  contact_provider_addresses_view: Array<Contact_Provider_Addresses_View>;
  /** fetch aggregated fields from the table: "contact.provider_addresses_view" */
  contact_provider_addresses_view_aggregate: Contact_Provider_Addresses_View_Aggregate;
  /** fetch aggregated fields from the table: "contact.provider" */
  contact_provider_aggregate: Contact_Provider_Aggregate;
  /** fetch data from the table: "contact.provider" using primary key columns */
  contact_provider_by_pk?: Maybe<Contact_Provider>;
  /** fetch data from the table: "contact.provider_contact" */
  contact_provider_contact: Array<Contact_Provider_Contact>;
  /** fetch aggregated fields from the table: "contact.provider_contact" */
  contact_provider_contact_aggregate: Contact_Provider_Contact_Aggregate;
  /** fetch data from the table: "contact.provider_contact" using primary key columns */
  contact_provider_contact_by_pk?: Maybe<Contact_Provider_Contact>;
  /** fetch data from the table: "contact.provider_contacts_view" */
  contact_provider_contacts_view: Array<Contact_Provider_Contacts_View>;
  /** fetch aggregated fields from the table: "contact.provider_contacts_view" */
  contact_provider_contacts_view_aggregate: Contact_Provider_Contacts_View_Aggregate;
  /** fetch data from the table: "management.company" */
  management_company: Array<Management_Company>;
  /** fetch aggregated fields from the table: "management.company" */
  management_company_aggregate: Management_Company_Aggregate;
  /** fetch data from the table: "management.company" using primary key columns */
  management_company_by_pk?: Maybe<Management_Company>;
  /** fetch data from the table: "management.salesPoint" */
  management_salesPoint: Array<Management_SalesPoint>;
  /** fetch aggregated fields from the table: "management.salesPoint" */
  management_salesPoint_aggregate: Management_SalesPoint_Aggregate;
  /** fetch data from the table: "management.salesPoint" using primary key columns */
  management_salesPoint_by_pk?: Maybe<Management_SalesPoint>;
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
  /** fetch data from the table: "product.accessory" */
  product_accessory: Array<Product_Accessory>;
  /** fetch data from the table: "product.accessoryTypes" */
  product_accessoryTypes: Array<Product_AccessoryTypes>;
  /** fetch aggregated fields from the table: "product.accessoryTypes" */
  product_accessoryTypes_aggregate: Product_AccessoryTypes_Aggregate;
  /** fetch data from the table: "product.accessoryTypes" using primary key columns */
  product_accessoryTypes_by_pk?: Maybe<Product_AccessoryTypes>;
  /** fetch aggregated fields from the table: "product.accessory" */
  product_accessory_aggregate: Product_Accessory_Aggregate;
  /** fetch data from the table: "product.accessory" using primary key columns */
  product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** fetch data from the table: "product.consumable" */
  product_consumable: Array<Product_Consumable>;
  /** fetch data from the table: "product.consumableCategory" */
  product_consumableCategory: Array<Product_ConsumableCategory>;
  /** fetch aggregated fields from the table: "product.consumableCategory" */
  product_consumableCategory_aggregate: Product_ConsumableCategory_Aggregate;
  /** fetch data from the table: "product.consumableCategory" using primary key columns */
  product_consumableCategory_by_pk?: Maybe<Product_ConsumableCategory>;
  /** fetch aggregated fields from the table: "product.consumable" */
  product_consumable_aggregate: Product_Consumable_Aggregate;
  /** fetch data from the table: "product.consumable" using primary key columns */
  product_consumable_by_pk?: Maybe<Product_Consumable>;
  /** fetch data from the table: "product.glass" */
  product_glass: Array<Product_Glass>;
  /** fetch aggregated fields from the table: "product.glass" */
  product_glass_aggregate: Product_Glass_Aggregate;
  /** fetch data from the table: "product.glass" using primary key columns */
  product_glass_by_pk?: Maybe<Product_Glass>;
  /** fetch data from the table: "product.optionalServiceParam" */
  product_optionalServiceParam: Array<Product_OptionalServiceParam>;
  /** fetch data from the table: "product.optionalServiceParamValues" */
  product_optionalServiceParamValues: Array<Product_OptionalServiceParamValues>;
  /** fetch aggregated fields from the table: "product.optionalServiceParamValues" */
  product_optionalServiceParamValues_aggregate: Product_OptionalServiceParamValues_Aggregate;
  /** fetch data from the table: "product.optionalServiceParamValues" using primary key columns */
  product_optionalServiceParamValues_by_pk?: Maybe<Product_OptionalServiceParamValues>;
  /** fetch aggregated fields from the table: "product.optionalServiceParam" */
  product_optionalServiceParam_aggregate: Product_OptionalServiceParam_Aggregate;
  /** fetch data from the table: "product.optionalServiceParam" using primary key columns */
  product_optionalServiceParam_by_pk?: Maybe<Product_OptionalServiceParam>;
  /** fetch data from the table: "product.product" */
  product_product: Array<Product_Product>;
  /** fetch aggregated fields from the table: "product.product" */
  product_product_aggregate: Product_Product_Aggregate;
  /** fetch data from the table: "product.product" using primary key columns */
  product_product_by_pk?: Maybe<Product_Product>;
  /** fetch data from the table: "product.product_companies" */
  product_product_companies: Array<Product_Product_Companies>;
  /** fetch aggregated fields from the table: "product.product_companies" */
  product_product_companies_aggregate: Product_Product_Companies_Aggregate;
  /** fetch data from the table: "product.product_companies" using primary key columns */
  product_product_companies_by_pk?: Maybe<Product_Product_Companies>;
  /** fetch data from the table: "product.product_companies_view" */
  product_product_companies_view: Array<Product_Product_Companies_View>;
  /** fetch aggregated fields from the table: "product.product_companies_view" */
  product_product_companies_view_aggregate: Product_Product_Companies_View_Aggregate;
  /** fetch data from the table: "product.product_unit" */
  product_product_unit: Array<Product_Product_Unit>;
  /** fetch aggregated fields from the table: "product.product_unit" */
  product_product_unit_aggregate: Product_Product_Unit_Aggregate;
  /** fetch data from the table: "product.product_unit" using primary key columns */
  product_product_unit_by_pk?: Maybe<Product_Product_Unit>;
  /** fetch data from the table: "product.service" */
  product_service: Array<Product_Service>;
  /** fetch data from the table: "product.serviceConfig" */
  product_serviceConfig: Array<Product_ServiceConfig>;
  /** fetch aggregated fields from the table: "product.serviceConfig" */
  product_serviceConfig_aggregate: Product_ServiceConfig_Aggregate;
  /** fetch data from the table: "product.serviceConfig" using primary key columns */
  product_serviceConfig_by_pk?: Maybe<Product_ServiceConfig>;
  /** fetch aggregated fields from the table: "product.service" */
  product_service_aggregate: Product_Service_Aggregate;
  /** fetch data from the table: "product.service_consumable" */
  product_service_consumable: Array<Product_Service_Consumable>;
  /** fetch aggregated fields from the table: "product.service_consumable" */
  product_service_consumable_aggregate: Product_Service_Consumable_Aggregate;
  /** fetch data from the table: "product.service_consumable" using primary key columns */
  product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** fetch data from the table: "product.substance" */
  product_substance: Array<Product_Substance>;
  /** fetch aggregated fields from the table: "product.substance" */
  product_substance_aggregate: Product_Substance_Aggregate;
  /** fetch data from the table: "product.substance" using primary key columns */
  product_substance_by_pk?: Maybe<Product_Substance>;
  /** fetch data from the table: "stock.item_tranfer" */
  stock_item_tranfer: Array<Stock_Item_Tranfer>;
  /** fetch aggregated fields from the table: "stock.item_tranfer" */
  stock_item_tranfer_aggregate: Stock_Item_Tranfer_Aggregate;
  /** fetch data from the table: "stock.item_tranfer" using primary key columns */
  stock_item_tranfer_by_pk?: Maybe<Stock_Item_Tranfer>;
  /** fetch data from the table: "stock.tranfer_order_item" */
  stock_tranfer_order_item: Array<Stock_Tranfer_Order_Item>;
  /** fetch aggregated fields from the table: "stock.tranfer_order_item" */
  stock_tranfer_order_item_aggregate: Stock_Tranfer_Order_Item_Aggregate;
  /** fetch data from the table: "stock.tranfer_order_item" using primary key columns */
  stock_tranfer_order_item_by_pk?: Maybe<Stock_Tranfer_Order_Item>;
  /** fetch data from the table: "stock.transfer_order" */
  stock_transfer_order: Array<Stock_Transfer_Order>;
  /** fetch aggregated fields from the table: "stock.transfer_order" */
  stock_transfer_order_aggregate: Stock_Transfer_Order_Aggregate;
  /** fetch data from the table: "stock.transfer_order" using primary key columns */
  stock_transfer_order_by_pk?: Maybe<Stock_Transfer_Order>;
  /** fetch data from the table: "stock.warehouse" */
  stock_warehouse: Array<Stock_Warehouse>;
  /** fetch aggregated fields from the table: "stock.warehouse" */
  stock_warehouse_aggregate: Stock_Warehouse_Aggregate;
  /** fetch data from the table: "stock.warehouse" using primary key columns */
  stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
  /** fetch data from the table: "stock.warehouse_subsctance" */
  stock_warehouse_subsctance: Array<Stock_Warehouse_Subsctance>;
  /** fetch aggregated fields from the table: "stock.warehouse_subsctance" */
  stock_warehouse_subsctance_aggregate: Stock_Warehouse_Subsctance_Aggregate;
  /** fetch data from the table: "stock.warehouse_subsctance" using primary key columns */
  stock_warehouse_subsctance_by_pk?: Maybe<Stock_Warehouse_Subsctance>;
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
export type Subscription_RootContact_Contact_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Contact_Addresses_View_Bool_Exp>;
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
export type Subscription_RootContact_Contact_Customers_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Customers_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Customers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Customers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Customers_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Providers_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Contact_Providers_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Contact_Providers_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Contact_Providers_View_Order_By>>;
  where?: Maybe<Contact_Contact_Providers_View_Bool_Exp>;
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
export type Subscription_RootContact_Customer_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Customer_Addresses_View_Bool_Exp>;
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
export type Subscription_RootContact_Customer_Contacts_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Customer_Contacts_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Customer_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Customer_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Customer_Contacts_View_Bool_Exp>;
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
export type Subscription_RootContact_Provider_Addresses_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Addresses_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Addresses_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Addresses_View_Order_By>>;
  where?: Maybe<Contact_Provider_Addresses_View_Bool_Exp>;
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
export type Subscription_RootContact_Provider_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Subscription_RootContact_Provider_Contacts_ViewArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_Provider_Contacts_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Provider_Contacts_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Provider_Contacts_View_Order_By>>;
  where?: Maybe<Contact_Provider_Contacts_View_Bool_Exp>;
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
  id: Scalars['String'];
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
export type Subscription_RootProduct_AccessoryArgs = {
  distinct_on?: Maybe<Array<Product_Accessory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessory_Order_By>>;
  where?: Maybe<Product_Accessory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_AccessoryTypesArgs = {
  distinct_on?: Maybe<Array<Product_AccessoryTypes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_AccessoryTypes_Order_By>>;
  where?: Maybe<Product_AccessoryTypes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_AccessoryTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_AccessoryTypes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_AccessoryTypes_Order_By>>;
  where?: Maybe<Product_AccessoryTypes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_AccessoryTypes_By_PkArgs = {
  type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProduct_Accessory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Accessory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Accessory_Order_By>>;
  where?: Maybe<Product_Accessory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Accessory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_ConsumableArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ConsumableCategoryArgs = {
  distinct_on?: Maybe<Array<Product_ConsumableCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ConsumableCategory_Order_By>>;
  where?: Maybe<Product_ConsumableCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ConsumableCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_ConsumableCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ConsumableCategory_Order_By>>;
  where?: Maybe<Product_ConsumableCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ConsumableCategory_By_PkArgs = {
  category: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProduct_Consumable_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Consumable_Order_By>>;
  where?: Maybe<Product_Consumable_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Consumable_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_GlassArgs = {
  distinct_on?: Maybe<Array<Product_Glass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Glass_Order_By>>;
  where?: Maybe<Product_Glass_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Glass_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Glass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Glass_Order_By>>;
  where?: Maybe<Product_Glass_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Glass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParamArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParamValuesArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParamValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParamValues_By_PkArgs = {
  serviceServiceConfigid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParam_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_OptionalServiceParam_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_ProductArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Order_By>>;
  where?: Maybe<Product_Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_By_PkArgs = {
  code: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProduct_Product_CompaniesArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_Order_By>>;
  where?: Maybe<Product_Product_Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_Companies_By_PkArgs = {
  companyid: Scalars['uuid'];
  productcode: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProduct_Product_Companies_ViewArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_Companies_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Companies_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Companies_View_Order_By>>;
  where?: Maybe<Product_Product_Companies_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_UnitArgs = {
  distinct_on?: Maybe<Array<Product_Product_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Unit_Order_By>>;
  where?: Maybe<Product_Product_Unit_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Product_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Product_Unit_Order_By>>;
  where?: Maybe<Product_Product_Unit_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Product_Unit_By_PkArgs = {
  unit: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProduct_ServiceArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ServiceConfigArgs = {
  distinct_on?: Maybe<Array<Product_ServiceConfig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ServiceConfig_Order_By>>;
  where?: Maybe<Product_ServiceConfig_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ServiceConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_ServiceConfig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_ServiceConfig_Order_By>>;
  where?: Maybe<Product_ServiceConfig_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_ServiceConfig_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_Service_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_ConsumableArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_Consumable_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_Consumable_By_PkArgs = {
  consumableid: Scalars['uuid'];
  serviceid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProduct_SubstanceArgs = {
  distinct_on?: Maybe<Array<Product_Substance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Substance_Order_By>>;
  where?: Maybe<Product_Substance_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Substance_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Substance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Substance_Order_By>>;
  where?: Maybe<Product_Substance_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Substance_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Item_TranferArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Tranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Tranfer_Order_By>>;
  where?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Item_Tranfer_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Tranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Tranfer_Order_By>>;
  where?: Maybe<Stock_Item_Tranfer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Item_Tranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Tranfer_Order_ItemArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Tranfer_Order_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Tranfer_Order_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Tranfer_Order_Item_Order_By>>;
  where?: Maybe<Stock_Tranfer_Order_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Tranfer_Order_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Transfer_OrderArgs = {
  distinct_on?: Maybe<Array<Stock_Transfer_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Transfer_Order_Order_By>>;
  where?: Maybe<Stock_Transfer_Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Transfer_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Transfer_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Transfer_Order_Order_By>>;
  where?: Maybe<Stock_Transfer_Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Transfer_Order_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Order_By>>;
  where?: Maybe<Stock_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Order_By>>;
  where?: Maybe<Stock_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Warehouse_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Warehouse_SubsctanceArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Warehouse_Subsctance_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Warehouse_Subsctance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Warehouse_Subsctance_Order_By>>;
  where?: Maybe<Stock_Warehouse_Subsctance_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Warehouse_Subsctance_By_PkArgs = {
  subsctanceid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
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

export type AddContactAddressesMutationVariables = Exact<{
  addresses?: Array<Contact_Contact_Address_Insert_Input>;
}>;


export type AddContactAddressesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_contact_address?: Maybe<(
    { __typename?: 'contact_contact_address_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_contact_address' }
      & Pick<Contact_Contact_Address, 'addressid'>
    )> }
  )> }
);

export type AddCustomerAddressesMutationVariables = Exact<{
  addresses?: Array<Contact_Customer_Address_Insert_Input>;
}>;


export type AddCustomerAddressesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_customer_address?: Maybe<(
    { __typename?: 'contact_customer_address_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_customer_address' }
      & Pick<Contact_Customer_Address, 'addressid'>
    )> }
  )> }
);

export type AddProviderAddressesMutationVariables = Exact<{
  addresses?: Array<Contact_Provider_Address_Insert_Input>;
}>;


export type AddProviderAddressesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_provider_address?: Maybe<(
    { __typename?: 'contact_provider_address_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_provider_address' }
      & Pick<Contact_Provider_Address, 'addressid'>
    )> }
  )> }
);

export type DeleteContactMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteContactMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_contact_by_pk?: Maybe<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'name'>
  )> }
);

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_customer_by_pk?: Maybe<(
    { __typename?: 'contact_customer' }
    & Pick<Contact_Customer, 'id' | 'name'>
  )> }
);

export type DeleteManyContactsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']>>;
}>;


export type DeleteManyContactsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_contact?: Maybe<(
    { __typename?: 'contact_contact_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_contact' }
      & Pick<Contact_Contact, 'id'>
    )> }
  )> }
);

export type DeleteManyCustomersMutationVariables = Exact<{
  ids: Array<Scalars['uuid']>;
}>;


export type DeleteManyCustomersMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_customer?: Maybe<(
    { __typename?: 'contact_customer_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_customer' }
      & Pick<Contact_Customer, 'id'>
    )> }
  )> }
);

export type DeleteManyProvidersMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']>>;
}>;


export type DeleteManyProvidersMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_provider?: Maybe<(
    { __typename?: 'contact_provider_mutation_response' }
    & { returning: Array<(
      { __typename?: 'contact_provider' }
      & Pick<Contact_Provider, 'id'>
    )> }
  )> }
);

export type DeleteProviderMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProviderMutation = (
  { __typename?: 'mutation_root' }
  & { delete_contact_provider_by_pk?: Maybe<(
    { __typename?: 'contact_provider' }
    & Pick<Contact_Provider, 'id' | 'name'>
  )> }
);

export type InsertContactMutationVariables = Exact<{
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  addresses?: Array<Contact_Contact_Address_Insert_Input>;
  customers?: Array<Contact_Customer_Contact_Insert_Input>;
  providers?: Array<Contact_Provider_Contact_Insert_Input>;
}>;


export type InsertContactMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_contact_one?: Maybe<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'note' | 'phone'>
  )> }
);

export type InsertCustomerMutationVariables = Exact<{
  FAX?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  addresses?: Array<Contact_Customer_Address_Insert_Input>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  contacts?: Array<Contact_Customer_Contact_Insert_Input>;
}>;


export type InsertCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_customer_one?: Maybe<(
    { __typename?: 'contact_customer' }
    & Pick<Contact_Customer, 'id' | 'ICE' | 'IF' | 'code' | 'mail' | 'name' | 'phone' | 'type'>
  )> }
);

export type InsertProviderMutationVariables = Exact<{
  FAX?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  addresses?: Array<Contact_Provider_Address_Insert_Input>;
  contacts?: Array<Contact_Provider_Contact_Insert_Input>;
}>;


export type InsertProviderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_provider_one?: Maybe<(
    { __typename?: 'contact_provider' }
    & Pick<Contact_Provider, 'id' | 'code' | 'name' | 'note' | 'phone' | 'mail'>
  )> }
);

export type UpdateContactMutationVariables = Exact<{
  id: Scalars['uuid'];
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}>;


export type UpdateContactMutation = (
  { __typename?: 'mutation_root' }
  & { update_contact_contact_by_pk?: Maybe<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'note' | 'phone'>
  )> }
);

export type UpdateContactAddressesMutationVariables = Exact<{
  contactAddresses: Array<Contact_Contact_Address_Insert_Input>;
}>;


export type UpdateContactAddressesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_contact_address?: Maybe<(
    { __typename?: 'contact_contact_address_mutation_response' }
    & Pick<Contact_Contact_Address_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['uuid'];
  FAX?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  ICE?: Maybe<Scalars['String']>;
  IF?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}>;


export type UpdateCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { update_contact_customer_by_pk?: Maybe<(
    { __typename?: 'contact_customer' }
    & Pick<Contact_Customer, 'id' | 'ICE' | 'IF' | 'code' | 'mail' | 'name' | 'phone' | 'type'>
  )> }
);

export type UpdateProviderMutationVariables = Exact<{
  id: Scalars['uuid'];
  FAX?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}>;


export type UpdateProviderMutation = (
  { __typename?: 'mutation_root' }
  & { update_contact_provider_by_pk?: Maybe<(
    { __typename?: 'contact_provider' }
    & Pick<Contact_Provider, 'id' | 'code' | 'name' | 'note' | 'phone' | 'mail'>
  )> }
);

export type GetAllContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContactsQuery = (
  { __typename?: 'query_root' }
  & { contact_contact: Array<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'note' | 'phone'>
  )> }
);

export type GetAllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCustomersQuery = (
  { __typename?: 'query_root' }
  & { contact_customer: Array<(
    { __typename?: 'contact_customer' }
    & Pick<Contact_Customer, 'id' | 'ICE' | 'IF' | 'code' | 'mail' | 'name' | 'phone' | 'type'>
  )> }
);

export type GetAllProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProvidersQuery = (
  { __typename?: 'query_root' }
  & { contact_provider: Array<(
    { __typename?: 'contact_provider' }
    & Pick<Contact_Provider, 'id' | 'code' | 'name' | 'note' | 'phone' | 'mail'>
  )> }
);

export type GetContactByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetContactByIdQuery = (
  { __typename?: 'query_root' }
  & { contact_contact_by_pk?: Maybe<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'phone' | 'note' | 'createdAt' | 'createdBy' | 'updatedBy' | 'updatedAt'>
    & { addresses: Array<(
      { __typename?: 'contact_contact_addresses_view' }
      & Pick<Contact_Contact_Addresses_View, 'id' | 'address' | 'city' | 'zip'>
    )>, cutomers: Array<(
      { __typename?: 'contact_contact_customers_view' }
      & Pick<Contact_Contact_Customers_View, 'id' | 'code' | 'name' | 'phone' | 'mail' | 'note'>
    )>, providers: Array<(
      { __typename?: 'contact_contact_providers_view' }
      & Pick<Contact_Contact_Providers_View, 'id' | 'code' | 'name' | 'phone' | 'mail' | 'note'>
    )> }
  )> }
);

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCustomerByIdQuery = (
  { __typename?: 'query_root' }
  & { contact_customer_by_pk?: Maybe<(
    { __typename?: 'contact_customer' }
    & Pick<Contact_Customer, 'id' | 'ICE' | 'IF' | 'code' | 'mail' | 'name' | 'phone' | 'note' | 'website' | 'FAX' | 'type' | 'createdAt' | 'createdBy' | 'updatedBy' | 'updatedAt'>
    & { addresses: Array<(
      { __typename?: 'contact_customer_addresses_view' }
      & Pick<Contact_Customer_Addresses_View, 'id' | 'address' | 'city' | 'zip'>
    )>, contacts: Array<(
      { __typename?: 'contact_customer_contacts_view' }
      & Pick<Contact_Customer_Contacts_View, 'id' | 'code' | 'name' | 'phone' | 'mail' | 'note'>
    )> }
  )> }
);

export type GetProviderByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetProviderByIdQuery = (
  { __typename?: 'query_root' }
  & { contact_provider_by_pk?: Maybe<(
    { __typename?: 'contact_provider' }
    & Pick<Contact_Provider, 'id' | 'code' | 'name' | 'note' | 'phone' | 'mail' | 'FAX' | 'website' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy'>
    & { contacts: Array<(
      { __typename?: 'contact_provider_contacts_view' }
      & Pick<Contact_Provider_Contacts_View, 'id' | 'code' | 'name' | 'phone' | 'mail' | 'note'>
    )>, addresses: Array<(
      { __typename?: 'contact_provider_addresses_view' }
      & Pick<Contact_Provider_Addresses_View, 'id' | 'address' | 'city' | 'zip'>
    )> }
  )> }
);

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCompanyMutation = (
  { __typename?: 'mutation_root' }
  & { delete_management_company_by_pk?: Maybe<(
    { __typename?: 'management_company' }
    & Pick<Management_Company, 'name' | 'id'>
  )> }
);

export type DeleteSalePointMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteSalePointMutation = (
  { __typename?: 'mutation_root' }
  & { delete_management_salesPoint_by_pk?: Maybe<(
    { __typename?: 'management_salesPoint' }
    & Pick<Management_SalesPoint, 'name' | 'id'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
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
  & { insert_management_company_one?: Maybe<(
    { __typename?: 'management_company' }
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
  & { insert_management_salesPoint_one?: Maybe<(
    { __typename?: 'management_salesPoint' }
    & Pick<Management_SalesPoint, 'id' | 'address' | 'email' | 'fax' | 'name' | 'phone'>
  )> }
);

export type InsertUserMutationVariables = Exact<{
  CIN?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
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
      { __typename?: 'management_salesPoint' }
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
  & { update_management_company_by_pk?: Maybe<(
    { __typename?: 'management_company' }
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
  & { update_management_salesPoint_by_pk?: Maybe<(
    { __typename?: 'management_salesPoint' }
    & Pick<Management_SalesPoint, 'id' | 'address' | 'email' | 'fax' | 'name' | 'phone'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  CIN?: Maybe<Scalars['String']>;
  SalesPointsid?: Maybe<Scalars['uuid']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<Management_User_Role_Enum>;
  id: Scalars['String'];
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
      { __typename?: 'management_salesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export type GetAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompaniesQuery = (
  { __typename?: 'query_root' }
  & { management_company: Array<(
    { __typename?: 'management_company' }
    & Pick<Management_Company, 'id' | 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email' | 'name' | 'phone'>
  )> }
);

export type GetAllSalesPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSalesPointsQuery = (
  { __typename?: 'query_root' }
  & { management_salesPoint: Array<(
    { __typename?: 'management_salesPoint' }
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
      { __typename?: 'management_salesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'address' | 'phone'>
    )> }
  )> }
);

export type GetCompanyByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCompanyByIdQuery = (
  { __typename?: 'query_root' }
  & { management_company_by_pk?: Maybe<(
    { __typename?: 'management_company' }
    & Pick<Management_Company, 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email' | 'name' | 'phone' | 'website' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'id'>
  )> }
);

export type GetSalePointByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetSalePointByIdQuery = (
  { __typename?: 'query_root' }
  & { management_salesPoint_by_pk?: Maybe<(
    { __typename?: 'management_salesPoint' }
    & Pick<Management_SalesPoint, 'id' | 'address' | 'email' | 'fax' | 'name' | 'phone' | 'createdBy' | 'updatedBy' | 'createdAt' | 'updatedAt'>
    & { usersProfiles: Array<(
      { __typename?: 'management_userProfile' }
      & Pick<Management_UserProfile, 'id' | 'active' | 'firstname' | 'lastname' | 'phone' | 'username'>
      & { user_role: (
        { __typename?: 'management_user_role' }
        & Pick<Management_User_Role, 'name' | 'description'>
      ) }
    )> }
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { management_userProfile_by_pk?: Maybe<(
    { __typename?: 'management_userProfile' }
    & Pick<Management_UserProfile, 'CIN' | 'active' | 'createdAt' | 'createdBy' | 'email' | 'firstname' | 'id' | 'joinUs' | 'lastname' | 'leftUs' | 'phone' | 'role' | 'updatedAt' | 'updatedBy' | 'username' | 'SalesPointsid'>
    & { user_role: (
      { __typename?: 'management_user_role' }
      & Pick<Management_User_Role, 'description' | 'name'>
    ), SalesPoint?: Maybe<(
      { __typename?: 'management_salesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export type DeleteManyMutationVariables = Exact<{
  codes?: Maybe<Array<Scalars['String']>>;
}>;


export type DeleteManyMutation = (
  { __typename?: 'mutation_root' }
  & { delete_product_product?: Maybe<(
    { __typename?: 'product_product_mutation_response' }
    & Pick<Product_Product_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteOneMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type DeleteOneMutation = (
  { __typename?: 'mutation_root' }
  & { delete_product_product_by_pk?: Maybe<(
    { __typename?: 'product_product' }
    & Pick<Product_Product, 'code'>
  )> }
);

export type InsertAccessoryMutationVariables = Exact<{
  product?: Product_Product_Insert_Input;
  quota?: Maybe<Scalars['numeric']>;
  category?: Maybe<Product_AccessoryTypes_Enum>;
}>;


export type InsertAccessoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product_accessory_one?: Maybe<(
    { __typename?: 'product_accessory' }
    & Pick<Product_Accessory, 'id' | 'category' | 'quota'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type InsertConsumableMutationVariables = Exact<{
  product?: Product_Product_Insert_Input;
  category?: Maybe<Product_ConsumableCategory_Enum>;
}>;


export type InsertConsumableMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product_consumable_one?: Maybe<(
    { __typename?: 'product_consumable' }
    & Pick<Product_Consumable, 'id' | 'category'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'unit' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type InsertGlassMutationVariables = Exact<{
  color?: Maybe<Scalars['String']>;
  thickness?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  product?: Product_Product_Insert_Input;
}>;


export type InsertGlassMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product_glass_one?: Maybe<(
    { __typename?: 'product_glass' }
    & Pick<Product_Glass, 'color' | 'id' | 'thickness' | 'type'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type InsertServiceMutationVariables = Exact<{
  ParamValues?: Array<Product_OptionalServiceParamValues_Insert_Input>;
  serviceConfigid?: Maybe<Scalars['uuid']>;
  product?: Product_Product_Insert_Input;
}>;


export type InsertServiceMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product_service_one?: Maybe<(
    { __typename?: 'product_service' }
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin' | 'unit'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'id' | 'name'>
      )> }
    ) }
  )> }
);

export type InsertServiceConfigMutationVariables = Exact<{
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  param?: Array<Product_OptionalServiceParam_Insert_Input>;
}>;


export type InsertServiceConfigMutation = (
  { __typename?: 'mutation_root' }
  & { insert_product_serviceConfig_one?: Maybe<(
    { __typename?: 'product_serviceConfig' }
    & Pick<Product_ServiceConfig, 'labelFactory' | 'name' | 'id'>
    & { optionalServiceParams: Array<(
      { __typename?: 'product_optionalServiceParam' }
      & Pick<Product_OptionalServiceParam, 'param' | 'id'>
    )> }
  )> }
);

export type GetAllAccessoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAccessoriesQuery = (
  { __typename?: 'query_root' }
  & { product_accessory: Array<(
    { __typename?: 'product_accessory' }
    & Pick<Product_Accessory, 'id' | 'category' | 'quota'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetAllConsumablesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllConsumablesQuery = (
  { __typename?: 'query_root' }
  & { product_consumable: Array<(
    { __typename?: 'product_consumable' }
    & Pick<Product_Consumable, 'id' | 'category'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetAllGlassesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGlassesQuery = (
  { __typename?: 'query_root' }
  & { product_glass: Array<(
    { __typename?: 'product_glass' }
    & Pick<Product_Glass, 'id' | 'color' | 'thickness' | 'type'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = (
  { __typename?: 'query_root' }
  & { product_service: Array<(
    { __typename?: 'product_service' }
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetAllServiceConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServiceConfigQuery = (
  { __typename?: 'query_root' }
  & { product_serviceConfig: Array<(
    { __typename?: 'product_serviceConfig' }
    & Pick<Product_ServiceConfig, 'labelFactory' | 'name' | 'id'>
    & { optionalServiceParams: Array<(
      { __typename?: 'product_optionalServiceParam' }
      & Pick<Product_OptionalServiceParam, 'id' | 'param'>
    )> }
  )> }
);

export type GetAccessoryByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAccessoryByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { product_accessory_by_pk?: Maybe<(
    { __typename?: 'product_accessory' }
    & Pick<Product_Accessory, 'createdAt' | 'createdBy' | 'id' | 'category' | 'quota' | 'updatedAt' | 'updatedBy'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'unit' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetConsumableByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetConsumableByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { product_consumable_by_pk?: Maybe<(
    { __typename?: 'product_consumable' }
    & Pick<Product_Consumable, 'category' | 'createdAt' | 'createdBy' | 'id' | 'updatedAt' | 'updatedBy'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetGlassByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetGlassByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { product_glass_by_pk?: Maybe<(
    { __typename?: 'product_glass' }
    & Pick<Product_Glass, 'color' | 'createdBy' | 'createdAt' | 'id' | 'thickness' | 'type' | 'updatedAt' | 'updatedBy'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
      & { companies: Array<(
        { __typename?: 'product_product_companies_view' }
        & Pick<Product_Product_Companies_View, 'name' | 'id'>
      )> }
    ) }
  )> }
);

export type GetServiceConfigByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetServiceConfigByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { product_serviceConfig_by_pk?: Maybe<(
    { __typename?: 'product_serviceConfig' }
    & Pick<Product_ServiceConfig, 'id' | 'labelFactory' | 'name'>
    & { services: Array<(
      { __typename?: 'product_service' }
      & { product: (
        { __typename?: 'product_product' }
        & Pick<Product_Product, 'code' | 'label' | 'unit' | 'price' | 'priceMax' | 'priceMin'>
        & { companies: Array<(
          { __typename?: 'product_product_companies_view' }
          & Pick<Product_Product_Companies_View, 'name' | 'id'>
        )> }
      ) }
    )> }
  )> }
);

export const AddContactAddressesDocument = gql`
    mutation AddContactAddresses($addresses: [contact_contact_address_insert_input!]! = {contactid: "", address: {data: {address: "", city: "", zip: ""}}}) {
  insert_contact_contact_address(objects: $addresses) {
    returning {
      addressid
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddContactAddressesGQL extends Apollo.Mutation<AddContactAddressesMutation, AddContactAddressesMutationVariables> {
    document = AddContactAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddCustomerAddressesDocument = gql`
    mutation AddCustomerAddresses($addresses: [contact_customer_address_insert_input!]! = {address: {data: {address: "", city: "", zip: ""}}, customerid: ""}) {
  insert_contact_customer_address(objects: $addresses) {
    returning {
      addressid
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddCustomerAddressesGQL extends Apollo.Mutation<AddCustomerAddressesMutation, AddCustomerAddressesMutationVariables> {
    document = AddCustomerAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddProviderAddressesDocument = gql`
    mutation AddProviderAddresses($addresses: [contact_provider_address_insert_input!]! = {address: {data: {address: "", city: "", zip: ""}}, providerid: ""}) {
  insert_contact_provider_address(objects: $addresses) {
    returning {
      addressid
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddProviderAddressesGQL extends Apollo.Mutation<AddProviderAddressesMutation, AddProviderAddressesMutationVariables> {
    document = AddProviderAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteContactDocument = gql`
    mutation DeleteContact($id: uuid!) {
  delete_contact_contact_by_pk(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContactGQL extends Apollo.Mutation<DeleteContactMutation, DeleteContactMutationVariables> {
    document = DeleteContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCustomerDocument = gql`
    mutation DeleteCustomer($id: uuid!) {
  delete_contact_customer_by_pk(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCustomerGQL extends Apollo.Mutation<DeleteCustomerMutation, DeleteCustomerMutationVariables> {
    document = DeleteCustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteManyContactsDocument = gql`
    mutation DeleteManyContacts($ids: [uuid!]) {
  delete_contact_contact(where: {id: {_in: $ids}}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteManyContactsGQL extends Apollo.Mutation<DeleteManyContactsMutation, DeleteManyContactsMutationVariables> {
    document = DeleteManyContactsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteManyCustomersDocument = gql`
    mutation DeleteManyCustomers($ids: [uuid!]!) {
  delete_contact_customer(where: {id: {_in: $ids}}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteManyCustomersGQL extends Apollo.Mutation<DeleteManyCustomersMutation, DeleteManyCustomersMutationVariables> {
    document = DeleteManyCustomersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteManyProvidersDocument = gql`
    mutation DeleteManyProviders($ids: [uuid!]) {
  delete_contact_provider(where: {id: {_in: $ids}}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteManyProvidersGQL extends Apollo.Mutation<DeleteManyProvidersMutation, DeleteManyProvidersMutationVariables> {
    document = DeleteManyProvidersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteProviderDocument = gql`
    mutation DeleteProvider($id: uuid!) {
  delete_contact_provider_by_pk(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteProviderGQL extends Apollo.Mutation<DeleteProviderMutation, DeleteProviderMutationVariables> {
    document = DeleteProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertContactDocument = gql`
    mutation InsertContact($code: String, $mail: String, $name: String, $note: String, $phone: String, $addresses: [contact_contact_address_insert_input!]! = [], $customers: [contact_customer_contact_insert_input!]! = [], $providers: [contact_provider_contact_insert_input!]! = []) {
  insert_contact_contact_one(
    object: {code: $code, mail: $mail, name: $name, note: $note, phone: $phone, contact_addresses: {data: $addresses}, contact_customers: {data: $customers}, contact_providers: {data: $providers}}
  ) {
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
  export class InsertContactGQL extends Apollo.Mutation<InsertContactMutation, InsertContactMutationVariables> {
    document = InsertContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertCustomerDocument = gql`
    mutation InsertCustomer($FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String, $addresses: [contact_customer_address_insert_input!]! = [], $ICE: String, $IF: String, $type: String, $contacts: [contact_customer_contact_insert_input!]! = []) {
  insert_contact_customer_one(
    object: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website, customer_addresses: {data: $addresses}, ICE: $ICE, IF: $IF, type: $type, customer_contacts: {data: $contacts}}
  ) {
    id
    ICE
    IF
    code
    mail
    name
    phone
    type
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
export const InsertProviderDocument = gql`
    mutation InsertProvider($FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String, $addresses: [contact_provider_address_insert_input!]! = [], $contacts: [contact_provider_contact_insert_input!]! = []) {
  insert_contact_provider_one(
    object: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website, provider_addresses: {data: $addresses}, provider_contacts: {data: $contacts}}
  ) {
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
  export class InsertProviderGQL extends Apollo.Mutation<InsertProviderMutation, InsertProviderMutationVariables> {
    document = InsertProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateContactDocument = gql`
    mutation updateContact($id: uuid!, $code: String, $mail: String, $name: String, $note: String, $phone: String) {
  update_contact_contact_by_pk(
    pk_columns: {id: $id}
    _set: {code: $code, mail: $mail, name: $name, note: $note, phone: $phone}
  ) {
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
  export class UpdateContactGQL extends Apollo.Mutation<UpdateContactMutation, UpdateContactMutationVariables> {
    document = UpdateContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateContactAddressesDocument = gql`
    mutation updateContactAddresses($contactAddresses: [contact_contact_address_insert_input!]!) {
  insert_contact_contact_address(objects: $contactAddresses) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateContactAddressesGQL extends Apollo.Mutation<UpdateContactAddressesMutation, UpdateContactAddressesMutationVariables> {
    document = UpdateContactAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($id: uuid!, $FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String, $ICE: String, $IF: String, $type: String) {
  update_contact_customer_by_pk(
    pk_columns: {id: $id}
    _set: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website, ICE: $ICE, IF: $IF, type: $type}
  ) {
    id
    ICE
    IF
    code
    mail
    name
    phone
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCustomerGQL extends Apollo.Mutation<UpdateCustomerMutation, UpdateCustomerMutationVariables> {
    document = UpdateCustomerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProviderDocument = gql`
    mutation updateProvider($id: uuid!, $FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String) {
  update_contact_provider_by_pk(
    pk_columns: {id: $id}
    _set: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website}
  ) {
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
  export class UpdateProviderGQL extends Apollo.Mutation<UpdateProviderMutation, UpdateProviderMutationVariables> {
    document = UpdateProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllContactsDocument = gql`
    query GetAllContacts {
  contact_contact {
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
  contact_customer {
    id
    ICE
    IF
    code
    mail
    name
    phone
    type
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
  contact_provider {
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
  contact_contact_by_pk(id: $id) {
    id
    code
    mail
    name
    phone
    note
    addresses {
      id
      address
      city
      zip
    }
    cutomers {
      id
      code
      name
      phone
      mail
      note
    }
    providers {
      id
      code
      name
      phone
      mail
      note
    }
    createdAt
    createdBy
    updatedBy
    updatedAt
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
export const GetCustomerByIdDocument = gql`
    query GetCustomerById($id: uuid!) {
  contact_customer_by_pk(id: $id) {
    id
    ICE
    IF
    code
    mail
    name
    phone
    note
    website
    FAX
    type
    addresses {
      id
      address
      city
      zip
    }
    contacts {
      id
      code
      name
      phone
      mail
      note
    }
    createdAt
    createdBy
    updatedBy
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCustomerByIdGQL extends Apollo.Query<GetCustomerByIdQuery, GetCustomerByIdQueryVariables> {
    document = GetCustomerByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProviderByIdDocument = gql`
    query GetProviderById($id: uuid!) {
  contact_provider_by_pk(id: $id) {
    id
    code
    name
    note
    phone
    mail
    FAX
    website
    contacts {
      id
      code
      name
      phone
      mail
      note
    }
    addresses {
      id
      address
      city
      zip
    }
    createdAt
    createdBy
    updatedAt
    updatedBy
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProviderByIdGQL extends Apollo.Query<GetProviderByIdQuery, GetProviderByIdQueryVariables> {
    document = GetProviderByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCompanyDocument = gql`
    mutation DeleteCompany($id: uuid!) {
  delete_management_company_by_pk(id: $id) {
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
  delete_management_salesPoint_by_pk(id: $id) {
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
    mutation DeleteUser($id: String!) {
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
  insert_management_company_one(
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
  insert_management_salesPoint_one(
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
    mutation InsertUser($CIN: String, $active: Boolean = true, $SalesPointsid: uuid, $email: String, $firstname: String, $lastname: String, $phone: String, $username: String, $role: management_user_role_enum = admin) {
  insert_management_userProfile_one(
    object: {CIN: $CIN, active: $active, SalesPointsid: $SalesPointsid, email: $email, firstname: $firstname, lastname: $lastname, phone: $phone, username: $username, role: $role}
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
  update_management_company_by_pk(
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
  update_management_salesPoint_by_pk(
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
    mutation UpdateUser($CIN: String, $SalesPointsid: uuid, $active: Boolean = true, $email: String, $firstname: String, $lastname: String, $phone: String, $username: String, $role: management_user_role_enum = admin, $id: String!) {
  update_management_userProfile_by_pk(
    pk_columns: {id: $id}
    _set: {CIN: $CIN, SalesPointsid: $SalesPointsid, active: $active, email: $email, firstname: $firstname, lastname: $lastname, phone: $phone, username: $username, role: $role}
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
  management_company {
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
  management_salesPoint {
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
    query GetCompanyById($id: uuid!) {
  management_company_by_pk(id: $id) {
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
    query GetSalePointById($id: uuid!) {
  management_salesPoint_by_pk(id: $id) {
    id
    address
    email
    fax
    name
    phone
    usersProfiles {
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
    }
    createdBy
    updatedBy
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
    query getUserById($id: String!) {
  management_userProfile_by_pk(id: $id) {
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
export const DeleteManyDocument = gql`
    mutation DeleteMany($codes: [String!]) {
  delete_product_product(where: {code: {_in: $codes}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteManyGQL extends Apollo.Mutation<DeleteManyMutation, DeleteManyMutationVariables> {
    document = DeleteManyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneDocument = gql`
    mutation DeleteOne($code: String!) {
  delete_product_product_by_pk(code: $code) {
    code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneGQL extends Apollo.Mutation<DeleteOneMutation, DeleteOneMutationVariables> {
    document = DeleteOneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertAccessoryDocument = gql`
    mutation InsertAccessory($product: product_product_insert_input! = {code: "", label: "", unit: m2, price: 1.5, priceMax: 1.5, product_companies: {data: {companyid: ""}}, priceMin: 1.5}, $quota: numeric, $category: product_accessoryTypes_enum = ACCESSOIRE) {
  insert_product_accessory_one(
    object: {product: {data: $product}, quota: $quota, category: $category}
  ) {
    id
    category
    quota
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertAccessoryGQL extends Apollo.Mutation<InsertAccessoryMutation, InsertAccessoryMutationVariables> {
    document = InsertAccessoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertConsumableDocument = gql`
    mutation InsertConsumable($product: product_product_insert_input! = {code: "", label: "", unit: m2, price: 1.5, priceMax: 1.5, product_companies: {data: {companyid: ""}}, priceMin: 1.5}, $category: product_consumableCategory_enum) {
  insert_product_consumable_one(
    object: {product: {data: $product}, category: $category}
  ) {
    id
    product {
      code
      label
      price
      unit
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
    category
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertConsumableGQL extends Apollo.Mutation<InsertConsumableMutation, InsertConsumableMutationVariables> {
    document = InsertConsumableDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertGlassDocument = gql`
    mutation InsertGlass($color: String, $thickness: Int, $type: String, $product: product_product_insert_input! = {code: "", unit: m2, label: "", price: 1.5, priceMax: 1.5, product_companies: {data: {companyid: ""}}, priceMin: 1.5}) {
  insert_product_glass_one(
    object: {color: $color, thickness: $thickness, type: $type, product: {data: $product}}
  ) {
    color
    id
    thickness
    type
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertGlassGQL extends Apollo.Mutation<InsertGlassMutation, InsertGlassMutationVariables> {
    document = InsertGlassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertServiceDocument = gql`
    mutation InsertService($ParamValues: [product_optionalServiceParamValues_insert_input!]! = [], $serviceConfigid: uuid, $product: product_product_insert_input! = {code: "", label: "", price: 1.5, priceMax: 1.5, priceMin: 1.5, unit: m2}) {
  insert_product_service_one(
    object: {paramsValues: {data: $ParamValues}, serviceConfigid: $serviceConfigid, product: {data: $product}}
  ) {
    product {
      code
      label
      price
      priceMax
      priceMin
      unit
      companies {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertServiceGQL extends Apollo.Mutation<InsertServiceMutation, InsertServiceMutationVariables> {
    document = InsertServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertServiceConfigDocument = gql`
    mutation InsertServiceConfig($labelFactory: String, $name: String, $param: [product_optionalServiceParam_insert_input!]! = []) {
  insert_product_serviceConfig_one(
    object: {labelFactory: $labelFactory, name: $name, optionalServiceParams: {data: $param}}
  ) {
    labelFactory
    name
    id
    optionalServiceParams {
      param
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertServiceConfigGQL extends Apollo.Mutation<InsertServiceConfigMutation, InsertServiceConfigMutationVariables> {
    document = InsertServiceConfigDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllAccessoriesDocument = gql`
    query GetAllAccessories {
  product_accessory {
    id
    category
    quota
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllAccessoriesGQL extends Apollo.Query<GetAllAccessoriesQuery, GetAllAccessoriesQueryVariables> {
    document = GetAllAccessoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllConsumablesDocument = gql`
    query GetAllConsumables {
  product_consumable {
    id
    category
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllConsumablesGQL extends Apollo.Query<GetAllConsumablesQuery, GetAllConsumablesQueryVariables> {
    document = GetAllConsumablesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllGlassesDocument = gql`
    query GetAllGlasses {
  product_glass {
    id
    color
    thickness
    type
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllGlassesGQL extends Apollo.Query<GetAllGlassesQuery, GetAllGlassesQueryVariables> {
    document = GetAllGlassesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllServicesDocument = gql`
    query GetAllServices {
  product_service {
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllServicesGQL extends Apollo.Query<GetAllServicesQuery, GetAllServicesQueryVariables> {
    document = GetAllServicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllServiceConfigDocument = gql`
    query GetAllServiceConfig {
  product_serviceConfig {
    labelFactory
    name
    id
    optionalServiceParams {
      id
      param
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllServiceConfigGQL extends Apollo.Query<GetAllServiceConfigQuery, GetAllServiceConfigQueryVariables> {
    document = GetAllServiceConfigDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAccessoryByIdDocument = gql`
    subscription GetAccessoryById($id: uuid!) {
  product_accessory_by_pk(id: $id) {
    createdAt
    createdBy
    id
    category
    product {
      code
      unit
      label
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
    quota
    updatedAt
    updatedBy
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAccessoryByIdGQL extends Apollo.Subscription<GetAccessoryByIdSubscription, GetAccessoryByIdSubscriptionVariables> {
    document = GetAccessoryByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetConsumableByIdDocument = gql`
    subscription GetConsumableById($id: uuid!) {
  product_consumable_by_pk(id: $id) {
    category
    createdAt
    createdBy
    id
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
    updatedAt
    updatedBy
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConsumableByIdGQL extends Apollo.Subscription<GetConsumableByIdSubscription, GetConsumableByIdSubscriptionVariables> {
    document = GetConsumableByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetGlassByIdDocument = gql`
    subscription getGlassById($id: uuid!) {
  product_glass_by_pk(id: $id) {
    color
    createdBy
    createdAt
    id
    product {
      code
      label
      unit
      price
      priceMax
      priceMin
      companies {
        name
        id
      }
    }
    thickness
    type
    updatedAt
    updatedBy
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGlassByIdGQL extends Apollo.Subscription<GetGlassByIdSubscription, GetGlassByIdSubscriptionVariables> {
    document = GetGlassByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetServiceConfigByIdDocument = gql`
    subscription GetServiceConfigById($id: uuid!) {
  product_serviceConfig_by_pk(id: $id) {
    id
    labelFactory
    name
    services(where: {serviceConfigid: {_eq: $id}}) {
      product {
        code
        label
        unit
        price
        priceMax
        priceMin
        companies {
          name
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetServiceConfigByIdGQL extends Apollo.Subscription<GetServiceConfigByIdSubscription, GetServiceConfigByIdSubscriptionVariables> {
    document = GetServiceConfigByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }