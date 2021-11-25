import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCiudadesComponent } from './selector-ciudades.component';

describe('SelectorCiudadesComponent', () => {
  let component: SelectorCiudadesComponent;
  let fixture: ComponentFixture<SelectorCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
