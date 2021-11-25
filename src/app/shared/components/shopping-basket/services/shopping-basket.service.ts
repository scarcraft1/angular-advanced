import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService<T> {
  private basket$ = new BehaviorSubject<T[]>([]);

  constructor() { }

  getBasket(): Observable<T[]> {
    return this.basket$.asObservable();
  }

  isInBasket(item: T): Observable<boolean> {
    return this.basket$.pipe(map(items => items.includes(item)));
  }

  addToBasket(item: T): void {
    this.basket$.next(this.basket$.getValue().concat(item));
  }

  removeFromBasket(item: T): void {
    this.basket$.next(this.basket$.getValue().filter(i => i !== item));
  }
}
