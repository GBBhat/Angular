import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  respData: any;
constructor(private router:Router, private service:UserService){}

RedirectLogin(){
  this.router.navigate(['login']);
}

reactiveForm = new FormGroup({
  userid : new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  email: new FormControl('',Validators.compose([Validators.required,Validators.email]))
});

SaveUser(){
  console.log(this.reactiveForm.value); // tied form
  this.service.Registeration(this.reactiveForm.value).subscribe(item=>{
  this.respData = item;
  if(this.respData.result == 'pass'){
    alertify.success("Registration is successful, please contact admin for activation");
    this.RedirectLogin();
  }
  else{
    alertify.error("Failed please try again!");
  }
  })
}
}
