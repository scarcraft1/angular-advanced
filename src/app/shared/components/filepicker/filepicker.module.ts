import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FilepickerComponent } from './filepicker.component';


@NgModule({
  declarations: [
    FilepickerComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [ FilepickerComponent ]
})
export class FilepickerModule { }
