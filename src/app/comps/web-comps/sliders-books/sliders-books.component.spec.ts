import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersBooksComponent } from './sliders-books.component';

describe('SlidersBooksComponent', () => {
  let component: SlidersBooksComponent;
  let fixture: ComponentFixture<SlidersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
