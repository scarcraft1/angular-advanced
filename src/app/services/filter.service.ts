import { ComponentRef, Injectable, ProviderToken, Type } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FilterService {
  private topic$ = new BehaviorSubject<string>('');
  private component$ = new Subject<Type<unknown>>();
  private filters$ = new BehaviorSubject<Map<string, any>>(this.createStore());

  getCurrentTopicAsync(): Observable<string> {
    return this.topic$.asObservable();
  }

  setTopic(topic: string): void {
    this.topic$.next(topic);
  }

  getSidebarAsync() {
    return this.component$.asObservable();
  }

  setFilterComponent(filter: Type<unknown>): void {
    this.component$.next(filter);
  }

  setFilter(filter: any): void {
    const topic = this.topic$.getValue();
    const filters = this.filters$.getValue();
    filters.set(topic, filter);
    console.log('setFilter', filters, filter);
    this.filters$.next(filters);
  }

  getCurrentFilterAsync(): Observable<any> {
    return this.topic$.pipe(switchMap(topic => this.getFilterForTopicAsync(topic)));
  }

  getFilterForTopicAsync(topic: string): Observable<any> {
    return this.filters$.pipe(tap(console.log), map(store => store?.get(topic) ?? null), tap(console.log));
  }

  private createStore() {
    const store = new Map<string, any>();
    return store;
  }
}
