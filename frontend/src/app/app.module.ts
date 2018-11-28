import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FollowComponent } from './follow/follow.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HeaderContentComponent,
    FooterComponent,
    ReviewFormComponent,
    CategoryComponent,
    CategoriesComponent,
    AboutUsComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
