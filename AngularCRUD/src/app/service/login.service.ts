import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }

  Logout(){
    alert("your session is expired")
    localStorage.clear();
    this.route.navigate(['login'])

  }
}
