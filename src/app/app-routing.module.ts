import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { NavbarComponent} from './navbar/navbar.component'
import { LoginComponent}  from './login/login.component'
import { HomeComponent } from './home/home.component'
import { PostAdComponent } from './post-ad/post-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component'
import { SearchComponent } from './search/search.component'
import { CategoryComponent } from './category/category.component'


const routes: Routes = [  
  { path: 'home',component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'ads/:id', component: AdDetailsComponent},
  { path: 'search/:param', component: SearchComponent},
  { path: 'category/:param', component: CategoryComponent},
  { path: 'post', component: PostAdComponent, canActivate:[AuthGuardGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
