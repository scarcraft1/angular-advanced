import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FilterService {
  private topic$ = new BehaviorSubject<string>('');
  private filters$ = new BehaviorSubject<Map<string, any>>(this.createStore());

  getCurrentTopicAsync(): Observable<string> {
    return this.topic$.asObservable();
  }

  setTopic(topic: string): void {
    this.topic$.next(topic);
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
