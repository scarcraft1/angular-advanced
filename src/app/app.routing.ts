import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './guard';
import { TestResolverService } from './services';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('@modules').then(m => m.UsuariosModule)
  },
  {
    path: 'albums',
    canActivate: [IsAdminGuard],
    data: { role: 'admin' },
    resolve: { test: TestResolverService },
    loadChildren: () => import('@modules').then(m => m.AlbumsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
