import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandService {


  SERVER_URL = 'http://127.0.0.1:8000/'
  constructor(private http: HttpClient) { }


  
  postDemand(data: any): Observable<any>{
      return this.http.post(`${this.SERVER_URL}api/create_demand/`,data);
  }
}