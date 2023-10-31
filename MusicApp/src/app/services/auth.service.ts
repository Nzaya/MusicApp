import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}/users/register`, userObj)
  }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}/users/login`, loginObj)

  }
}