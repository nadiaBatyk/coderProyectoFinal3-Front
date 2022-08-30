import { Product } from "./product";

export interface Cart {
    _id?:string,
    products?:Array<Product>,
    userId: string,
}