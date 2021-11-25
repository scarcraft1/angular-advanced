import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingBasketService } from '../../services';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent<T> implements OnInit {
  public albums$?: Observable<T[]>;

  constructor(private service: ShoppingBasketService<T>) { }

  ngOnInit(): void {
    this.albums$ = this.service.getBasket();
  }

  removeFromBasket(item: T) {
    this.service.removeFromBasket(item);
  }

}
