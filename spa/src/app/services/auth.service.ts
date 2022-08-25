import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = '/api/users'

  constructor(
    public http: HttpClient,
    private router: Router
  ) { }

  signUp(user: any) {
    return this.http.post(this.URL_API + '/signup', user)
  }

  signIn(user: any) {
    return this.http.post(this.URL_API + '/signin', user)
  }

  loggedIn(): Boolean {
    return !!sessionStorage.getItem('token')
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/signin'])
  }
}
