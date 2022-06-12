import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateEditComponent } from './admin-cate-edit.component';

describe('AdminCateEditComponent', () => {
  let component: AdminCateEditComponent;
  let fixture: ComponentFixture<AdminCateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
