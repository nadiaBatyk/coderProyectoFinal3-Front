import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ProductCardComponent, MenuComponent, NavbarComponent],
  imports: [
    CommonModule
  ],exports:[
    ProductCardComponent, MenuComponent
  ]
})
export class SharedModule { }
