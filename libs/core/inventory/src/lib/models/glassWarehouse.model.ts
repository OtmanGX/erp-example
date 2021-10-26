import { Warehouse } from './warehouse.model';
import { ProductItem } from './shared.models';

export interface GlassWarehouse{
    substance: SubstanceGlass;
    warehouse: Warehouse;
    quantity: number;
}

export interface SubstanceGlass {
    productGlass?: ProductItem;
    glass?: PartialGlass
}

export interface PartialGlass {
    id: string;
    thickness:number;
    type?:string;
    color?:string;
}
