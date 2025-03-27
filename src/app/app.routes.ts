import {Routes} from '@angular/router';
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {Error404Component} from "./Components/error-404/error-404.component";
import {PopUpComponent} from "./Components/pop-up/pop-up.component";
import {ProductPageComponent} from "./Components/product-page/product-page.component";
import {StorePageComponent} from "./Components/store-page/store-page.component";
import {RegisterComponent} from "./Components/account/register/register.component";
import {LoginComponent} from "./Components/account/login/login.component";

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'account/register', component: RegisterComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'popups', component: PopUpComponent},
  {path: 'store/:category', component: StorePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Error404Component},
];
