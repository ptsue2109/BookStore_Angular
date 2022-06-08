import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersEditComponent } from './sliders-edit.component';

describe('SlidersEditComponent', () => {
  let component: SlidersEditComponent;
  let fixture: ComponentFixture<SlidersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
