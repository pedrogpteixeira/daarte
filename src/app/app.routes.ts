import {Routes} from '@angular/router';
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {Error404Component} from "./Components/error-404/error-404.component";
import {PopUpComponent} from "./Components/pop-up/pop-up.component";

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'popups', component: PopUpComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Error404Component},
];
