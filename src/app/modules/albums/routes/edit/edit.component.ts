import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Album } from '../../models';
import { AlbumsService } from '../../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private album?: Album;

  public form: FormGroup;
  public tipos = ['full-length', 'single'];

  get f() {
    return this.form.controls;
  }

  get songs(): FormControl[] {
    return (this.f.songs as FormArray)?.controls as FormControl[];
  }

  get errors() {
    return this.getErrors(this.form);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: AlbumsService,
  ) {
    this.form = this.createForm();
  }

  reset() {
    (this.f.songs as FormArray).clear();
    this.album?.songs.forEach(i => (this.f.songs as FormArray).push(this.fb.control({ title: '', duration: 0 })));
    this.form.patchValue({...this.album});
  }

  newSong(value?: string) {
    (this.f.songs as FormArray)?.push(this.fb.control({ title: '', duration: 0 }, [Validators.required]));
  }

  quitarCancion(idx: number): void {
    (this.f.songs as FormArray)?.removeAt(idx);
  }

  guardar() {
    this.service.edit(this.form.value)
      .subscribe(() => { this.router.navigate(['../../'], { relativeTo: this.route }) });
  }

  private observeAlbumTypeChange(): void {
    this.f.type.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        startWith(this.f.type.value),
        debounceTime(150),
        distinctUntilChanged())
      .subscribe(value => {
        this.f.songs.clearValidators();
        if (value === 'single') {
          this.f.songs.setValidators([Validators.required, Validators.minLength(1), Validators.maxLength(1)]);
        } else if (value === 'full-length') {
          this.f.songs.setValidators([Validators.required, Validators.minLength(1)]);
        }
        this.f.songs.updateValueAndValidity();
      })
  }

  ngOnInit(): void {
    this.observeAlbumTypeChange();
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
          this.reset();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getErrors(control: AbstractControl): ValidationErrors | null {
    if (control instanceof FormControl) {
      return control.errors;
    }
    if (control instanceof FormArray) {
      return control.controls.reduce((acc, control, idx) => {
        const errors = this.getErrors(control);
        if (errors) {
          acc = acc ?? {};
          acc[idx] = errors;
        }
        return acc
      }, control.errors)
    }
    return Object.entries((control as FormGroup).controls)
      .reduce((acc, [name, control]) => {
        const errors = this.getErrors(control);
        if (errors) {
          acc = acc ?? {};
          acc[name] = errors;
        }
        return acc;
      }, control.errors);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      title: ['El título de mi nuevo album', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      type: [null, Validators.required],
      songs: this.fb.array([], [Validators.required, Validators.minLength(2)])
    });
  }
}
