import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeListComponent } from './emplyee-list.component';

describe('EmplyeeListComponent', () => {
  let component: EmplyeeListComponent;
  let fixture: ComponentFixture<EmplyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmplyeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
