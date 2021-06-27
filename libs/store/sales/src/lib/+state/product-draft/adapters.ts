import { Product } from "./products-draft.models";


export function productsAdapter(data:Product[]) { 

    


}

export function groupeByCode(data: Product[]): Product[] {
    return data.map(
        item =>
            data.filter(value => item.product_code === value.product_code).
                reduce(function (accumulator, product: Product) {
                    data = data.filter(val => item.product_code !== val.product_code)
                    return {
                        ...product,
                        quantity: product.quantity + accumulator.quantity,
                        total_price: product.total_price + accumulator.total_price,
                        m2: product.m2 + accumulator.total_price,
                        ml: product.ml + accumulator.ml

                    };
                }, new Product())

    ).filter(row => row.product_code)

}
