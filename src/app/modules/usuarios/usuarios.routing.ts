import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent, ListComponent, NewComponent } from "./routes";
import { UserDetailsResolver } from "./services";

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
    path: ':id/edit',
    component: EditComponent,
    resolve: {
      userDetails: UserDetailsResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
