import {Routes} from '@angular/router';
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {Error404Component} from "./Components/error-404/error-404.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '**', component: Error404Component}
];
