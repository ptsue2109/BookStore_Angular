import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetBookComponent } from './target-book.component';

describe('TargetBookComponent', () => {
  let component: TargetBookComponent;
  let fixture: ComponentFixture<TargetBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
