//stops navigation before login
import { Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import {CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const authGuard: CanActivateFn = (route, state) => {  
  if(localStorage.getItem('token') != null)
    return true;
  else   
    Inject(Router).navigate(['login']); 
    return false;
};

