import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateAddComponent } from './admin-cate-add.component';

describe('AdminCateAddComponent', () => {
  let component: AdminCateAddComponent;
  let fixture: ComponentFixture<AdminCateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
