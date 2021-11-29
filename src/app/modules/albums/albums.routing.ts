import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent, ListComponent, NewComponent } from "./routes";

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
