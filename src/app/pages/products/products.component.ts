import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [
    {
      name: 'Pizza',
      price: 1800,
      image:
        'https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/pizza-fast-food-bake-bread-256.png',
    },
  ];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
}
