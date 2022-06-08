import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProEditComponent } from './admin-pro-edit.component';

describe('AdminProEditComponent', () => {
  let component: AdminProEditComponent;
  let fixture: ComponentFixture<AdminProEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
