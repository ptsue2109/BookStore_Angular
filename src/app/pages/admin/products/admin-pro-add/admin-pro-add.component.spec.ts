import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProAddComponent } from './admin-pro-add.component';

describe('AdminProAddComponent', () => {
  let component: AdminProAddComponent;
  let fixture: ComponentFixture<AdminProAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
