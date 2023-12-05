import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  private baseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/users/register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}/users/login`, loginObj).pipe(
      tap((response) => {
        if (response.success) {
          //if login successful
          this.loggedIn.next(true);
        }
      })
    );
  }
}
