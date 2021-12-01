import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FilterService } from 'src/app/services';
import { Album } from '../../models';
import { AlbumsService } from '../../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { class: 'relative' },
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public albums: Album[] = [];
  public loading = false;

  public item = 0;
  public title = ''

  constructor(private service: AlbumsService, private filterService: FilterService) { }

  changeTitle() {
    this.albums[this.item].title = this.title;
  }

  ngOnInit(): void {
    this.loading = true;
    this.filterService.setTopic('albums');
    combineLatest([
      this.filterService.getFilterForTopicAsync('albums'),
      this.service.loadAlbums()
    ]).pipe(
      takeUntil(this.destroy$),
      map(([filter, albums]) => filter ? albums.filter(i => i.title.startsWith(filter.title)) : albums)
    ).subscribe(result => {
        this.albums = result;
        this.loading = false
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
