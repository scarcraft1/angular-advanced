import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TooltipDirective } from './tooltip.directive';



@NgModule({
  declarations: [TooltipDirective],
  imports: [CoreModule],
  exports: [TooltipDirective],
})
export class TooltipModule { }
