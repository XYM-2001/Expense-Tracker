import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/auth';

  constructor(private http: HttpClient) { }

  register(model: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, model);
  }

  login(model: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, model);
  }
}
