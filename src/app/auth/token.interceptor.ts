import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from "rxjs";
import awsconfig from '../../aws-exports';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {  
    constructor(public auth: UserService) {}  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        'x-api-key': awsconfig.aws_appsync_apiKey
      }
    });    
    return next.handle(request);
  }
}