import {Routes} from '@angular/router';
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {Error404Component} from "./Components/error-404/error-404.component";

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'error-404', component: Error404Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Error404Component},
];
