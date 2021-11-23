import { NgModule } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { AddIcons } from "./config/icons";

@NgModule()
export class VendorModule {
  constructor(library: FaIconLibrary) {
    AddIcons(library);
  }
}
