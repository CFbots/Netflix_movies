import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { RegisterFirstComponent } from "./register-first/register-first.component";
import { RegisterSecondComponent } from "./register-second/register-second.component";
import { RegisterChoosePlanComponent } from "./register-choose-plan/register-choose-plan.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {path: '', component: RegisterComponent,
    children: [
        { path: '1', component: RegisterFirstComponent },
        { path: '2', component: RegisterSecondComponent },
        { path: '3', component: RegisterChoosePlanComponent },
        { path: '', redirectTo: '1', pathMatch: 'full'}
    ]}
]
@NgModule({
    declarations: [
        RegisterFirstComponent,
        RegisterSecondComponent,
        RegisterChoosePlanComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    exports: [

    ]
})
export class RegisterModule {}