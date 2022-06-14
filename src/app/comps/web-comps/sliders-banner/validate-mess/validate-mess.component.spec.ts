import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateMessComponent } from './validate-mess.component';

describe('ValidateMessComponent', () => {
  let component: ValidateMessComponent;
  let fixture: ComponentFixture<ValidateMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateMessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
