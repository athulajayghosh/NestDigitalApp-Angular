import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HometeamComponent } from './hometeam/hometeam.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregComponent } from './employeereg/employeereg.component';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { Nav2Component } from './nav2/nav2.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';

const myRoute:Routes=[
  {path:"",
  component:Homepage1Component},
  {path:"products",
  component:HomeProductsComponent},
  {path:"about",
  component:HomeAboutComponent},
  {path:"team",
  component:HometeamComponent},
  {path:"employeelogin",
  component:EmployeeloginComponent},
  {path:"employeereg",
  component:EmployeeregComponent},
  {path:"addcourse",
  component:AddCourseComponent},
  {path:"addfriends",
  component:AddfriendsComponent},
  {path:"adminlogin",
  component:AdminloginComponent},
  {path:"viewcourse",
  component:ViewCourseComponent},
  {path:"viewfriends",
  component:ViewfriendsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Homepage1Component,
    HomeNavbarComponent,
    HomeProductsComponent,
    HomeAboutComponent,
    HometeamComponent,
    EmployeeloginComponent,
    EmployeeregComponent,
    AddCourseComponent,
    Nav2Component,
    AddfriendsComponent,
    AdminloginComponent,
    AdminNavComponent,
    ViewCourseComponent,
    ViewfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
