import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  user!: User|null;
  cart:Cart;
  constructor(private productsService: ProductsService,private authService:AuthService,private cartService:CartService) {
    this.authService.user$.subscribe((res) => {
      if (res) {
        this.user = res;
        console.log(this.user);
      }else{
        this.user=null;
      }
      
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.products$.subscribe((res) => (this.products = res));
  }
  sumarAlCarrito(producto:Product){
    //revisar si existe un carrito ya creado para el usuario
    const userId = this.user?._id || ''
    this.cartService.getCartByUser(userId).subscribe(res=>{
      console.log(res);
      
      //this.cartService.addProductToCart(producto,res)
      
    },err=>{
      console.log('en el error');
      const body = {
        products:[producto],
        userId:userId
      }
      this.cartService.createCart(body).subscribe(res=>console.log(res)
      )
      
    })
  }
}
