import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent}
]
@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
