import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private apiUrl ="http://localhost:3000/api/users/";
  constructor(private http: HttpClient) {}

  newUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', data);
  }
}
