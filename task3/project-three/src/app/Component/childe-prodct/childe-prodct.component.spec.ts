import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeProdctComponent } from './childe-prodct.component';

describe('ChildeProdctComponent', () => {
  let component: ChildeProdctComponent;
  let fixture: ComponentFixture<ChildeProdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildeProdctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildeProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
