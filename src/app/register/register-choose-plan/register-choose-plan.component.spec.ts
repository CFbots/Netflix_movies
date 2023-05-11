import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChoosePlanComponent } from './register-choose-plan.component';

describe('RegisterChoosePlanComponent', () => {
  let component: RegisterChoosePlanComponent;
  let fixture: ComponentFixture<RegisterChoosePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterChoosePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterChoosePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
