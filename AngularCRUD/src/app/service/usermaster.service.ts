import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermasterService {

  apiurl="http://localhost:5258/api/UserMaster/";

  roles = [{'roleid':'admin','name':'Admin'},{'roleid':'staff','name':'Staff'},{'roleid':'user','name':'User'}]

  constructor(private http:HttpClient) { }

  GetAllUsers() {
    return this.http.get(this.apiurl + "GetAllUsers");
  }

  GetUserById(id:any){
    return this.http.get(this.apiurl + "GetUserById/" + id);
  }

  RemoveUser(id:string){
    return this.http.delete(this.apiurl + id)
  }

  UpdateUser(user:any){
    return this.http.post(this.apiurl + "ActivateUser", user)
  }

  GetAllRoles(){
    return this.roles;
  }
}
