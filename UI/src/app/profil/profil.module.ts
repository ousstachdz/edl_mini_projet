import { NgModule } from "@angular/core";
import { ProfilRouteModule } from "./profil.route.module";
import { ProfilComponent } from "./profil.component";
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
    imports:[
        MatIconModule,
        ProfilRouteModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule 
     ],
    declarations:[
        ProfilComponent
    ]
})
export class ProfilModule {}
