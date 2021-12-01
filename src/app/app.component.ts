import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-advanced';
  public linkAlbums = ['/', { outlets: { 'albums': ['albums'] } }];
  public linkUsuarios = ['/', { outlets: { 'usuarios': ['usuarios'] } }];
}
