import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from "./component/hero/hero-detail.component";
import {HeroService} from "./service/hero/hero.service";
import {HeroesComponent} from "./component/heroes/heroes.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
