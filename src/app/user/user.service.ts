import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public registerCustomer(customerData: any): Observable<any> {
    console.log(customerData);
    return this.http.post('http://localhost:3000/customers/registerCustomer', customerData);
  }
}
