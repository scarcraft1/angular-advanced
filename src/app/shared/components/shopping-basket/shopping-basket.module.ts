import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { COMPONENTS } from './components';

@NgModule({
  imports: [CoreModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ShoppingBasketModule { }
