import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}
  getCartByUser(userId: string) {
    return this.httpClient.get<Cart>(
      `${environment.apiUrlDev}/api/carrito?userId=${userId}`
    );
  }
  createCart(body:Cart){
    return this.httpClient.post<Cart>(
      `${environment.apiUrlDev}/api/carrito`,body
    );
  }
  addProductToCart(product:Product,cart:Cart){
    return this.httpClient.post<Cart>(
      `${environment.apiUrlDev}/api/carrito/${cart._id}/productos`,product
    );
  }
}
