import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    // now we should add a header to sendRequest
    // for this let us firat retrieve the token 
    let token = this.authService.retrieveToken();

    // cloning the request as request is immutable, also adding a header to the cloned request
    let sendRequest = request.clone({
      setHeaders: {
        Authorization : `Bearer ${token}`
      }
    });  
    
    // here the request will go to the backend application
    return next.handle(sendRequest).pipe(
      catchError((err: HttpErrorResponse)=>{
        if(err.status == 401){
          //navigate to login component using Router
        } else if(err.status == 403){
          // naviaget to forbiden component using Router
        }
        return throwError(()=>new Error("Something is wrong at the backend!"));
      })
    );
  }
}
