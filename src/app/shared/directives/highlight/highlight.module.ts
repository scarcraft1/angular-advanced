import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [HighlightDirective],
  imports: [CoreModule],
  exports: [HighlightDirective],
})
export class HighlightModule { }
