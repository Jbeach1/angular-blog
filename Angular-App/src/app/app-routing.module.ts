import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { SecretPlaceComponent } from './secret-place/secret-place.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'secret-place',
    canActivate: [AuthGuardService],
    component: SecretPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
