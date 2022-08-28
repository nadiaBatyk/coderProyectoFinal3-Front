import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject: Subject<Product[]> = new Subject<Product[]>();
  public products$: Observable<Product[]> = this.productsSubject.asObservable();
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    this.httpClient
      .get<Product[]>(`${environment.apiUrlDev}/api/productos`)
      .subscribe((res:Product[]) => {
        this.productsSubject.next(res);
      });
  }
}
