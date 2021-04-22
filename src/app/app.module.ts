import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptor } from './auth/token.interceptor';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './services/user.service';
import {DataService} from './services/data.service'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import {AuthGuardGuard} from './auth/auth-guard.guard'
import { APIService } from './services/API.service';
import { PostAdComponent } from './post-ad/post-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component'

/* Configure Amplify resources */
Amplify.configure(awsconfig);
// Amplify.configure({
//   API: {
//     graphql_headers: async () => ({
//         'x-api-key': awsconfig.aws_appsync_apiKey
//     })
//   }
// });


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    PostAdComponent,
    AdDetailsComponent,
    SearchComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthGuardGuard,APIService, DataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
