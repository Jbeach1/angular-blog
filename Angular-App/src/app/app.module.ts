import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { ComponentHeaderNavComponent } from './component-header-nav/component-header-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './auth/services/user.service';
import { LoginComponent } from './auth/login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ComponentHeaderNavComponent,
    HomeComponent,
    LoginComponent,
    CreatePostComponent,
    PostContainerComponent,
    PostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
