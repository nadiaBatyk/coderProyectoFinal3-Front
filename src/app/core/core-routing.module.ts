import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
        children: [
          
          {
            path: 'login',
            loadChildren: () =>
              import('../pages/login/login.module').then((m) => m.LoginModule),
              canActivate:[LoginGuard]
          },
          {
            path: 'register',
            loadChildren: () =>
              import('../pages/register/register.module').then((m) => m.RegisterModule),
              canActivate:[LoginGuard]
          },
          {
            path: 'welcome',
            loadChildren: () =>
              import('../pages/welcome/welcome.module').then((m) => m.WelcomeModule),
             // canActivate:[AuthGuard]
          },
          {
            path: 'account',
            loadChildren: () =>
              import('../pages/account/account.module').then((m) => m.AccountModule),
             // canActivate:[AuthGuard]
          },
          {
            path: 'cart',
            loadChildren: () =>
              import('../pages/cart/cart.module').then((m) => m.CartModule),
            //  canActivate:[AuthGuard]
          },
          {
            path: 'products',
            loadChildren: () =>
              import('../pages/products/products.module').then((m) => m.ProductsModule),
            //  canActivate:[AuthGuard]
          },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
          },
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
