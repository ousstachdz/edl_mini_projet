import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class AcademicYearsService {
    constructor(private http :HttpClient){}

    getAll():Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/list_years')
    }
}