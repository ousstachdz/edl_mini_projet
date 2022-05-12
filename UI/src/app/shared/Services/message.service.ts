import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class Message {

    constructor(private http:HttpClient){}
    
    DJANGO_SERVER: string = "http://127.0.0.1:8000";
    getAllMessages():Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/messages/')
    }
}