import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRouteModule } from "./home.route.module";
import { BrowserModule } from '@angular/platform-browser'

import { AngularFileUploaderModule } from "angular-file-uploader";

import { HomeComponent } from "./home.component";
import { ContactComponent } from "../contact/contact.component";

@NgModule({
    imports:[HomeRouteModule,
            CommonModule,
            AngularFileUploaderModule,
            FormsModule  ,
            ReactiveFormsModule , 
        ],
        declarations:[
        ContactComponent,
        HomeComponent
    ]
})
export class HomeModule {}
