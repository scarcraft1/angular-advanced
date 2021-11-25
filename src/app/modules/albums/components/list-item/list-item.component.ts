import { Component, Input, OnInit } from '@angular/core';
import { ShoppingBasketService } from '@shared';
import { Album } from '../../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  public item!: Album;

  public isInBasket: boolean = false;

  constructor(private basketService: ShoppingBasketService<Album>) { }

  ngOnInit(): void {
    this.isInBasket = this.basketService.isInBasket(this.item);
  }

  addToBasket(item: Album) {
    this.isInBasket = true;
    this.basketService.addToBasket(item);
  }

  removeFromBasket(item: Album) {
    this.isInBasket = false;
    this.basketService.removeFromBasket(item);
  }

}
