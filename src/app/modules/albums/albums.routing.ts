import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./routes";

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
