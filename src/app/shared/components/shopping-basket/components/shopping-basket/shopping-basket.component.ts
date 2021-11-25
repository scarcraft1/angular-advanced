import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingBasketService } from '../../services';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent<T> implements OnInit {
  public items$?: Observable<T[]>;

  constructor(private service: ShoppingBasketService<T>) { }

  ngOnInit(): void {
    this.items$ = this.service.getBasket();
  }

  removeFromBasket(item: T) {
    this.service.removeFromBasket(item);
  }

}
