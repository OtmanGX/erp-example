import {
    InsertCustomerMutationVariables,
    InsertContactMutationVariables,
    InsertProviderMutationVariables,
    Product_Product_Insert_Input,
    Product_Product_Unit_Enum
} from "@tanglass-erp/infrastructure/graphql";
import { insertedAccessory } from "../models/accessory.model";
import { InsertedConsumable } from "../models/consumable.model";
import { InsertedGlass } from "../models/glass.model";
import { Product } from "../models/shared.model";



type objToAdapt = insertedAccessory & InsertedGlass & InsertedConsumable;
type adaptedObj = InsertContactMutationVariables & InsertCustomerMutationVariables & InsertProviderMutationVariables;


export function dataAdapter(obj:Product ): Product_Product_Insert_Input {
 


 
    return { ...obj,  }
}



