import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroDetailComponent} from "./component/hero/hero-detail.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {HeroesComponent} from "./component/heroes/heroes.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
