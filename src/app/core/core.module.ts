import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AccountModule } from '../pages/account/account.module';
import { CartModule } from '../pages/cart/cart.module';


@NgModule({
  declarations: [DashboardComponent,MenuComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AccountModule,
    CartModule
  ]
})
export class CoreModule { }
