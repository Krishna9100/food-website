import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivisualProductComponent } from './indivisual-product.component';

describe('IndivisualProductComponent', () => {
  let component: IndivisualProductComponent;
  let fixture: ComponentFixture<IndivisualProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivisualProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivisualProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
