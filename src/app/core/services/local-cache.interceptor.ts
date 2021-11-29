import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class LocalCacheInterceptor implements HttpInterceptor {
  public cache = new Map<string, any>();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      if (this.cache.has(request.url)) {
        return of(new HttpResponse({ status: 200, body: this.cache.get(request.url) }));
      }

      return next.handle(request)
        .pipe(
          filter($event => $event instanceof HttpResponse),
          filter($event => ($event as HttpResponse<unknown>).ok),
          tap($event => this.cache.set(request.url, ($event as HttpResponse<unknown>).body)))
    }
    return next.handle(request);
  }
}
