import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  ProccedLogin(inputData:any){
    return this.http.post("http://localhost:5258/api/User/Authenticate",inputData);
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

  Registeration(inputData:any){
    return this.http.post("http://localhost:5258/api/User/Register",inputData);
  }

  GetRole(){
    var token = localStorage.getItem('token');
      if(token != null){
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());      
      return extractdata.role;
    }else{
      return '';
    }
  }
}
