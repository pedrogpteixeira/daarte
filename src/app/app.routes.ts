import {Routes} from '@angular/router';
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {Error404Component} from "./Components/error-404/error-404.component";
import {PopUpComponent} from "./Components/pop-up/pop-up.component";
import {ProductPageComponent} from "./Components/product-page/product-page.component";
import {StorePageComponent} from "./Components/store-page/store-page.component";
import {RegisterComponent} from "./Components/account/register/register.component";
import {LoginComponent} from "./Components/account/login/login.component";
import {UserProfileComponent} from "./Components/account/profile/user-profile/user-profile.component";
import {ProfileInfoComponent} from "./Components/account/profile/profile-info/profile-info.component";
import {ProfileOrdersComponent} from "./Components/account/profile/profile-orders/profile-orders.component";
import {ProfileAddressesComponent} from "./Components/account/profile/profile-addresses/profile-addresses.component";
import {authGuard} from "./guards/auth.guard";
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import {FAQPageComponent} from "./Components/faq-page/faq-page.component";

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'account/register', component: RegisterComponent},
  {path: 'account/login', component: LoginComponent},
  {
    path: 'account', component: UserProfileComponent, canActivate: [authGuard],
    children: [
      {path: '', redirectTo: 'info', pathMatch: 'full'},
      {path: 'info', component: ProfileInfoComponent},
      {path: 'orders', component: ProfileOrdersComponent},
      {path: 'addresses', component: ProfileAddressesComponent}
    ]
  },
  {path: 'cart', component: CartPageComponent},
  {path: 'faq', component: FAQPageComponent},
  {path: 'popups', component: PopUpComponent},
  {path: 'store/:category', component: StorePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Error404Component},
];
