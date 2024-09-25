import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IProductComponent } from './iproduct.component';

describe('IProductComponent', () => {
  let component: IProductComponent;
  let fixture: ComponentFixture<IProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
