import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  public item = 0;
  public title = ''

  constructor(private service: AlbumsService) { }

  changeTitle() {
    this.albums[this.item].title = this.title;
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.loadAlbums().subscribe(
      result => this.albums = result,
      () => { },
      () => this.loading = false);
  }

}
