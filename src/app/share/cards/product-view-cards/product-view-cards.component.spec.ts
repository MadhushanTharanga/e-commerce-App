import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewCardsComponent } from './product-view-cards.component';

describe('ProductViewCardsComponent', () => {
  let component: ProductViewCardsComponent;
  let fixture: ComponentFixture<ProductViewCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViewCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductViewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
