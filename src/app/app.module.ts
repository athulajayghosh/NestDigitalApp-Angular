import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HometeamComponent } from './hometeam/hometeam.component';

const myRoute:Routes=[
  {path:"",
  component:Homepage1Component},
  {path:"products",
  component:HomeProductsComponent},
  {path:"about",
  component:HomeAboutComponent},
  {path:"team",
  component:HometeamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Homepage1Component,
    HomeNavbarComponent,
    HomeProductsComponent,
    HomeAboutComponent,
    HometeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
