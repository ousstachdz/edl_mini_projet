import { NgModule } from "@angular/core";
import { LoginRouteModule } from "./login.route.module";
import { LoginComponent } from "./login.component";
import { FormsModule} from '@angular/forms'


@NgModule({
    imports:[
        LoginRouteModule,
        FormsModule
    ],
    declarations:[
        LoginComponent,

    ]
})
export class LoginModule {}
