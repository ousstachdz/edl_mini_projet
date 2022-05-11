import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
@Injectable()
export class AuthService {

    userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
    jwtHelper:JwtHelperService = new JwtHelperService();

    allowedUrls = {
        'loginUrl' : 'http://127.0.0.1:8000/api/token/',
        'refreshUrl' : 'http://127.0.0.1:8000/api/token/refresh/',
        'listProjectUrl' : 'http://127.0.0.1:8000/api/projects/',

    }

    constructor(private http:HttpClient){
        this.loadUserInfo()
        }


    isAllowedUrl(url:String):Boolean{
        let result = false
        url = url.replace('localhost','127.0.0.1')
        Object.values(this.allowedUrls).forEach(element => {
            if(element==url){
                result = true
            }
        }); 
        return result
    }

    loadUserInfo(){
        const userdata = this.userInfo.getValue()
        if (!userdata)
        {
            const access_token = localStorage.getItem('access_token');
            const refresh_token = localStorage.getItem('refresh_token');
            if(access_token && refresh_token){
                this.decryptedUserInfo(access_token,refresh_token)
            }
        }
    }

    userlogin(userPayload:any):Observable<boolean> {
        return this.http.post(this.allowedUrls.loginUrl,userPayload).pipe(
            map((value:any)=>{
                if(value){
                    localStorage.setItem('access_token',value.access);
                    localStorage.setItem('refresh_token',value.refresh);
                    this.decryptedUserInfo(value.access,value.refresh)
                    return true
                }
                return false
            })
        )
    }

    decryptedUserInfo(accesstoken:any,refreshtoken:any){
        const decrypted_token =  this.jwtHelper.decodeToken(accesstoken);
        const data = {
            access_token : accesstoken,
            refresh_token : refreshtoken,
            exp: decrypted_token.exp,
            iat: decrypted_token.iat,
            jti: decrypted_token.jti,
            token_type: decrypted_token.token_type,
            user_id: decrypted_token.user_id,
        }
        this.userInfo.next(data);
    }

    refreshToken(payload:any):Observable<any>{
        return this.http.post(this.allowedUrls.refreshUrl,payload) 
    }
}