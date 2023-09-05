import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'AngularCRUD';
  isMenuVisible = true;
  isAdmin = false;
  constructor(private route:Router, private service:UserService){}

  ngDoCheck(): void {
    console.log(this.route.url)
    const currentRouteUrl = this.route.url;
    if(currentRouteUrl == '/login' || currentRouteUrl == '/access/register'){
      this.isMenuVisible = false;
    }else{
      this.isMenuVisible = true;
    }
    console.log('role:' + this.service.GetRole());
    if(this.service.GetRole()=='admin'){      
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }    
  }
  className='routeStyle'
}
