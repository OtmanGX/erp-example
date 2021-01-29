import { InsertAccessoryMutationVariables } from "@tanglass-erp/infrastructure/graphql"
import { Accessory, insertedAccessory } from "../models/accessory.model"
import { InsertedConsumable } from "../models/consumable.model"
import { InsertedGlass } from "../models/glass.model"
import { InsertedService } from "../models/service.model"
import { InsertedProduct, Product } from "../models/shared.model"


export interface product_companies {
    data: AffectedCompany[]
};
interface AffectedCompany {
    companyid: string
}

type objToAdapt=insertedAccessory|InsertedConsumable|InsertedGlass|InsertedService

export function adaptProduct(Item: objToAdapt,type:string) {

    let product_companies = {
        data: Item.product.product_companies.map((id) =>
        ({
            companyid: id
        }
        )
        )
    }
    return { ...Item[type], product: { ...Item.product, product_companies ,unit:"m2"} }

}


