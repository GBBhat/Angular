import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { authGuard } from './guard/auth.guard';
import { UserComponent } from './user/user.component';
import { roleGuard } from './guard/role.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"about",component:AboutComponent,canActivate:[authGuard]},
  {path:"user",component:UserComponent,canActivate:[authGuard]},
  {path:"contact", component:ContactComponent,
  children:[
    {path:"addcontact",component:AddcontactComponent},
    {path:"editcontact/:id",component:AddcontactComponent}
  ],canActivate:[authGuard]  
  },
  {path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},//lazy loading for module
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:"**",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
