import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDateComponent } from './launch-date.component';

describe('LaunchDateComponent', () => {
  let component: LaunchDateComponent;
  let fixture: ComponentFixture<LaunchDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
