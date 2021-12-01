import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('@modules').then(m => m.UsuariosModule),
    outlet: 'usuarios'
  },
  {
    path: 'albums',
    loadChildren: () => import('@modules').then(m => m.AlbumsModule),
    outlet: 'albums'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
