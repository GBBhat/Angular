import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import * as alertify from 'alertifyjs';
import { Inject } from '@angular/core';


export const roleGuard: CanActivateFn = (route, state) => {  
  
  if(Inject(UserService).GetRole() == 'admin'){
    return true;
  }
  else{
    alertify.error("you are not authorized.");
    Inject(Router).navigate('[home]')
    return false;
    
  }
  
};
