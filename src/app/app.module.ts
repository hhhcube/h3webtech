import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { ContactMeComponent } from './components/contact-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
// routes as childRoutes ???
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactMeComponent,
    BlogComponent,
    MenuComponent,
    UserDetailComponent,
    UserComponent,
    //LoginComponent,
   // ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
