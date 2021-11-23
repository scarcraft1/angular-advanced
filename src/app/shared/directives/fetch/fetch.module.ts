import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FetchDirective } from './fetch.directive';



@NgModule({
  declarations: [FetchDirective],
  imports: [CoreModule],
  exports: [FetchDirective]
})
export class FetchModule { }
