import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersAddComponent } from './admin-orders-add.component';

describe('AdminOrdersAddComponent', () => {
  let component: AdminOrdersAddComponent;
  let fixture: ComponentFixture<AdminOrdersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrdersAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
