import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage.component";
import { HomepageBackgroundComponent } from "../homepage-background/homepage-background.component";




const routes: Routes = [
    {path: '', component: HomepageComponent}
]
@NgModule({
    declarations: [
        HomepageComponent,
        HomepageBackgroundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class HomePageModule {}