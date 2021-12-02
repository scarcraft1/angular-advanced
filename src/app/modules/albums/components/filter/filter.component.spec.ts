import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsFilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: AlbumsFilterComponent;
  let fixture: ComponentFixture<AlbumsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
