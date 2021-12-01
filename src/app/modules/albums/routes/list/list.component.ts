import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Album } from '../../models';
import { AlbumsService } from '../../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { class: 'relative' },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ListComponent implements OnInit {
  public albums: Album[] = [];
  public loading = false;

  constructor(private service: AlbumsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.loadAlbums().pipe(delay(10000)).subscribe(
      result => this.albums = result,
      () => { },
      () => this.loading = false);
  }

}
