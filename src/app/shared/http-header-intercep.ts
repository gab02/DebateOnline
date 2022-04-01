import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage['authToken']) {
        const modifiedReq = req.clone({ 
            headers: req.headers.set('Authorization', `Bearer ${localStorage['idtoken']}`),
          });
        const modifiedReq1 = modifiedReq.clone({ 
            headers: modifiedReq.headers.set('Debate_provider', `${localStorage['provider']}`),
          });
          return next.handle(modifiedReq1);
    }



    return next.handle(req);
  }
}