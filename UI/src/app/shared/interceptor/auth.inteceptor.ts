import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../Services/auth.service";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private authService:AuthService, private http:HttpClient){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userInfo = this.authService.userInfo.getValue()
        if (!this.authService.isAllowedUrl(req.url)){
            if (userInfo && userInfo.user_id ){
                if(Date.now() > (Number(userInfo.exp)*1000)){

                    const payload = { refresh: userInfo.refresh_token}
                    this.authService.refreshToken(payload).subscribe((value:any)=>{

                        localStorage.setItem('access_token',value.access);
                        localStorage.setItem('refresh_token',value.refresh);
                        this.authService.decryptedUserInfo(value.access,value.refresh)
                    })
                }
                const newReq = req.clone({
                    headers: req.headers.set("Authorization",`Bearer ${localStorage.getItem('access_token')}`)
                })
            return next.handle(newReq)
            }
        }
            return next.handle(req)
        
    }

}