import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { DatepickerComponent } from "./datepicker.component";

@NgModule({
  imports: [ CoreModule ],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent]
})
export class DatepickerModule { }
