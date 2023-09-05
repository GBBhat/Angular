import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialmodule } from 'src/material-module';
import {FormsModule} from '@angular/forms'
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,materialmodule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  respData:any;
  constructor(private service:UserService, private route:Router){}
  ngOnInit(): void {
   localStorage.clear();
  }

  LoginToProceed(userdata:any){
    if(userdata.valid)
    {
      this.service.ProccedLogin(userdata.value).subscribe(item => {
        this.respData = item;
        if(this.respData != null){
          localStorage.setItem('token', this.respData.jwtToken);
          this.route.navigate(['home']);
        }
        else{
          alert("login failed.");
        }
      });
    }

    console.log(userdata.value);
  }

  RedirectRegister(){
    this.route.navigate(['access/register']);
  }

}
