import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { users } from '../db/usuarios.db';

@Injectable()
export class LocalCacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    if (request.url.endsWith('/users')) {
      return next.handle(request).pipe(map(event => event instanceof HttpResponse ? event.clone({ body: users }) : event));
    }
    return next.handle(request);
  }
}
