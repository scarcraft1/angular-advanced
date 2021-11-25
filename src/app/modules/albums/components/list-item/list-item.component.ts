import { Component, Input, OnInit } from '@angular/core';
import { ShoppingBasketService } from '@shared';
import { Observable } from 'rxjs';
import { Album } from '../../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  public item!: Album;

  public isInBasket!: Observable<boolean>;

  constructor(private basketService: ShoppingBasketService<Album>) { }

  ngOnInit(): void {
    this.isInBasket = this.basketService.isInBasket(this.item);
  }

  addToBasket() {
    this.basketService.addToBasket(this.item);
  }

  removeFromBasket() {
    this.basketService.removeFromBasket(this.item);
  }

}
