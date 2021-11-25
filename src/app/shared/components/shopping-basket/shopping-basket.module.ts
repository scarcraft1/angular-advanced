import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ShoppingBasketComponent } from './shopping-basket.component';

@NgModule({
  imports: [CoreModule],
  exports: [ShoppingBasketComponent],
  declarations: [ShoppingBasketComponent],
})
export class ShoppingBasketModule { }
