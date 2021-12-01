import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ShoppingBasketService } from '@shared';
import { Observable } from 'rxjs';
import { Album } from '../../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  @Input()
  public item!: Album;

  public songIdx = 0;
  public title = '';
  public test = { name: 'hola', lastName: 'adios' };

  public isInBasket: boolean = false;

  constructor(private cd: ChangeDetectorRef, private basketService: ShoppingBasketService<Album>) { }

  changeTitle() {
    this.item.songs[this.songIdx].title = this.title;
    const temp = this.test.lastName;
    this.test.name = this.test.lastName;
    this.test.lastName = temp;;
  }

  ngOnInit(): void {
    this.basketService.isInBasket(this.item)
    .subscribe(i => {
      this.isInBasket = i;
      this.cd.markForCheck();
    });
  }

  addToBasket() {
    this.basketService.addToBasket(this.item);
  }

  removeFromBasket() {
    this.basketService.removeFromBasket(this.item);
  }

}
