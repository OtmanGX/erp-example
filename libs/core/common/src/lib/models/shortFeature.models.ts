

//for company/warehouse/salePoint name

export interface ShortFeauture{
    id?:string;
    name:string;
    companyid?:string; //for warehouse

}
// for sales product
export interface Product{
    code:string;
    label:string;
    price:number;
    priceMax:number;
    priceMin:number;
    unit:string;
}

export interface ShortProvider{
    code?:string;
    name:string;
}
