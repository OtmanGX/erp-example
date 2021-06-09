import { DraftItem } from "../utils/models";


export function productsAdapter(data:DraftItem[]) { 

    


}

export function groupeByCode(data: DraftItem[]): DraftItem[] {
    return data.map(
        item =>
            data.filter(value => item.product_code === value.product_code).
                reduce(function (accumulator, product: DraftItem) {
                    data = data.filter(val => item.product_code !== val.product_code)
                    return {
                        ...product,
                        quantity: product.quantity + accumulator.quantity,
                        total_price: product.total_price + accumulator.total_price,
                        m2: product.m2 + accumulator.total_price,
                        ml: product.ml + accumulator.ml

                    };
                }, new DraftItem())

    ).filter(row => row.product_code)

}
