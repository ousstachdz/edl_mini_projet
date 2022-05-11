import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthRouteGuard  implements CanActivate {

    constructor(private authService:AuthService, private route:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    (boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>)
    {
    const userInfo = this.authService.userInfo.getValue()
        if (userInfo && userInfo.user_id){
            if(state.url.indexOf('login')> -1){
                this.route.navigate(['/profil'])
                return false
            }
        }else{
            if(state.url.indexOf('profil')> -1){
                this.route.navigate(['/login'])
                return false
            }
        }
    return true
    }
    
}