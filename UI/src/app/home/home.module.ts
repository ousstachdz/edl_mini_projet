import { NgModule } from "@angular/core";
import { HomeRouteModule } from "./home.route.module";
import { HomeComponent } from "./home.component";

import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[HomeRouteModule,CommonModule],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule {}
