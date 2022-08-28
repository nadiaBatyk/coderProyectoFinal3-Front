import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductCardComponent, MenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    ProductCardComponent, MenuComponent,NavbarComponent
  ]
})
export class SharedModule { }
