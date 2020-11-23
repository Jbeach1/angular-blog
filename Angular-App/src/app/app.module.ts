import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { ComponentHeaderNavComponent } from './component-header-nav/component-header-nav.component';
import { SecretPlaceComponent } from './secret-place/secret-place.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './auth/services/user.service';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ComponentHeaderNavComponent,
    SecretPlaceComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
