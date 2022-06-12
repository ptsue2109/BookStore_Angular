import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorEditComponent } from './admin-author-edit.component';

describe('AdminAuthorEditComponent', () => {
  let component: AdminAuthorEditComponent;
  let fixture: ComponentFixture<AdminAuthorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
