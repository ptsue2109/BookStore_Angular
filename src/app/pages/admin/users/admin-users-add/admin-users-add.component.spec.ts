import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersAddComponent } from './admin-users-add.component';

describe('AdminUsersAddComponent', () => {
  let component: AdminUsersAddComponent;
  let fixture: ComponentFixture<AdminUsersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
