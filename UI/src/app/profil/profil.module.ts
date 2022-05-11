import { NgModule } from "@angular/core";
import { ProfilRouteModule } from "./profil.route.module";
import { ProfilComponent } from "./profil.component";

@NgModule({
    imports:[ProfilRouteModule],
    declarations:[
        ProfilComponent
    ]
})
export class ProfilModule {}
