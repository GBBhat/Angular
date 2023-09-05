import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token = localStorage.getItem('token');
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authreq = req;
    authreq = this.AddTokenHeader(req, localStorage.getItem('token'))
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if(errordata.status == 401){
          
        }
        return throwError(errordata)
      })
      )
    
  }

  AddTokenHeader(req: HttpRequest<any>, token:any){
    return req.clone({headers: req.headers.set('Authorization', 'bearer ' + token)})
  }
}
