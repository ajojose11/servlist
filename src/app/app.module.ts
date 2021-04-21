import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptor } from './auth/token.interceptor';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import {AuthGuardGuard} from './auth/auth-guard.guard'
import { APIService } from './services/API.service';
import { PostAdComponent } from './post-ad/post-ad.component'

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
    PostAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule
  ],
  providers: [UserService, AuthGuardGuard,APIService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
