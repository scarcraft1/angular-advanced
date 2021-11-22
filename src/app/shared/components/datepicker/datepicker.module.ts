import { NgModule } from "@angular/core";
import { CoreModule } from "@core";
import { DatepickerComponent } from "./datepicker.component";

@NgModule({
  imports: [ CoreModule ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule { }
