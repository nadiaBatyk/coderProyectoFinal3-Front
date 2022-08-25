import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [ProductCardComponent, MenuComponent],
  imports: [
    CommonModule
  ],exports:[
    ProductCardComponent, MenuComponent
  ]
})
export class SharedModule { }
