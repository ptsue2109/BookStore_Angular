import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProListComponent } from './admin-pro-list.component';

describe('AdminProListComponent', () => {
  let component: AdminProListComponent;
  let fixture: ComponentFixture<AdminProListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
