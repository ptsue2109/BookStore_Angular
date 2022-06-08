import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersBannerComponent } from './sliders-banner.component';

describe('SlidersBannerComponent', () => {
  let component: SlidersBannerComponent;
  let fixture: ComponentFixture<SlidersBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
