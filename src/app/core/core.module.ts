import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../pages/login/login.module';
import { RegisterModule } from '../pages/register/register.module';
import { CartModule } from '../pages/cart/cart.module';
import { AccountModule } from '../pages/account/account.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    CartModule,
    AccountModule
  ],exports:[DashboardComponent]
})
export class CoreModule { }
