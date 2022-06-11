import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePanelComponent } from './aside-panel.component';

describe('AsidePanelComponent', () => {
  let component: AsidePanelComponent;
  let fixture: ComponentFixture<AsidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
