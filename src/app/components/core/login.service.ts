import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userLoggedInData: any;

  constructor(private http: HttpClient) {
    this.userLoggedInData = {
      username: '',
      loggedIn: false
    };
  }

  public loginCustomer(loginData: any): Observable<any> {
    return this.http.post('http://localhost:3000/login/customer', loginData);
  }

}
