import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeDitelsComponent } from './emplyee-ditels.component';

describe('EmplyeeDitelsComponent', () => {
  let component: EmplyeeDitelsComponent;
  let fixture: ComponentFixture<EmplyeeDitelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmplyeeDitelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeeDitelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
