import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { HotCounterDirective } from './hot-counter.directive';



@NgModule({
  declarations: [HotCounterDirective],
  imports: [CoreModule],
  exports: [HotCounterDirective]
})
export class HotCounterModule { }
