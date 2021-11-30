import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { RadioComponent } from './radio.component';



@NgModule({
  declarations: [RadioComponent],
  imports: [CoreModule],
  exports: [RadioComponent]
})
export class RadioModule { }
