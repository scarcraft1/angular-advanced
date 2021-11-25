import { Component, OnInit } from '@angular/core';
import { Album } from '../../models';
import { AlbumsService } from '../../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public albums: Album[] = [];

  constructor(private service: AlbumsService) { }

  ngOnInit(): void {
    this.service.loadAlbums()
      .subscribe(result => this.albums = result);
  }

}
