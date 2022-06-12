import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorAddComponent } from './admin-author-add.component';

describe('AdminAuthorAddComponent', () => {
  let component: AdminAuthorAddComponent;
  let fixture: ComponentFixture<AdminAuthorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
