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

/** columns and relationships of "management.Company" */
export type Management_Company = {
  __typename?: 'management_Company';
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
  createdBy?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedBy?: Maybe<Uuid_Comparison_Exp>;
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
  __typename?: 'management_Company_max_fields';
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
  createdBy?: Maybe<Scalars['String']>;
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
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
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
  createdBy?: Maybe<Scalars['String']>;
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
  /** delete data from the table: "product.accessory" */
  delete_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** delete single row from the table: "product.accessory" */
  delete_product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** delete data from the table: "product.consumable" */
  delete_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
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
  /** delete data from the table: "product.service" */
  delete_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** delete single row from the table: "product.service" */
  delete_product_service_by_pk?: Maybe<Product_Service>;
  /** delete data from the table: "product.service_consumable" */
  delete_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** delete single row from the table: "product.service_consumable" */
  delete_product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** delete data from the table: "product.service_glasses" */
  delete_product_service_glasses?: Maybe<Product_Service_Glasses_Mutation_Response>;
  /** delete single row from the table: "product.service_glasses" */
  delete_product_service_glasses_by_pk?: Maybe<Product_Service_Glasses>;
  /** delete data from the table: "product.substance" */
  delete_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** delete single row from the table: "product.substance" */
  delete_product_substance_by_pk?: Maybe<Product_Substance>;
  /** delete data from the table: "stock.accessoryTranfer" */
  delete_stock_accessoryTranfer?: Maybe<Stock_AccessoryTranfer_Mutation_Response>;
  /** delete data from the table: "stock.accessoryTranferOrder" */
  delete_stock_accessoryTranferOrder?: Maybe<Stock_AccessoryTranferOrder_Mutation_Response>;
  /** delete single row from the table: "stock.accessoryTranferOrder" */
  delete_stock_accessoryTranferOrder_by_pk?: Maybe<Stock_AccessoryTranferOrder>;
  /** delete single row from the table: "stock.accessoryTranfer" */
  delete_stock_accessoryTranfer_by_pk?: Maybe<Stock_AccessoryTranfer>;
  /** delete data from the table: "stock.accessory_warehouse" */
  delete_stock_accessory_warehouse?: Maybe<Stock_Accessory_Warehouse_Mutation_Response>;
  /** delete single row from the table: "stock.accessory_warehouse" */
  delete_stock_accessory_warehouse_by_pk?: Maybe<Stock_Accessory_Warehouse>;
  /** delete data from the table: "stock.boardGlass" */
  delete_stock_boardGlass?: Maybe<Stock_BoardGlass_Mutation_Response>;
  /** delete single row from the table: "stock.boardGlass" */
  delete_stock_boardGlass_by_pk?: Maybe<Stock_BoardGlass>;
  /** delete data from the table: "stock.consumable_warehouse" */
  delete_stock_consumable_warehouse?: Maybe<Stock_Consumable_Warehouse_Mutation_Response>;
  /** delete single row from the table: "stock.consumable_warehouse" */
  delete_stock_consumable_warehouse_by_pk?: Maybe<Stock_Consumable_Warehouse>;
  /** delete data from the table: "stock.warehouse" */
  delete_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** delete single row from the table: "stock.warehouse" */
  delete_stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
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
  /** insert data into the table: "product.accessory" */
  insert_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** insert a single row into the table: "product.accessory" */
  insert_product_accessory_one?: Maybe<Product_Accessory>;
  /** insert data into the table: "product.consumable" */
  insert_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
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
  /** insert data into the table: "product.service" */
  insert_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** insert data into the table: "product.service_consumable" */
  insert_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** insert a single row into the table: "product.service_consumable" */
  insert_product_service_consumable_one?: Maybe<Product_Service_Consumable>;
  /** insert data into the table: "product.service_glasses" */
  insert_product_service_glasses?: Maybe<Product_Service_Glasses_Mutation_Response>;
  /** insert a single row into the table: "product.service_glasses" */
  insert_product_service_glasses_one?: Maybe<Product_Service_Glasses>;
  /** insert a single row into the table: "product.service" */
  insert_product_service_one?: Maybe<Product_Service>;
  /** insert data into the table: "product.substance" */
  insert_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** insert a single row into the table: "product.substance" */
  insert_product_substance_one?: Maybe<Product_Substance>;
  /** insert data into the table: "stock.accessoryTranfer" */
  insert_stock_accessoryTranfer?: Maybe<Stock_AccessoryTranfer_Mutation_Response>;
  /** insert data into the table: "stock.accessoryTranferOrder" */
  insert_stock_accessoryTranferOrder?: Maybe<Stock_AccessoryTranferOrder_Mutation_Response>;
  /** insert a single row into the table: "stock.accessoryTranferOrder" */
  insert_stock_accessoryTranferOrder_one?: Maybe<Stock_AccessoryTranferOrder>;
  /** insert a single row into the table: "stock.accessoryTranfer" */
  insert_stock_accessoryTranfer_one?: Maybe<Stock_AccessoryTranfer>;
  /** insert data into the table: "stock.accessory_warehouse" */
  insert_stock_accessory_warehouse?: Maybe<Stock_Accessory_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "stock.accessory_warehouse" */
  insert_stock_accessory_warehouse_one?: Maybe<Stock_Accessory_Warehouse>;
  /** insert data into the table: "stock.boardGlass" */
  insert_stock_boardGlass?: Maybe<Stock_BoardGlass_Mutation_Response>;
  /** insert a single row into the table: "stock.boardGlass" */
  insert_stock_boardGlass_one?: Maybe<Stock_BoardGlass>;
  /** insert data into the table: "stock.consumable_warehouse" */
  insert_stock_consumable_warehouse?: Maybe<Stock_Consumable_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "stock.consumable_warehouse" */
  insert_stock_consumable_warehouse_one?: Maybe<Stock_Consumable_Warehouse>;
  /** insert data into the table: "stock.warehouse" */
  insert_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** insert a single row into the table: "stock.warehouse" */
  insert_stock_warehouse_one?: Maybe<Stock_Warehouse>;
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
  /** update data of the table: "product.accessory" */
  update_product_accessory?: Maybe<Product_Accessory_Mutation_Response>;
  /** update single row of the table: "product.accessory" */
  update_product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** update data of the table: "product.consumable" */
  update_product_consumable?: Maybe<Product_Consumable_Mutation_Response>;
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
  /** update data of the table: "product.service" */
  update_product_service?: Maybe<Product_Service_Mutation_Response>;
  /** update single row of the table: "product.service" */
  update_product_service_by_pk?: Maybe<Product_Service>;
  /** update data of the table: "product.service_consumable" */
  update_product_service_consumable?: Maybe<Product_Service_Consumable_Mutation_Response>;
  /** update single row of the table: "product.service_consumable" */
  update_product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** update data of the table: "product.service_glasses" */
  update_product_service_glasses?: Maybe<Product_Service_Glasses_Mutation_Response>;
  /** update single row of the table: "product.service_glasses" */
  update_product_service_glasses_by_pk?: Maybe<Product_Service_Glasses>;
  /** update data of the table: "product.substance" */
  update_product_substance?: Maybe<Product_Substance_Mutation_Response>;
  /** update single row of the table: "product.substance" */
  update_product_substance_by_pk?: Maybe<Product_Substance>;
  /** update data of the table: "stock.accessoryTranfer" */
  update_stock_accessoryTranfer?: Maybe<Stock_AccessoryTranfer_Mutation_Response>;
  /** update data of the table: "stock.accessoryTranferOrder" */
  update_stock_accessoryTranferOrder?: Maybe<Stock_AccessoryTranferOrder_Mutation_Response>;
  /** update single row of the table: "stock.accessoryTranferOrder" */
  update_stock_accessoryTranferOrder_by_pk?: Maybe<Stock_AccessoryTranferOrder>;
  /** update single row of the table: "stock.accessoryTranfer" */
  update_stock_accessoryTranfer_by_pk?: Maybe<Stock_AccessoryTranfer>;
  /** update data of the table: "stock.accessory_warehouse" */
  update_stock_accessory_warehouse?: Maybe<Stock_Accessory_Warehouse_Mutation_Response>;
  /** update single row of the table: "stock.accessory_warehouse" */
  update_stock_accessory_warehouse_by_pk?: Maybe<Stock_Accessory_Warehouse>;
  /** update data of the table: "stock.boardGlass" */
  update_stock_boardGlass?: Maybe<Stock_BoardGlass_Mutation_Response>;
  /** update single row of the table: "stock.boardGlass" */
  update_stock_boardGlass_by_pk?: Maybe<Stock_BoardGlass>;
  /** update data of the table: "stock.consumable_warehouse" */
  update_stock_consumable_warehouse?: Maybe<Stock_Consumable_Warehouse_Mutation_Response>;
  /** update single row of the table: "stock.consumable_warehouse" */
  update_stock_consumable_warehouse_by_pk?: Maybe<Stock_Consumable_Warehouse>;
  /** update data of the table: "stock.warehouse" */
  update_stock_warehouse?: Maybe<Stock_Warehouse_Mutation_Response>;
  /** update single row of the table: "stock.warehouse" */
  update_stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
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
export type Mutation_RootDelete_Product_Accessory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ConsumableArgs = {
  where: Product_Consumable_Bool_Exp;
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
  serviceGlassesGlasseid: Scalars['uuid'];
  serviceGlassesServiceid: Scalars['uuid'];
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
  productCode: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ServiceArgs = {
  where: Product_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Service_By_PkArgs = {
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
export type Mutation_RootDelete_Product_Service_GlassesArgs = {
  where: Product_Service_Glasses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Service_Glasses_By_PkArgs = {
  glasseid: Scalars['uuid'];
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
export type Mutation_RootDelete_Stock_AccessoryTranferArgs = {
  where: Stock_AccessoryTranfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_AccessoryTranferOrderArgs = {
  where: Stock_AccessoryTranferOrder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_AccessoryTranferOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_AccessoryTranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Accessory_WarehouseArgs = {
  where: Stock_Accessory_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Accessory_Warehouse_By_PkArgs = {
  accessoryid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_BoardGlassArgs = {
  where: Stock_BoardGlass_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_BoardGlass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_Consumable_WarehouseArgs = {
  where: Stock_Consumable_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Consumable_Warehouse_By_PkArgs = {
  consumableid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
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
export type Mutation_RootInsert_Product_ServiceArgs = {
  objects: Array<Product_Service_Insert_Input>;
  on_conflict?: Maybe<Product_Service_On_Conflict>;
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
export type Mutation_RootInsert_Product_Service_GlassesArgs = {
  objects: Array<Product_Service_Glasses_Insert_Input>;
  on_conflict?: Maybe<Product_Service_Glasses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Service_Glasses_OneArgs = {
  object: Product_Service_Glasses_Insert_Input;
  on_conflict?: Maybe<Product_Service_Glasses_On_Conflict>;
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
export type Mutation_RootInsert_Stock_AccessoryTranferArgs = {
  objects: Array<Stock_AccessoryTranfer_Insert_Input>;
  on_conflict?: Maybe<Stock_AccessoryTranfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_AccessoryTranferOrderArgs = {
  objects: Array<Stock_AccessoryTranferOrder_Insert_Input>;
  on_conflict?: Maybe<Stock_AccessoryTranferOrder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_AccessoryTranferOrder_OneArgs = {
  object: Stock_AccessoryTranferOrder_Insert_Input;
  on_conflict?: Maybe<Stock_AccessoryTranferOrder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_AccessoryTranfer_OneArgs = {
  object: Stock_AccessoryTranfer_Insert_Input;
  on_conflict?: Maybe<Stock_AccessoryTranfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Accessory_WarehouseArgs = {
  objects: Array<Stock_Accessory_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Accessory_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Accessory_Warehouse_OneArgs = {
  object: Stock_Accessory_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Accessory_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_BoardGlassArgs = {
  objects: Array<Stock_BoardGlass_Insert_Input>;
  on_conflict?: Maybe<Stock_BoardGlass_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_BoardGlass_OneArgs = {
  object: Stock_BoardGlass_Insert_Input;
  on_conflict?: Maybe<Stock_BoardGlass_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Consumable_WarehouseArgs = {
  objects: Array<Stock_Consumable_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Consumable_Warehouse_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Consumable_Warehouse_OneArgs = {
  object: Stock_Consumable_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Consumable_Warehouse_On_Conflict>;
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
export type Mutation_RootUpdate_Product_ServiceArgs = {
  _set?: Maybe<Product_Service_Set_Input>;
  where: Product_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Service_By_PkArgs = {
  _set?: Maybe<Product_Service_Set_Input>;
  pk_columns: Product_Service_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Product_Service_GlassesArgs = {
  _set?: Maybe<Product_Service_Glasses_Set_Input>;
  where: Product_Service_Glasses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Service_Glasses_By_PkArgs = {
  _set?: Maybe<Product_Service_Glasses_Set_Input>;
  pk_columns: Product_Service_Glasses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SubstanceArgs = {
  _set?: Maybe<Product_Substance_Set_Input>;
  where: Product_Substance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Substance_By_PkArgs = {
  _set?: Maybe<Product_Substance_Set_Input>;
  pk_columns: Product_Substance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_AccessoryTranferArgs = {
  _set?: Maybe<Stock_AccessoryTranfer_Set_Input>;
  where: Stock_AccessoryTranfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_AccessoryTranferOrderArgs = {
  _set?: Maybe<Stock_AccessoryTranferOrder_Set_Input>;
  where: Stock_AccessoryTranferOrder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_AccessoryTranferOrder_By_PkArgs = {
  _set?: Maybe<Stock_AccessoryTranferOrder_Set_Input>;
  pk_columns: Stock_AccessoryTranferOrder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_AccessoryTranfer_By_PkArgs = {
  _set?: Maybe<Stock_AccessoryTranfer_Set_Input>;
  pk_columns: Stock_AccessoryTranfer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Accessory_WarehouseArgs = {
  _inc?: Maybe<Stock_Accessory_Warehouse_Inc_Input>;
  _set?: Maybe<Stock_Accessory_Warehouse_Set_Input>;
  where: Stock_Accessory_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Accessory_Warehouse_By_PkArgs = {
  _inc?: Maybe<Stock_Accessory_Warehouse_Inc_Input>;
  _set?: Maybe<Stock_Accessory_Warehouse_Set_Input>;
  pk_columns: Stock_Accessory_Warehouse_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_BoardGlassArgs = {
  _set?: Maybe<Stock_BoardGlass_Set_Input>;
  where: Stock_BoardGlass_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_BoardGlass_By_PkArgs = {
  _set?: Maybe<Stock_BoardGlass_Set_Input>;
  pk_columns: Stock_BoardGlass_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Consumable_WarehouseArgs = {
  _inc?: Maybe<Stock_Consumable_Warehouse_Inc_Input>;
  _set?: Maybe<Stock_Consumable_Warehouse_Set_Input>;
  where: Stock_Consumable_Warehouse_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Consumable_Warehouse_By_PkArgs = {
  _inc?: Maybe<Stock_Consumable_Warehouse_Inc_Input>;
  _set?: Maybe<Stock_Consumable_Warehouse_Set_Input>;
  pk_columns: Stock_Consumable_Warehouse_Pk_Columns_Input;
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
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productCode: Scalars['String'];
  quota: Scalars['numeric'];
  /** An object relationship */
  substance: Product_Substance;
  substanceid: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

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
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productCode?: Maybe<String_Comparison_Exp>;
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
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productCode?: Maybe<Scalars['String']>;
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
  productCode?: Maybe<Scalars['String']>;
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
  productCode?: Maybe<Order_By>;
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
  productCode?: Maybe<Scalars['String']>;
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
  productCode?: Maybe<Order_By>;
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
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productCode?: Maybe<Order_By>;
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
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ProductCode = 'productCode',
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
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
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
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ProductCode = 'productCode',
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
  category: Scalars['String'];
  createdAt: Scalars['date'];
  createdBy: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productCode: Scalars['String'];
  /** An array relationship */
  service_consumables: Array<Product_Service_Consumable>;
  /** An aggregated array relationship */
  service_consumables_aggregate: Product_Service_Consumable_Aggregate;
  /** An object relationship */
  substance: Product_Substance;
  substanceid: Scalars['uuid'];
  updatedAt: Scalars['date'];
  updatedBy: Scalars['String'];
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
  category?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productCode?: Maybe<String_Comparison_Exp>;
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
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productCode?: Maybe<Scalars['String']>;
  service_consumables?: Maybe<Product_Service_Consumable_Arr_Rel_Insert_Input>;
  substance?: Maybe<Product_Substance_Obj_Rel_Insert_Input>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Consumable_Max_Fields = {
  __typename?: 'product_consumable_max_fields';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.consumable" */
export type Product_Consumable_Max_Order_By = {
  category?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
  substanceid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Consumable_Min_Fields = {
  __typename?: 'product_consumable_min_fields';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
  substanceid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.consumable" */
export type Product_Consumable_Min_Order_By = {
  category?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
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
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productCode?: Maybe<Order_By>;
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
  ProductCode = 'productCode',
  /** column name */
  Substanceid = 'substanceid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "product.consumable" */
export type Product_Consumable_Set_Input = {
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
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
  ProductCode = 'productCode',
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
  productCode: Scalars['String'];
  /** An array relationship */
  service_glasses: Array<Product_Service_Glasses>;
  /** An aggregated array relationship */
  service_glasses_aggregate: Product_Service_Glasses_Aggregate;
  /** An object relationship */
  substance: Product_Substance;
  substanceid: Scalars['uuid'];
  thickness: Scalars['Int'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "product.glass" */
export type Product_GlassService_GlassesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** columns and relationships of "product.glass" */
export type Product_GlassService_Glasses_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
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
  productCode?: Maybe<String_Comparison_Exp>;
  service_glasses?: Maybe<Product_Service_Glasses_Bool_Exp>;
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
  productCode?: Maybe<Scalars['String']>;
  service_glasses?: Maybe<Product_Service_Glasses_Arr_Rel_Insert_Input>;
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
  productCode?: Maybe<Scalars['String']>;
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
  productCode?: Maybe<Order_By>;
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
  productCode?: Maybe<Scalars['String']>;
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
  productCode?: Maybe<Order_By>;
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
  productCode?: Maybe<Order_By>;
  service_glasses_aggregate?: Maybe<Product_Service_Glasses_Aggregate_Order_By>;
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
  ProductCode = 'productCode',
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
  productCode?: Maybe<Scalars['String']>;
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
  ProductCode = 'productCode',
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
  param: Scalars['String'];
  /** An object relationship */
  service: Product_Service;
  serviceid: Scalars['uuid'];
};

/** columns and relationships of "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues = {
  __typename?: 'product_optionalServiceParamValues';
  serviceGlassesGlasseid: Scalars['uuid'];
  serviceGlassesServiceid: Scalars['uuid'];
  /** An object relationship */
  service_glass?: Maybe<Product_Service_Glasses>;
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
  serviceGlassesGlasseid?: Maybe<Uuid_Comparison_Exp>;
  serviceGlassesServiceid?: Maybe<Uuid_Comparison_Exp>;
  service_glass?: Maybe<Product_Service_Glasses_Bool_Exp>;
  values?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Constraint {
  /** unique or primary key constraint */
  OptionalServiceParamValuesPkey = 'optionalServiceParamValues_pkey'
}

/** input type for inserting data into table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Insert_Input = {
  serviceGlassesGlasseid?: Maybe<Scalars['uuid']>;
  serviceGlassesServiceid?: Maybe<Scalars['uuid']>;
  service_glass?: Maybe<Product_Service_Glasses_Obj_Rel_Insert_Input>;
  values?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_OptionalServiceParamValues_Max_Fields = {
  __typename?: 'product_optionalServiceParamValues_max_fields';
  serviceGlassesGlasseid?: Maybe<Scalars['uuid']>;
  serviceGlassesServiceid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Max_Order_By = {
  serviceGlassesGlasseid?: Maybe<Order_By>;
  serviceGlassesServiceid?: Maybe<Order_By>;
  values?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_OptionalServiceParamValues_Min_Fields = {
  __typename?: 'product_optionalServiceParamValues_min_fields';
  serviceGlassesGlasseid?: Maybe<Scalars['uuid']>;
  serviceGlassesServiceid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Min_Order_By = {
  serviceGlassesGlasseid?: Maybe<Order_By>;
  serviceGlassesServiceid?: Maybe<Order_By>;
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
  serviceGlassesGlasseid?: Maybe<Order_By>;
  serviceGlassesServiceid?: Maybe<Order_By>;
  service_glass?: Maybe<Product_Service_Glasses_Order_By>;
  values?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Pk_Columns_Input = {
  serviceGlassesGlasseid: Scalars['uuid'];
  serviceGlassesServiceid: Scalars['uuid'];
};

/** select columns of table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Select_Column {
  /** column name */
  ServiceGlassesGlasseid = 'serviceGlassesGlasseid',
  /** column name */
  ServiceGlassesServiceid = 'serviceGlassesServiceid',
  /** column name */
  Values = 'values'
}

/** input type for updating data in table "product.optionalServiceParamValues" */
export type Product_OptionalServiceParamValues_Set_Input = {
  serviceGlassesGlasseid?: Maybe<Scalars['uuid']>;
  serviceGlassesServiceid?: Maybe<Scalars['uuid']>;
  values?: Maybe<Scalars['String']>;
};

/** update columns of table "product.optionalServiceParamValues" */
export enum Product_OptionalServiceParamValues_Update_Column {
  /** column name */
  ServiceGlassesGlasseid = 'serviceGlassesGlasseid',
  /** column name */
  ServiceGlassesServiceid = 'serviceGlassesServiceid',
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
  param?: Maybe<String_Comparison_Exp>;
  service?: Maybe<Product_Service_Bool_Exp>;
  serviceid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.optionalServiceParam" */
export enum Product_OptionalServiceParam_Constraint {
  /** unique or primary key constraint */
  OptionalServiceParamPkey = 'optionalServiceParam_pkey'
}

/** input type for inserting data into table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  param?: Maybe<Scalars['String']>;
  service?: Maybe<Product_Service_Obj_Rel_Insert_Input>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_OptionalServiceParam_Max_Fields = {
  __typename?: 'product_optionalServiceParam_max_fields';
  id?: Maybe<Scalars['uuid']>;
  param?: Maybe<Scalars['String']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Max_Order_By = {
  id?: Maybe<Order_By>;
  param?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_OptionalServiceParam_Min_Fields = {
  __typename?: 'product_optionalServiceParam_min_fields';
  id?: Maybe<Scalars['uuid']>;
  param?: Maybe<Scalars['String']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Min_Order_By = {
  id?: Maybe<Order_By>;
  param?: Maybe<Order_By>;
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
  service?: Maybe<Product_Service_Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.optionalServiceParam" */
export type Product_OptionalServiceParam_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  param?: Maybe<Scalars['String']>;
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
  service_glass?: Maybe<Product_Service_Glasses>;
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
  consumable?: Maybe<Product_Consumable_Bool_Exp>;
  glass?: Maybe<Product_Glass_Bool_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Float_Comparison_Exp>;
  priceMax?: Maybe<Float_Comparison_Exp>;
  priceMin?: Maybe<Float_Comparison_Exp>;
  product_companies?: Maybe<Product_Product_Companies_Bool_Exp>;
  service_glass?: Maybe<Product_Service_Glasses_Bool_Exp>;
};

/** columns and relationships of "product.product_companies" */
export type Product_Product_Companies = {
  __typename?: 'product_product_companies';
  /** An object relationship */
  Company: Management_Company;
  companyid: Scalars['uuid'];
  /** An object relationship */
  product: Product_Product;
  productCode: Scalars['String'];
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
  productCode?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.product_companies" */
export enum Product_Product_Companies_Constraint {
  /** unique or primary key constraint */
  ProductComanyPkey = 'productComany_pkey'
}

/** input type for inserting data into table "product.product_companies" */
export type Product_Product_Companies_Insert_Input = {
  Company?: Maybe<Management_Company_Obj_Rel_Insert_Input>;
  companyid?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productCode?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Product_Companies_Max_Fields = {
  __typename?: 'product_product_companies_max_fields';
  companyid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.product_companies" */
export type Product_Product_Companies_Max_Order_By = {
  companyid?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Product_Companies_Min_Fields = {
  __typename?: 'product_product_companies_min_fields';
  companyid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.product_companies" */
export type Product_Product_Companies_Min_Order_By = {
  companyid?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
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
  productCode?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.product_companies" */
export type Product_Product_Companies_Pk_Columns_Input = {
  companyid: Scalars['uuid'];
  productCode: Scalars['String'];
};

/** select columns of table "product.product_companies" */
export enum Product_Product_Companies_Select_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  ProductCode = 'productCode'
}

/** input type for updating data in table "product.product_companies" */
export type Product_Product_Companies_Set_Input = {
  companyid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
};

/** update columns of table "product.product_companies" */
export enum Product_Product_Companies_Update_Column {
  /** column name */
  Companyid = 'companyid',
  /** column name */
  ProductCode = 'productCode'
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
  service_glass?: Maybe<Product_Service_Glasses_Obj_Rel_Insert_Input>;
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
  consumable?: Maybe<Product_Consumable_Order_By>;
  glass?: Maybe<Product_Glass_Order_By>;
  label?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  priceMax?: Maybe<Order_By>;
  priceMin?: Maybe<Order_By>;
  product_companies_aggregate?: Maybe<Product_Product_Companies_Aggregate_Order_By>;
  service_glass?: Maybe<Product_Service_Glasses_Order_By>;
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
  PriceMin = 'priceMin'
}

/** input type for updating data in table "product.product" */
export type Product_Product_Set_Input = {
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
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
  PriceMin = 'priceMin'
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
  id: Scalars['uuid'];
  labelFactory: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  optionalServiceParams: Array<Product_OptionalServiceParam>;
  /** An aggregated array relationship */
  optionalServiceParams_aggregate: Product_OptionalServiceParam_Aggregate;
  productCode: Scalars['String'];
  /** An array relationship */
  service_consumables: Array<Product_Service_Consumable>;
  /** An aggregated array relationship */
  service_consumables_aggregate: Product_Service_Consumable_Aggregate;
  /** An array relationship */
  service_glasses: Array<Product_Service_Glasses>;
  /** An aggregated array relationship */
  service_glasses_aggregate: Product_Service_Glasses_Aggregate;
};


/** columns and relationships of "product.service" */
export type Product_ServiceOptionalServiceParamsArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceOptionalServiceParams_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParam_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParam_Order_By>>;
  where?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceService_ConsumablesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceService_Consumables_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Consumable_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Consumable_Order_By>>;
  where?: Maybe<Product_Service_Consumable_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceService_GlassesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** columns and relationships of "product.service" */
export type Product_ServiceService_Glasses_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};

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
  id?: Maybe<Uuid_Comparison_Exp>;
  labelFactory?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  optionalServiceParams?: Maybe<Product_OptionalServiceParam_Bool_Exp>;
  productCode?: Maybe<String_Comparison_Exp>;
  service_consumables?: Maybe<Product_Service_Consumable_Bool_Exp>;
  service_glasses?: Maybe<Product_Service_Glasses_Bool_Exp>;
};

/** unique or primary key constraints on table "product.service" */
export enum Product_Service_Constraint {
  /** unique or primary key constraint */
  ServicePkey = 'service_pkey'
}

/** columns and relationships of "product.service_consumable" */
export type Product_Service_Consumable = {
  __typename?: 'product_service_consumable';
  /** An object relationship */
  consumable: Product_Consumable;
  consumableid: Scalars['uuid'];
  quota: Scalars['Float'];
  /** An object relationship */
  service: Product_Service;
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
  service?: Maybe<Product_Service_Bool_Exp>;
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
  service?: Maybe<Product_Service_Obj_Rel_Insert_Input>;
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
  service?: Maybe<Product_Service_Order_By>;
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

/** columns and relationships of "product.service_glasses" */
export type Product_Service_Glasses = {
  __typename?: 'product_service_glasses';
  /** An object relationship */
  glass: Product_Glass;
  glasseid: Scalars['uuid'];
  /** An array relationship */
  optionalServiceParamValues: Array<Product_OptionalServiceParamValues>;
  /** An aggregated array relationship */
  optionalServiceParamValues_aggregate: Product_OptionalServiceParamValues_Aggregate;
  /** An object relationship */
  product: Product_Product;
  productCode: Scalars['String'];
  /** An object relationship */
  service: Product_Service;
  serviceid: Scalars['uuid'];
};


/** columns and relationships of "product.service_glasses" */
export type Product_Service_GlassesOptionalServiceParamValuesArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};


/** columns and relationships of "product.service_glasses" */
export type Product_Service_GlassesOptionalServiceParamValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_OptionalServiceParamValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_OptionalServiceParamValues_Order_By>>;
  where?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
};

/** aggregated selection of "product.service_glasses" */
export type Product_Service_Glasses_Aggregate = {
  __typename?: 'product_service_glasses_aggregate';
  aggregate?: Maybe<Product_Service_Glasses_Aggregate_Fields>;
  nodes: Array<Product_Service_Glasses>;
};

/** aggregate fields of "product.service_glasses" */
export type Product_Service_Glasses_Aggregate_Fields = {
  __typename?: 'product_service_glasses_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Service_Glasses_Max_Fields>;
  min?: Maybe<Product_Service_Glasses_Min_Fields>;
};


/** aggregate fields of "product.service_glasses" */
export type Product_Service_Glasses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.service_glasses" */
export type Product_Service_Glasses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Service_Glasses_Max_Order_By>;
  min?: Maybe<Product_Service_Glasses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.service_glasses" */
export type Product_Service_Glasses_Arr_Rel_Insert_Input = {
  data: Array<Product_Service_Glasses_Insert_Input>;
  on_conflict?: Maybe<Product_Service_Glasses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.service_glasses". All fields are combined with a logical 'AND'. */
export type Product_Service_Glasses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Service_Glasses_Bool_Exp>>>;
  _not?: Maybe<Product_Service_Glasses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Service_Glasses_Bool_Exp>>>;
  glass?: Maybe<Product_Glass_Bool_Exp>;
  glasseid?: Maybe<Uuid_Comparison_Exp>;
  optionalServiceParamValues?: Maybe<Product_OptionalServiceParamValues_Bool_Exp>;
  product?: Maybe<Product_Product_Bool_Exp>;
  productCode?: Maybe<String_Comparison_Exp>;
  service?: Maybe<Product_Service_Bool_Exp>;
  serviceid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.service_glasses" */
export enum Product_Service_Glasses_Constraint {
  /** unique or primary key constraint */
  ServiceGlassesPkey = 'service_glasses_pkey',
  /** unique or primary key constraint */
  ServiceGlassesProductCodeKey = 'service_glasses_productCode_key'
}

/** input type for inserting data into table "product.service_glasses" */
export type Product_Service_Glasses_Insert_Input = {
  glass?: Maybe<Product_Glass_Obj_Rel_Insert_Input>;
  glasseid?: Maybe<Scalars['uuid']>;
  optionalServiceParamValues?: Maybe<Product_OptionalServiceParamValues_Arr_Rel_Insert_Input>;
  product?: Maybe<Product_Product_Obj_Rel_Insert_Input>;
  productCode?: Maybe<Scalars['String']>;
  service?: Maybe<Product_Service_Obj_Rel_Insert_Input>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Service_Glasses_Max_Fields = {
  __typename?: 'product_service_glasses_max_fields';
  glasseid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.service_glasses" */
export type Product_Service_Glasses_Max_Order_By = {
  glasseid?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Service_Glasses_Min_Fields = {
  __typename?: 'product_service_glasses_min_fields';
  glasseid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.service_glasses" */
export type Product_Service_Glasses_Min_Order_By = {
  glasseid?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** response of any mutation on the table "product.service_glasses" */
export type Product_Service_Glasses_Mutation_Response = {
  __typename?: 'product_service_glasses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Service_Glasses>;
};

/** input type for inserting object relation for remote table "product.service_glasses" */
export type Product_Service_Glasses_Obj_Rel_Insert_Input = {
  data: Product_Service_Glasses_Insert_Input;
  on_conflict?: Maybe<Product_Service_Glasses_On_Conflict>;
};

/** on conflict condition type for table "product.service_glasses" */
export type Product_Service_Glasses_On_Conflict = {
  constraint: Product_Service_Glasses_Constraint;
  update_columns: Array<Product_Service_Glasses_Update_Column>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};

/** ordering options when selecting data from "product.service_glasses" */
export type Product_Service_Glasses_Order_By = {
  glass?: Maybe<Product_Glass_Order_By>;
  glasseid?: Maybe<Order_By>;
  optionalServiceParamValues_aggregate?: Maybe<Product_OptionalServiceParamValues_Aggregate_Order_By>;
  product?: Maybe<Product_Product_Order_By>;
  productCode?: Maybe<Order_By>;
  service?: Maybe<Product_Service_Order_By>;
  serviceid?: Maybe<Order_By>;
};

/** primary key columns input for table: "product.service_glasses" */
export type Product_Service_Glasses_Pk_Columns_Input = {
  glasseid: Scalars['uuid'];
  serviceid: Scalars['uuid'];
};

/** select columns of table "product.service_glasses" */
export enum Product_Service_Glasses_Select_Column {
  /** column name */
  Glasseid = 'glasseid',
  /** column name */
  ProductCode = 'productCode',
  /** column name */
  Serviceid = 'serviceid'
}

/** input type for updating data in table "product.service_glasses" */
export type Product_Service_Glasses_Set_Input = {
  glasseid?: Maybe<Scalars['uuid']>;
  productCode?: Maybe<Scalars['String']>;
  serviceid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product.service_glasses" */
export enum Product_Service_Glasses_Update_Column {
  /** column name */
  Glasseid = 'glasseid',
  /** column name */
  ProductCode = 'productCode',
  /** column name */
  Serviceid = 'serviceid'
}

/** input type for inserting data into table "product.service" */
export type Product_Service_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  optionalServiceParams?: Maybe<Product_OptionalServiceParam_Arr_Rel_Insert_Input>;
  productCode?: Maybe<Scalars['String']>;
  service_consumables?: Maybe<Product_Service_Consumable_Arr_Rel_Insert_Input>;
  service_glasses?: Maybe<Product_Service_Glasses_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Service_Max_Fields = {
  __typename?: 'product_service_max_fields';
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productCode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "product.service" */
export type Product_Service_Max_Order_By = {
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Service_Min_Fields = {
  __typename?: 'product_service_min_fields';
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productCode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "product.service" */
export type Product_Service_Min_Order_By = {
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  productCode?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  labelFactory?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  optionalServiceParams_aggregate?: Maybe<Product_OptionalServiceParam_Aggregate_Order_By>;
  productCode?: Maybe<Order_By>;
  service_consumables_aggregate?: Maybe<Product_Service_Consumable_Aggregate_Order_By>;
  service_glasses_aggregate?: Maybe<Product_Service_Glasses_Aggregate_Order_By>;
};

/** primary key columns input for table: "product.service" */
export type Product_Service_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product.service" */
export enum Product_Service_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LabelFactory = 'labelFactory',
  /** column name */
  Name = 'name',
  /** column name */
  ProductCode = 'productCode'
}

/** input type for updating data in table "product.service" */
export type Product_Service_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  labelFactory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productCode?: Maybe<Scalars['String']>;
};

/** update columns of table "product.service" */
export enum Product_Service_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LabelFactory = 'labelFactory',
  /** column name */
  Name = 'name',
  /** column name */
  ProductCode = 'productCode'
}

/** columns and relationships of "product.substance" */
export type Product_Substance = {
  __typename?: 'product_substance';
  category: Scalars['String'];
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Substance_Max_Fields>;
  min?: Maybe<Product_Substance_Min_Fields>;
};


/** aggregate fields of "product.substance" */
export type Product_Substance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Substance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product.substance" */
export type Product_Substance_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Substance_Max_Order_By>;
  min?: Maybe<Product_Substance_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product.substance" */
export type Product_Substance_Arr_Rel_Insert_Input = {
  data: Array<Product_Substance_Insert_Input>;
  on_conflict?: Maybe<Product_Substance_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product.substance". All fields are combined with a logical 'AND'. */
export type Product_Substance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Substance_Bool_Exp>>>;
  _not?: Maybe<Product_Substance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Substance_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product.substance" */
export enum Product_Substance_Constraint {
  /** unique or primary key constraint */
  SubstancePkey = 'substance_pkey'
}

/** input type for inserting data into table "product.substance" */
export type Product_Substance_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Substance_Max_Fields = {
  __typename?: 'product_substance_max_fields';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product.substance" */
export type Product_Substance_Max_Order_By = {
  category?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Substance_Min_Fields = {
  __typename?: 'product_substance_min_fields';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product.substance" */
export type Product_Substance_Min_Order_By = {
  category?: Maybe<Order_By>;
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
  category?: Maybe<Order_By>;
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
  Id = 'id'
}

/** input type for updating data in table "product.substance" */
export type Product_Substance_Set_Input = {
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "product.substance" */
export enum Product_Substance_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Id = 'id'
}

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
  /** fetch data from the table: "product.accessory" */
  product_accessory: Array<Product_Accessory>;
  /** fetch aggregated fields from the table: "product.accessory" */
  product_accessory_aggregate: Product_Accessory_Aggregate;
  /** fetch data from the table: "product.accessory" using primary key columns */
  product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** fetch data from the table: "product.consumable" */
  product_consumable: Array<Product_Consumable>;
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
  /** fetch data from the table: "product.service" */
  product_service: Array<Product_Service>;
  /** fetch aggregated fields from the table: "product.service" */
  product_service_aggregate: Product_Service_Aggregate;
  /** fetch data from the table: "product.service" using primary key columns */
  product_service_by_pk?: Maybe<Product_Service>;
  /** fetch data from the table: "product.service_consumable" */
  product_service_consumable: Array<Product_Service_Consumable>;
  /** fetch aggregated fields from the table: "product.service_consumable" */
  product_service_consumable_aggregate: Product_Service_Consumable_Aggregate;
  /** fetch data from the table: "product.service_consumable" using primary key columns */
  product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** fetch data from the table: "product.service_glasses" */
  product_service_glasses: Array<Product_Service_Glasses>;
  /** fetch aggregated fields from the table: "product.service_glasses" */
  product_service_glasses_aggregate: Product_Service_Glasses_Aggregate;
  /** fetch data from the table: "product.service_glasses" using primary key columns */
  product_service_glasses_by_pk?: Maybe<Product_Service_Glasses>;
  /** fetch data from the table: "product.substance" */
  product_substance: Array<Product_Substance>;
  /** fetch aggregated fields from the table: "product.substance" */
  product_substance_aggregate: Product_Substance_Aggregate;
  /** fetch data from the table: "product.substance" using primary key columns */
  product_substance_by_pk?: Maybe<Product_Substance>;
  /** fetch data from the table: "stock.accessoryTranfer" */
  stock_accessoryTranfer: Array<Stock_AccessoryTranfer>;
  /** fetch data from the table: "stock.accessoryTranferOrder" */
  stock_accessoryTranferOrder: Array<Stock_AccessoryTranferOrder>;
  /** fetch aggregated fields from the table: "stock.accessoryTranferOrder" */
  stock_accessoryTranferOrder_aggregate: Stock_AccessoryTranferOrder_Aggregate;
  /** fetch data from the table: "stock.accessoryTranferOrder" using primary key columns */
  stock_accessoryTranferOrder_by_pk?: Maybe<Stock_AccessoryTranferOrder>;
  /** fetch aggregated fields from the table: "stock.accessoryTranfer" */
  stock_accessoryTranfer_aggregate: Stock_AccessoryTranfer_Aggregate;
  /** fetch data from the table: "stock.accessoryTranfer" using primary key columns */
  stock_accessoryTranfer_by_pk?: Maybe<Stock_AccessoryTranfer>;
  /** fetch data from the table: "stock.accessory_warehouse" */
  stock_accessory_warehouse: Array<Stock_Accessory_Warehouse>;
  /** fetch aggregated fields from the table: "stock.accessory_warehouse" */
  stock_accessory_warehouse_aggregate: Stock_Accessory_Warehouse_Aggregate;
  /** fetch data from the table: "stock.accessory_warehouse" using primary key columns */
  stock_accessory_warehouse_by_pk?: Maybe<Stock_Accessory_Warehouse>;
  /** fetch data from the table: "stock.boardGlass" */
  stock_boardGlass: Array<Stock_BoardGlass>;
  /** fetch aggregated fields from the table: "stock.boardGlass" */
  stock_boardGlass_aggregate: Stock_BoardGlass_Aggregate;
  /** fetch data from the table: "stock.boardGlass" using primary key columns */
  stock_boardGlass_by_pk?: Maybe<Stock_BoardGlass>;
  /** fetch data from the table: "stock.consumable_warehouse" */
  stock_consumable_warehouse: Array<Stock_Consumable_Warehouse>;
  /** fetch aggregated fields from the table: "stock.consumable_warehouse" */
  stock_consumable_warehouse_aggregate: Stock_Consumable_Warehouse_Aggregate;
  /** fetch data from the table: "stock.consumable_warehouse" using primary key columns */
  stock_consumable_warehouse_by_pk?: Maybe<Stock_Consumable_Warehouse>;
  /** fetch data from the table: "stock.warehouse" */
  stock_warehouse: Array<Stock_Warehouse>;
  /** fetch aggregated fields from the table: "stock.warehouse" */
  stock_warehouse_aggregate: Stock_Warehouse_Aggregate;
  /** fetch data from the table: "stock.warehouse" using primary key columns */
  stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
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
  serviceGlassesGlasseid: Scalars['uuid'];
  serviceGlassesServiceid: Scalars['uuid'];
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
  productCode: Scalars['String'];
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
export type Query_RootProduct_Service_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Query_RootProduct_Service_GlassesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_Glasses_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Service_Glasses_By_PkArgs = {
  glasseid: Scalars['uuid'];
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
export type Query_RootStock_AccessoryTranferArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranfer_Order_By>>;
  where?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
};


/** query root */
export type Query_RootStock_AccessoryTranferOrderArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranferOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranferOrder_Order_By>>;
  where?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
};


/** query root */
export type Query_RootStock_AccessoryTranferOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranferOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranferOrder_Order_By>>;
  where?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
};


/** query root */
export type Query_RootStock_AccessoryTranferOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_AccessoryTranfer_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranfer_Order_By>>;
  where?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
};


/** query root */
export type Query_RootStock_AccessoryTranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Accessory_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Accessory_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Accessory_Warehouse_Order_By>>;
  where?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Accessory_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Accessory_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Accessory_Warehouse_Order_By>>;
  where?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Accessory_Warehouse_By_PkArgs = {
  accessoryid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_BoardGlassArgs = {
  distinct_on?: Maybe<Array<Stock_BoardGlass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_BoardGlass_Order_By>>;
  where?: Maybe<Stock_BoardGlass_Bool_Exp>;
};


/** query root */
export type Query_RootStock_BoardGlass_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_BoardGlass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_BoardGlass_Order_By>>;
  where?: Maybe<Stock_BoardGlass_Bool_Exp>;
};


/** query root */
export type Query_RootStock_BoardGlass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootStock_Consumable_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Consumable_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Consumable_Warehouse_Order_By>>;
  where?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Consumable_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Consumable_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Consumable_Warehouse_Order_By>>;
  where?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Consumable_Warehouse_By_PkArgs = {
  consumableid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
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

/** columns and relationships of "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer = {
  __typename?: 'stock_accessoryTranfer';
  accessoryTranferOrderid: Scalars['uuid'];
  id: Scalars['uuid'];
  status: Scalars['uuid'];
};

/** columns and relationships of "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder = {
  __typename?: 'stock_accessoryTranferOrder';
  createdAt: Scalars['date'];
  createdBy: Scalars['String'];
  id: Scalars['uuid'];
  status: Scalars['String'];
  updatedAt: Scalars['date'];
  updatedBy: Scalars['date'];
  warehouseid1: Scalars['uuid'];
  warehouseid2: Scalars['uuid'];
};

/** aggregated selection of "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Aggregate = {
  __typename?: 'stock_accessoryTranferOrder_aggregate';
  aggregate?: Maybe<Stock_AccessoryTranferOrder_Aggregate_Fields>;
  nodes: Array<Stock_AccessoryTranferOrder>;
};

/** aggregate fields of "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Aggregate_Fields = {
  __typename?: 'stock_accessoryTranferOrder_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_AccessoryTranferOrder_Max_Fields>;
  min?: Maybe<Stock_AccessoryTranferOrder_Min_Fields>;
};


/** aggregate fields of "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_AccessoryTranferOrder_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_AccessoryTranferOrder_Max_Order_By>;
  min?: Maybe<Stock_AccessoryTranferOrder_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Arr_Rel_Insert_Input = {
  data: Array<Stock_AccessoryTranferOrder_Insert_Input>;
  on_conflict?: Maybe<Stock_AccessoryTranferOrder_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stock.accessoryTranferOrder". All fields are combined with a logical 'AND'. */
export type Stock_AccessoryTranferOrder_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_AccessoryTranferOrder_Bool_Exp>>>;
  _not?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_AccessoryTranferOrder_Bool_Exp>>>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<Date_Comparison_Exp>;
  warehouseid1?: Maybe<Uuid_Comparison_Exp>;
  warehouseid2?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.accessoryTranferOrder" */
export enum Stock_AccessoryTranferOrder_Constraint {
  /** unique or primary key constraint */
  AccessoryTranferOrderPkey = 'accessoryTranferOrder_pkey'
}

/** input type for inserting data into table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Insert_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['date']>;
  warehouseid1?: Maybe<Scalars['uuid']>;
  warehouseid2?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_AccessoryTranferOrder_Max_Fields = {
  __typename?: 'stock_accessoryTranferOrder_max_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['date']>;
  warehouseid1?: Maybe<Scalars['uuid']>;
  warehouseid2?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  warehouseid1?: Maybe<Order_By>;
  warehouseid2?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_AccessoryTranferOrder_Min_Fields = {
  __typename?: 'stock_accessoryTranferOrder_min_fields';
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['date']>;
  warehouseid1?: Maybe<Scalars['uuid']>;
  warehouseid2?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  warehouseid1?: Maybe<Order_By>;
  warehouseid2?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Mutation_Response = {
  __typename?: 'stock_accessoryTranferOrder_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_AccessoryTranferOrder>;
};

/** input type for inserting object relation for remote table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Obj_Rel_Insert_Input = {
  data: Stock_AccessoryTranferOrder_Insert_Input;
  on_conflict?: Maybe<Stock_AccessoryTranferOrder_On_Conflict>;
};

/** on conflict condition type for table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_On_Conflict = {
  constraint: Stock_AccessoryTranferOrder_Constraint;
  update_columns: Array<Stock_AccessoryTranferOrder_Update_Column>;
  where?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
};

/** ordering options when selecting data from "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
  warehouseid1?: Maybe<Order_By>;
  warehouseid2?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.accessoryTranferOrder" */
export enum Stock_AccessoryTranferOrder_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Warehouseid1 = 'warehouseid1',
  /** column name */
  Warehouseid2 = 'warehouseid2'
}

/** input type for updating data in table "stock.accessoryTranferOrder" */
export type Stock_AccessoryTranferOrder_Set_Input = {
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['date']>;
  warehouseid1?: Maybe<Scalars['uuid']>;
  warehouseid2?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stock.accessoryTranferOrder" */
export enum Stock_AccessoryTranferOrder_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Warehouseid1 = 'warehouseid1',
  /** column name */
  Warehouseid2 = 'warehouseid2'
}

/** aggregated selection of "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Aggregate = {
  __typename?: 'stock_accessoryTranfer_aggregate';
  aggregate?: Maybe<Stock_AccessoryTranfer_Aggregate_Fields>;
  nodes: Array<Stock_AccessoryTranfer>;
};

/** aggregate fields of "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Aggregate_Fields = {
  __typename?: 'stock_accessoryTranfer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_AccessoryTranfer_Max_Fields>;
  min?: Maybe<Stock_AccessoryTranfer_Min_Fields>;
};


/** aggregate fields of "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_AccessoryTranfer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_AccessoryTranfer_Max_Order_By>;
  min?: Maybe<Stock_AccessoryTranfer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Arr_Rel_Insert_Input = {
  data: Array<Stock_AccessoryTranfer_Insert_Input>;
  on_conflict?: Maybe<Stock_AccessoryTranfer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stock.accessoryTranfer". All fields are combined with a logical 'AND'. */
export type Stock_AccessoryTranfer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_AccessoryTranfer_Bool_Exp>>>;
  _not?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_AccessoryTranfer_Bool_Exp>>>;
  accessoryTranferOrderid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.accessoryTranfer" */
export enum Stock_AccessoryTranfer_Constraint {
  /** unique or primary key constraint */
  AccessoryTranferPkey = 'accessoryTranfer_pkey'
}

/** input type for inserting data into table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Insert_Input = {
  accessoryTranferOrderid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_AccessoryTranfer_Max_Fields = {
  __typename?: 'stock_accessoryTranfer_max_fields';
  accessoryTranferOrderid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Max_Order_By = {
  accessoryTranferOrderid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_AccessoryTranfer_Min_Fields = {
  __typename?: 'stock_accessoryTranfer_min_fields';
  accessoryTranferOrderid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Min_Order_By = {
  accessoryTranferOrderid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Mutation_Response = {
  __typename?: 'stock_accessoryTranfer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_AccessoryTranfer>;
};

/** input type for inserting object relation for remote table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Obj_Rel_Insert_Input = {
  data: Stock_AccessoryTranfer_Insert_Input;
  on_conflict?: Maybe<Stock_AccessoryTranfer_On_Conflict>;
};

/** on conflict condition type for table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_On_Conflict = {
  constraint: Stock_AccessoryTranfer_Constraint;
  update_columns: Array<Stock_AccessoryTranfer_Update_Column>;
  where?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
};

/** ordering options when selecting data from "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Order_By = {
  accessoryTranferOrderid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.accessoryTranfer" */
export enum Stock_AccessoryTranfer_Select_Column {
  /** column name */
  AccessoryTranferOrderid = 'accessoryTranferOrderid',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "stock.accessoryTranfer" */
export type Stock_AccessoryTranfer_Set_Input = {
  accessoryTranferOrderid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stock.accessoryTranfer" */
export enum Stock_AccessoryTranfer_Update_Column {
  /** column name */
  AccessoryTranferOrderid = 'accessoryTranferOrderid',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** columns and relationships of "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse = {
  __typename?: 'stock_accessory_warehouse';
  accessoryid: Scalars['uuid'];
  quantity: Scalars['Float'];
  warehouseid: Scalars['uuid'];
};

/** aggregated selection of "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Aggregate = {
  __typename?: 'stock_accessory_warehouse_aggregate';
  aggregate?: Maybe<Stock_Accessory_Warehouse_Aggregate_Fields>;
  nodes: Array<Stock_Accessory_Warehouse>;
};

/** aggregate fields of "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Aggregate_Fields = {
  __typename?: 'stock_accessory_warehouse_aggregate_fields';
  avg?: Maybe<Stock_Accessory_Warehouse_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Accessory_Warehouse_Max_Fields>;
  min?: Maybe<Stock_Accessory_Warehouse_Min_Fields>;
  stddev?: Maybe<Stock_Accessory_Warehouse_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Accessory_Warehouse_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Accessory_Warehouse_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Accessory_Warehouse_Sum_Fields>;
  var_pop?: Maybe<Stock_Accessory_Warehouse_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Accessory_Warehouse_Var_Samp_Fields>;
  variance?: Maybe<Stock_Accessory_Warehouse_Variance_Fields>;
};


/** aggregate fields of "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Accessory_Warehouse_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Aggregate_Order_By = {
  avg?: Maybe<Stock_Accessory_Warehouse_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Accessory_Warehouse_Max_Order_By>;
  min?: Maybe<Stock_Accessory_Warehouse_Min_Order_By>;
  stddev?: Maybe<Stock_Accessory_Warehouse_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Accessory_Warehouse_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Accessory_Warehouse_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Accessory_Warehouse_Sum_Order_By>;
  var_pop?: Maybe<Stock_Accessory_Warehouse_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Accessory_Warehouse_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Accessory_Warehouse_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Arr_Rel_Insert_Input = {
  data: Array<Stock_Accessory_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Accessory_Warehouse_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Accessory_Warehouse_Avg_Fields = {
  __typename?: 'stock_accessory_warehouse_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock.accessory_warehouse". All fields are combined with a logical 'AND'. */
export type Stock_Accessory_Warehouse_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Accessory_Warehouse_Bool_Exp>>>;
  _not?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Accessory_Warehouse_Bool_Exp>>>;
  accessoryid?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Float_Comparison_Exp>;
  warehouseid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.accessory_warehouse" */
export enum Stock_Accessory_Warehouse_Constraint {
  /** unique or primary key constraint */
  AccessoryWarehousePkey = 'accessory_warehouse_pkey'
}

/** input type for incrementing integer column in table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Inc_Input = {
  quantity?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Insert_Input = {
  accessoryid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_Accessory_Warehouse_Max_Fields = {
  __typename?: 'stock_accessory_warehouse_max_fields';
  accessoryid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Max_Order_By = {
  accessoryid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Accessory_Warehouse_Min_Fields = {
  __typename?: 'stock_accessory_warehouse_min_fields';
  accessoryid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Min_Order_By = {
  accessoryid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Mutation_Response = {
  __typename?: 'stock_accessory_warehouse_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Accessory_Warehouse>;
};

/** input type for inserting object relation for remote table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Obj_Rel_Insert_Input = {
  data: Stock_Accessory_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Accessory_Warehouse_On_Conflict>;
};

/** on conflict condition type for table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_On_Conflict = {
  constraint: Stock_Accessory_Warehouse_Constraint;
  update_columns: Array<Stock_Accessory_Warehouse_Update_Column>;
  where?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
};

/** ordering options when selecting data from "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Order_By = {
  accessoryid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Pk_Columns_Input = {
  accessoryid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};

/** select columns of table "stock.accessory_warehouse" */
export enum Stock_Accessory_Warehouse_Select_Column {
  /** column name */
  Accessoryid = 'accessoryid',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** input type for updating data in table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Set_Input = {
  accessoryid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stock_Accessory_Warehouse_Stddev_Fields = {
  __typename?: 'stock_accessory_warehouse_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Accessory_Warehouse_Stddev_Pop_Fields = {
  __typename?: 'stock_accessory_warehouse_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Accessory_Warehouse_Stddev_Samp_Fields = {
  __typename?: 'stock_accessory_warehouse_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Accessory_Warehouse_Sum_Fields = {
  __typename?: 'stock_accessory_warehouse_sum_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.accessory_warehouse" */
export enum Stock_Accessory_Warehouse_Update_Column {
  /** column name */
  Accessoryid = 'accessoryid',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** aggregate var_pop on columns */
export type Stock_Accessory_Warehouse_Var_Pop_Fields = {
  __typename?: 'stock_accessory_warehouse_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Accessory_Warehouse_Var_Samp_Fields = {
  __typename?: 'stock_accessory_warehouse_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Accessory_Warehouse_Variance_Fields = {
  __typename?: 'stock_accessory_warehouse_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock.accessory_warehouse" */
export type Stock_Accessory_Warehouse_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "stock.boardGlass" */
export type Stock_BoardGlass = {
  __typename?: 'stock_boardGlass';
  code: Scalars['String'];
  glassid: Scalars['uuid'];
  id: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};

/** aggregated selection of "stock.boardGlass" */
export type Stock_BoardGlass_Aggregate = {
  __typename?: 'stock_boardGlass_aggregate';
  aggregate?: Maybe<Stock_BoardGlass_Aggregate_Fields>;
  nodes: Array<Stock_BoardGlass>;
};

/** aggregate fields of "stock.boardGlass" */
export type Stock_BoardGlass_Aggregate_Fields = {
  __typename?: 'stock_boardGlass_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_BoardGlass_Max_Fields>;
  min?: Maybe<Stock_BoardGlass_Min_Fields>;
};


/** aggregate fields of "stock.boardGlass" */
export type Stock_BoardGlass_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_BoardGlass_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.boardGlass" */
export type Stock_BoardGlass_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_BoardGlass_Max_Order_By>;
  min?: Maybe<Stock_BoardGlass_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stock.boardGlass" */
export type Stock_BoardGlass_Arr_Rel_Insert_Input = {
  data: Array<Stock_BoardGlass_Insert_Input>;
  on_conflict?: Maybe<Stock_BoardGlass_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stock.boardGlass". All fields are combined with a logical 'AND'. */
export type Stock_BoardGlass_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_BoardGlass_Bool_Exp>>>;
  _not?: Maybe<Stock_BoardGlass_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_BoardGlass_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  glassid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  warehouseid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.boardGlass" */
export enum Stock_BoardGlass_Constraint {
  /** unique or primary key constraint */
  BoardGlassPkey = 'boardGlass_pkey'
}

/** input type for inserting data into table "stock.boardGlass" */
export type Stock_BoardGlass_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  glassid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_BoardGlass_Max_Fields = {
  __typename?: 'stock_boardGlass_max_fields';
  code?: Maybe<Scalars['String']>;
  glassid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.boardGlass" */
export type Stock_BoardGlass_Max_Order_By = {
  code?: Maybe<Order_By>;
  glassid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_BoardGlass_Min_Fields = {
  __typename?: 'stock_boardGlass_min_fields';
  code?: Maybe<Scalars['String']>;
  glassid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.boardGlass" */
export type Stock_BoardGlass_Min_Order_By = {
  code?: Maybe<Order_By>;
  glassid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.boardGlass" */
export type Stock_BoardGlass_Mutation_Response = {
  __typename?: 'stock_boardGlass_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_BoardGlass>;
};

/** input type for inserting object relation for remote table "stock.boardGlass" */
export type Stock_BoardGlass_Obj_Rel_Insert_Input = {
  data: Stock_BoardGlass_Insert_Input;
  on_conflict?: Maybe<Stock_BoardGlass_On_Conflict>;
};

/** on conflict condition type for table "stock.boardGlass" */
export type Stock_BoardGlass_On_Conflict = {
  constraint: Stock_BoardGlass_Constraint;
  update_columns: Array<Stock_BoardGlass_Update_Column>;
  where?: Maybe<Stock_BoardGlass_Bool_Exp>;
};

/** ordering options when selecting data from "stock.boardGlass" */
export type Stock_BoardGlass_Order_By = {
  code?: Maybe<Order_By>;
  glassid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.boardGlass" */
export type Stock_BoardGlass_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stock.boardGlass" */
export enum Stock_BoardGlass_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Glassid = 'glassid',
  /** column name */
  Id = 'id',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** input type for updating data in table "stock.boardGlass" */
export type Stock_BoardGlass_Set_Input = {
  code?: Maybe<Scalars['String']>;
  glassid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stock.boardGlass" */
export enum Stock_BoardGlass_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Glassid = 'glassid',
  /** column name */
  Id = 'id',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** columns and relationships of "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse = {
  __typename?: 'stock_consumable_warehouse';
  consumableid: Scalars['uuid'];
  quantity: Scalars['Float'];
  warehouseid: Scalars['uuid'];
};

/** aggregated selection of "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Aggregate = {
  __typename?: 'stock_consumable_warehouse_aggregate';
  aggregate?: Maybe<Stock_Consumable_Warehouse_Aggregate_Fields>;
  nodes: Array<Stock_Consumable_Warehouse>;
};

/** aggregate fields of "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Aggregate_Fields = {
  __typename?: 'stock_consumable_warehouse_aggregate_fields';
  avg?: Maybe<Stock_Consumable_Warehouse_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Consumable_Warehouse_Max_Fields>;
  min?: Maybe<Stock_Consumable_Warehouse_Min_Fields>;
  stddev?: Maybe<Stock_Consumable_Warehouse_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Consumable_Warehouse_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Consumable_Warehouse_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Consumable_Warehouse_Sum_Fields>;
  var_pop?: Maybe<Stock_Consumable_Warehouse_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Consumable_Warehouse_Var_Samp_Fields>;
  variance?: Maybe<Stock_Consumable_Warehouse_Variance_Fields>;
};


/** aggregate fields of "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Consumable_Warehouse_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Aggregate_Order_By = {
  avg?: Maybe<Stock_Consumable_Warehouse_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Consumable_Warehouse_Max_Order_By>;
  min?: Maybe<Stock_Consumable_Warehouse_Min_Order_By>;
  stddev?: Maybe<Stock_Consumable_Warehouse_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Consumable_Warehouse_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Consumable_Warehouse_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Consumable_Warehouse_Sum_Order_By>;
  var_pop?: Maybe<Stock_Consumable_Warehouse_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Consumable_Warehouse_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Consumable_Warehouse_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Arr_Rel_Insert_Input = {
  data: Array<Stock_Consumable_Warehouse_Insert_Input>;
  on_conflict?: Maybe<Stock_Consumable_Warehouse_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Consumable_Warehouse_Avg_Fields = {
  __typename?: 'stock_consumable_warehouse_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock.consumable_warehouse". All fields are combined with a logical 'AND'. */
export type Stock_Consumable_Warehouse_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Consumable_Warehouse_Bool_Exp>>>;
  _not?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Consumable_Warehouse_Bool_Exp>>>;
  consumableid?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Float_Comparison_Exp>;
  warehouseid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.consumable_warehouse" */
export enum Stock_Consumable_Warehouse_Constraint {
  /** unique or primary key constraint */
  ConsumableWarehousePkey = 'consumable_warehouse_pkey'
}

/** input type for incrementing integer column in table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Inc_Input = {
  quantity?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Insert_Input = {
  consumableid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stock_Consumable_Warehouse_Max_Fields = {
  __typename?: 'stock_consumable_warehouse_max_fields';
  consumableid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Max_Order_By = {
  consumableid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Consumable_Warehouse_Min_Fields = {
  __typename?: 'stock_consumable_warehouse_min_fields';
  consumableid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Min_Order_By = {
  consumableid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Mutation_Response = {
  __typename?: 'stock_consumable_warehouse_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Consumable_Warehouse>;
};

/** input type for inserting object relation for remote table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Obj_Rel_Insert_Input = {
  data: Stock_Consumable_Warehouse_Insert_Input;
  on_conflict?: Maybe<Stock_Consumable_Warehouse_On_Conflict>;
};

/** on conflict condition type for table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_On_Conflict = {
  constraint: Stock_Consumable_Warehouse_Constraint;
  update_columns: Array<Stock_Consumable_Warehouse_Update_Column>;
  where?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
};

/** ordering options when selecting data from "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Order_By = {
  consumableid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  warehouseid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Pk_Columns_Input = {
  consumableid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};

/** select columns of table "stock.consumable_warehouse" */
export enum Stock_Consumable_Warehouse_Select_Column {
  /** column name */
  Consumableid = 'consumableid',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** input type for updating data in table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Set_Input = {
  consumableid?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Float']>;
  warehouseid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stock_Consumable_Warehouse_Stddev_Fields = {
  __typename?: 'stock_consumable_warehouse_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Consumable_Warehouse_Stddev_Pop_Fields = {
  __typename?: 'stock_consumable_warehouse_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Consumable_Warehouse_Stddev_Samp_Fields = {
  __typename?: 'stock_consumable_warehouse_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Consumable_Warehouse_Sum_Fields = {
  __typename?: 'stock_consumable_warehouse_sum_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "stock.consumable_warehouse" */
export enum Stock_Consumable_Warehouse_Update_Column {
  /** column name */
  Consumableid = 'consumableid',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Warehouseid = 'warehouseid'
}

/** aggregate var_pop on columns */
export type Stock_Consumable_Warehouse_Var_Pop_Fields = {
  __typename?: 'stock_consumable_warehouse_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Consumable_Warehouse_Var_Samp_Fields = {
  __typename?: 'stock_consumable_warehouse_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Consumable_Warehouse_Variance_Fields = {
  __typename?: 'stock_consumable_warehouse_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock.consumable_warehouse" */
export type Stock_Consumable_Warehouse_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "stock.warehouse" */
export type Stock_Warehouse = {
  __typename?: 'stock_warehouse';
  companyid: Scalars['uuid'];
  createdAt: Scalars['date'];
  createdBy: Scalars['String'];
  id: Scalars['uuid'];
  salesPointid: Scalars['uuid'];
  type: Scalars['String'];
  updatedAt: Scalars['date'];
  updatedBy: Scalars['String'];
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
  companyid?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Date_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  salesPointid?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Date_Comparison_Exp>;
  updatedBy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock.warehouse" */
export enum Stock_Warehouse_Constraint {
  /** unique or primary key constraint */
  WarehousePkey = 'warehouse_pkey'
}

/** input type for inserting data into table "stock.warehouse" */
export type Stock_Warehouse_Insert_Input = {
  companyid?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['date']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  salesPointid?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['date']>;
  updatedBy?: Maybe<Scalars['String']>;
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
  companyid?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salesPointid?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  updatedBy?: Maybe<Order_By>;
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
  /** fetch data from the table: "product.accessory" */
  product_accessory: Array<Product_Accessory>;
  /** fetch aggregated fields from the table: "product.accessory" */
  product_accessory_aggregate: Product_Accessory_Aggregate;
  /** fetch data from the table: "product.accessory" using primary key columns */
  product_accessory_by_pk?: Maybe<Product_Accessory>;
  /** fetch data from the table: "product.consumable" */
  product_consumable: Array<Product_Consumable>;
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
  /** fetch data from the table: "product.service" */
  product_service: Array<Product_Service>;
  /** fetch aggregated fields from the table: "product.service" */
  product_service_aggregate: Product_Service_Aggregate;
  /** fetch data from the table: "product.service" using primary key columns */
  product_service_by_pk?: Maybe<Product_Service>;
  /** fetch data from the table: "product.service_consumable" */
  product_service_consumable: Array<Product_Service_Consumable>;
  /** fetch aggregated fields from the table: "product.service_consumable" */
  product_service_consumable_aggregate: Product_Service_Consumable_Aggregate;
  /** fetch data from the table: "product.service_consumable" using primary key columns */
  product_service_consumable_by_pk?: Maybe<Product_Service_Consumable>;
  /** fetch data from the table: "product.service_glasses" */
  product_service_glasses: Array<Product_Service_Glasses>;
  /** fetch aggregated fields from the table: "product.service_glasses" */
  product_service_glasses_aggregate: Product_Service_Glasses_Aggregate;
  /** fetch data from the table: "product.service_glasses" using primary key columns */
  product_service_glasses_by_pk?: Maybe<Product_Service_Glasses>;
  /** fetch data from the table: "product.substance" */
  product_substance: Array<Product_Substance>;
  /** fetch aggregated fields from the table: "product.substance" */
  product_substance_aggregate: Product_Substance_Aggregate;
  /** fetch data from the table: "product.substance" using primary key columns */
  product_substance_by_pk?: Maybe<Product_Substance>;
  /** fetch data from the table: "stock.accessoryTranfer" */
  stock_accessoryTranfer: Array<Stock_AccessoryTranfer>;
  /** fetch data from the table: "stock.accessoryTranferOrder" */
  stock_accessoryTranferOrder: Array<Stock_AccessoryTranferOrder>;
  /** fetch aggregated fields from the table: "stock.accessoryTranferOrder" */
  stock_accessoryTranferOrder_aggregate: Stock_AccessoryTranferOrder_Aggregate;
  /** fetch data from the table: "stock.accessoryTranferOrder" using primary key columns */
  stock_accessoryTranferOrder_by_pk?: Maybe<Stock_AccessoryTranferOrder>;
  /** fetch aggregated fields from the table: "stock.accessoryTranfer" */
  stock_accessoryTranfer_aggregate: Stock_AccessoryTranfer_Aggregate;
  /** fetch data from the table: "stock.accessoryTranfer" using primary key columns */
  stock_accessoryTranfer_by_pk?: Maybe<Stock_AccessoryTranfer>;
  /** fetch data from the table: "stock.accessory_warehouse" */
  stock_accessory_warehouse: Array<Stock_Accessory_Warehouse>;
  /** fetch aggregated fields from the table: "stock.accessory_warehouse" */
  stock_accessory_warehouse_aggregate: Stock_Accessory_Warehouse_Aggregate;
  /** fetch data from the table: "stock.accessory_warehouse" using primary key columns */
  stock_accessory_warehouse_by_pk?: Maybe<Stock_Accessory_Warehouse>;
  /** fetch data from the table: "stock.boardGlass" */
  stock_boardGlass: Array<Stock_BoardGlass>;
  /** fetch aggregated fields from the table: "stock.boardGlass" */
  stock_boardGlass_aggregate: Stock_BoardGlass_Aggregate;
  /** fetch data from the table: "stock.boardGlass" using primary key columns */
  stock_boardGlass_by_pk?: Maybe<Stock_BoardGlass>;
  /** fetch data from the table: "stock.consumable_warehouse" */
  stock_consumable_warehouse: Array<Stock_Consumable_Warehouse>;
  /** fetch aggregated fields from the table: "stock.consumable_warehouse" */
  stock_consumable_warehouse_aggregate: Stock_Consumable_Warehouse_Aggregate;
  /** fetch data from the table: "stock.consumable_warehouse" using primary key columns */
  stock_consumable_warehouse_by_pk?: Maybe<Stock_Consumable_Warehouse>;
  /** fetch data from the table: "stock.warehouse" */
  stock_warehouse: Array<Stock_Warehouse>;
  /** fetch aggregated fields from the table: "stock.warehouse" */
  stock_warehouse_aggregate: Stock_Warehouse_Aggregate;
  /** fetch data from the table: "stock.warehouse" using primary key columns */
  stock_warehouse_by_pk?: Maybe<Stock_Warehouse>;
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
  serviceGlassesGlasseid: Scalars['uuid'];
  serviceGlassesServiceid: Scalars['uuid'];
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
  productCode: Scalars['String'];
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
export type Subscription_RootProduct_Service_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Order_By>>;
  where?: Maybe<Product_Service_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Subscription_RootProduct_Service_GlassesArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_Glasses_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Service_Glasses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Service_Glasses_Order_By>>;
  where?: Maybe<Product_Service_Glasses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Service_Glasses_By_PkArgs = {
  glasseid: Scalars['uuid'];
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
export type Subscription_RootStock_AccessoryTranferArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranfer_Order_By>>;
  where?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_AccessoryTranferOrderArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranferOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranferOrder_Order_By>>;
  where?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_AccessoryTranferOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranferOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranferOrder_Order_By>>;
  where?: Maybe<Stock_AccessoryTranferOrder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_AccessoryTranferOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_AccessoryTranfer_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_AccessoryTranfer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_AccessoryTranfer_Order_By>>;
  where?: Maybe<Stock_AccessoryTranfer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_AccessoryTranfer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Accessory_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Accessory_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Accessory_Warehouse_Order_By>>;
  where?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Accessory_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Accessory_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Accessory_Warehouse_Order_By>>;
  where?: Maybe<Stock_Accessory_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Accessory_Warehouse_By_PkArgs = {
  accessoryid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_BoardGlassArgs = {
  distinct_on?: Maybe<Array<Stock_BoardGlass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_BoardGlass_Order_By>>;
  where?: Maybe<Stock_BoardGlass_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_BoardGlass_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_BoardGlass_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_BoardGlass_Order_By>>;
  where?: Maybe<Stock_BoardGlass_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_BoardGlass_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStock_Consumable_WarehouseArgs = {
  distinct_on?: Maybe<Array<Stock_Consumable_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Consumable_Warehouse_Order_By>>;
  where?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Consumable_Warehouse_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Consumable_Warehouse_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Consumable_Warehouse_Order_By>>;
  where?: Maybe<Stock_Consumable_Warehouse_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Consumable_Warehouse_By_PkArgs = {
  consumableid: Scalars['uuid'];
  warehouseid: Scalars['uuid'];
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
}>;


export type InsertContactMutation = (
  { __typename?: 'mutation_root' }
  & { insert_contact_contact_one?: Maybe<(
    { __typename?: 'contact_contact' }
    & Pick<Contact_Contact, 'id' | 'code' | 'mail' | 'name' | 'note' | 'phone'>
    & { addresses: Array<(
      { __typename?: 'contact_contact_addresses_view' }
      & Pick<Contact_Contact_Addresses_View, 'id' | 'address' | 'city' | 'zip'>
    )> }
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
  data?: Array<Contact_Provider_Address_Insert_Input>;
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
  contactAddresses?: Array<Contact_Contact_Address_Insert_Input>;
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
  id: Scalars['uuid'];
}>;


export type GetCompanyByIdQuery = (
  { __typename?: 'query_root' }
  & { management_Company_by_pk?: Maybe<(
    { __typename?: 'management_Company' }
    & Pick<Management_Company, 'CNSS' | 'ICE' | 'IF' | 'RC' | 'address' | 'email' | 'name' | 'phone' | 'website' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'id'>
  )> }
);

export type GetSalePointByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetSalePointByIdQuery = (
  { __typename?: 'query_root' }
  & { management_SalesPoint_by_pk?: Maybe<(
    { __typename?: 'management_SalesPoint' }
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
      { __typename?: 'management_SalesPoint' }
      & Pick<Management_SalesPoint, 'name' | 'phone' | 'address'>
    )> }
  )> }
);

export type GetAllAccessoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAccessoriesQuery = (
  { __typename?: 'query_root' }
  & { product_accessory: Array<(
    { __typename?: 'product_accessory' }
    & Pick<Product_Accessory, 'id'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'id' | 'name'>
        ) }
      )> }
    ) }
  )> }
);

export type GetAllConsumablesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllConsumablesQuery = (
  { __typename?: 'query_root' }
  & { product_consumable: Array<(
    { __typename?: 'product_consumable' }
    & Pick<Product_Consumable, 'category'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'id' | 'name'>
        ) }
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
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'id' | 'name'>
        ) }
      )> }
    ) }
  )> }
);

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = (
  { __typename?: 'query_root' }
  & { product_service_glasses: Array<(
    { __typename?: 'product_service_glasses' }
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'id' | 'name'>
        ) }
      )> }
    ) }
  )> }
);

export type GetAllServiceconfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServiceconfigQuery = (
  { __typename?: 'query_root' }
  & { product_service: Array<(
    { __typename?: 'product_service' }
    & Pick<Product_Service, 'labelFactory' | 'name' | 'id'>
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
    & Pick<Product_Accessory, 'createdAt' | 'createdBy' | 'id' | 'quota' | 'updatedAt' | 'updatedBy'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'name' | 'id'>
        ) }
      )> }
    ) }
  )> }
);

export type MySubscriptionSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type MySubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { product_consumable_by_pk?: Maybe<(
    { __typename?: 'product_consumable' }
    & Pick<Product_Consumable, 'category' | 'createdAt' | 'createdBy' | 'id' | 'updatedAt' | 'updatedBy'>
    & { product: (
      { __typename?: 'product_product' }
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'name' | 'id'>
        ) }
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
      & Pick<Product_Product, 'code' | 'label' | 'price' | 'priceMax' | 'priceMin'>
      & { product_companies: Array<(
        { __typename?: 'product_product_companies' }
        & { Company: (
          { __typename?: 'management_Company' }
          & Pick<Management_Company, 'name' | 'id'>
        ) }
      )> }
    ) }
  )> }
);

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
    mutation InsertContact($code: String, $mail: String, $name: String, $note: String, $phone: String, $addresses: [contact_contact_address_insert_input!]! = {address: {data: {address: "", city: "", zip: ""}}}, $customers: [contact_customer_contact_insert_input!]! = {customer: {data: {name: "", phone: "", code: ""}}}) {
  insert_contact_contact_one(
    object: {code: $code, mail: $mail, name: $name, note: $note, phone: $phone, contact_addresses: {data: $addresses}, contact_customers: {data: $customers}}
  ) {
    id
    code
    mail
    name
    note
    phone
    addresses {
      id
      address
      city
      zip
    }
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
    mutation InsertCustomer($FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String, $addresses: [contact_customer_address_insert_input!]! = {address: {data: {address: "", city: "", zip: ""}}}, $ICE: String, $IF: String, $type: String) {
  insert_contact_customer_one(
    object: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website, customer_addresses: {data: $addresses}, ICE: $ICE, IF: $IF, type: $type}
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
    mutation InsertProvider($FAX: String, $code: String, $mail: String, $name: String, $note: String, $phone: String, $website: String, $data: [contact_provider_address_insert_input!]! = {address: {data: {address: "", city: "", zip: ""}}}) {
  insert_contact_provider_one(
    object: {FAX: $FAX, code: $code, mail: $mail, name: $name, note: $note, phone: $phone, website: $website, provider_addresses: {data: $data}}
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
    mutation updateContactAddresses($contactAddresses: [contact_contact_address_insert_input!]! = [{contactid: "", address: {data: {address: "", city: "", zip: ""}}}]) {
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
    query GetCompanyById($id: uuid!) {
  management_Company_by_pk(id: $id) {
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
  management_SalesPoint_by_pk(id: $id) {
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
export const GetAllAccessoriesDocument = gql`
    query GetAllAccessories {
  product_accessory {
    id
    product {
      code
      label
      price
      priceMax
      priceMin
      product_companies {
        Company {
          id
          name
        }
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
    category
    product {
      code
      label
      price
      priceMax
      priceMin
      product_companies {
        Company {
          id
          name
        }
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
      price
      priceMax
      priceMin
      product_companies {
        Company {
          id
          name
        }
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
  product_service_glasses {
    product {
      code
      label
      price
      priceMax
      priceMin
      product_companies {
        Company {
          id
          name
        }
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
export const GetAllServiceconfigDocument = gql`
    query GetAllServiceconfig {
  product_service {
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
  export class GetAllServiceconfigGQL extends Apollo.Query<GetAllServiceconfigQuery, GetAllServiceconfigQueryVariables> {
    document = GetAllServiceconfigDocument;
    
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
    product {
      code
      label
      price
      priceMax
      priceMin
      product_companies {
        Company {
          name
          id
        }
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
export const MySubscriptionDocument = gql`
    subscription MySubscription($id: uuid!) {
  product_consumable_by_pk(id: $id) {
    category
    createdAt
    createdBy
    id
    product {
      code
      label
      price
      priceMax
      priceMin
      product_companies {
        Company {
          name
          id
        }
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
  export class MySubscriptionGQL extends Apollo.Subscription<MySubscriptionSubscription, MySubscriptionSubscriptionVariables> {
    document = MySubscriptionDocument;
    
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
      price
      priceMax
      priceMin
      product_companies {
        Company {
          name
          id
        }
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