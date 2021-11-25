import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class TestResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of(true).pipe(delay(5000));
  }
}
