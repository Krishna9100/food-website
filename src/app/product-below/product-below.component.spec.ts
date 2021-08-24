import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBelowComponent } from './product-below.component';

describe('ProductBelowComponent', () => {
  let component: ProductBelowComponent;
  let fixture: ComponentFixture<ProductBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
