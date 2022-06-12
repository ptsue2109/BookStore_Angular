import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateListComponent } from './admin-cate-list.component';

describe('AdminCateListComponent', () => {
  let component: AdminCateListComponent;
  let fixture: ComponentFixture<AdminCateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
