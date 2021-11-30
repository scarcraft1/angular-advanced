import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Album } from '../../models';
import { AlbumsService } from '../../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  private destroy$ = new Subject<void>();

  public tipos = ['full-length', 'single'];
  public album?: Album;
  public maxSongsAllowed = 1;

  @ViewChild('title', { static: false })
  public title?: NgModel

  public get type() { return this.maxSongsAllowed === 1 ? 'single' : 'full-length'; }
  public set type(tipo: 'full-length' | 'single') {
    this.maxSongsAllowed = tipo === 'single' ? 1 : 15;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AlbumsService
  ) { }

  addSong() {
    this.album?.songs.push('');
  }

  removeSong(idx: number) {
    this.album?.songs.splice(idx, 1);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        map(params => Number(params.get('id'))),
        switchMap(id => this.service.getAlbum(id)))
      .subscribe(album => {
        if (!album) {
          this.router.navigate(['../', '../'], { relativeTo: this.route });
        } else {
          this.album = album;
        }
      });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - title', this.title);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - title', this.title?.errors);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - title', this.title);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - title', this.title);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
