import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageBackgroundComponent } from './homepage-background/homepage-background.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterChoosePlanComponent } from './register-choose-plan/register-choose-plan.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageBackgroundComponent,
    NavBarComponent,
    SignInComponent,
    RegisterFirstComponent,
    RegisterChoosePlanComponent,
    RegisterSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
