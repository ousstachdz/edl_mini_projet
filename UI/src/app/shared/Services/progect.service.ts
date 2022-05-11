import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class Project {
constructor(private http : HttpClient){}

getAllProjects():Observable<any>{
return this.http.get('http://localhost:8000/api/projects/')
}
}