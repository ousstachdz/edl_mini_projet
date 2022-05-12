import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class AcademicYearsService {
    
    SERVER_URL = 'http://127.0.0.1:8000/'
    constructor(private http :HttpClient){}

    getAll():Observable<any>{
        return this.http.get(`${this.SERVER_URL}api/list_years`);
    }

}