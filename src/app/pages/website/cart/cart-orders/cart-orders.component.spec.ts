import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrdersComponent } from './cart-orders.component';

describe('CartOrdersComponent', () => {
  let component: CartOrdersComponent;
  let fixture: ComponentFixture<CartOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
