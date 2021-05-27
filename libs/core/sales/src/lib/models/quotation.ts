export interface Quotation {
    id: number;
    draft_id: number;
    status?: string;
    customer: SalesCustomer
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company: SalesCompany;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
}

export interface SalesCustomer {
    id?: string;
    code?: string;
    name: string;
    phone?: string;
}

 export interface SalesCompany {
    id?: string;
    name: string;
}
