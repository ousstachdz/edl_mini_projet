import { NgModule } from "@angular/core";
import { Page_not_foundRouteModule } from "./page_not_found.route.module";
import { Page_not_foundComponent } from "./page_not_found.component";

@NgModule({
    imports:[Page_not_foundRouteModule],
    declarations:[
        Page_not_foundComponent
    ]
})
export class Page_not_foundModule {}
