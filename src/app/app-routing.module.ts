import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { BlogComponent } from "./components/blog/blog.component";
import { ContactMeComponent } from "./components/contact-me.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactMeComponent },
    { path: 'user', children: [
        {path: 'detail', component: UserDetailComponent, children: [
            {path: 'list/:name', component: UserComponent}
        ]}
    ]},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)
        //added this for our child module
        //ProductsModule
    ],
    exports: [ RouterModule ],
    providers: [ 
       // { provide: LocationStrategy, useClass: HashLocationStrategy },
      //  { provide: APP_BASE_HREF, useValue: '/' } 
      //AUTH_PROVIDERS, LoggedInGuard
    ]
})
export class AppRoutingModule {}