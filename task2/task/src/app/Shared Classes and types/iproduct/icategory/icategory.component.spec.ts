import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICategoryComponent } from './icategory.component';

describe('ICategoryComponent', () => {
  let component: ICategoryComponent;
  let fixture: ComponentFixture<ICategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ICategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
