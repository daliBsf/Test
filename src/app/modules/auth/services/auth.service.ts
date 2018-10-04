import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient, @Inject("SERVER_URL") private server_url,
  ) { }


  login() {
    return this.client.post(`${this.server_url}/api/users`, {
      "name": "morpheus",
      "job": "leader"
    }) as Observable<any>


  }
}
