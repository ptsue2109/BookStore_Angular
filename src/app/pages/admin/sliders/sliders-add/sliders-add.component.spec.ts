import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersAddComponent } from './sliders-add.component';

describe('SlidersAddComponent', () => {
  let component: SlidersAddComponent;
  let fixture: ComponentFixture<SlidersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
