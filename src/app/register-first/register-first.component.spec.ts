import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFirstComponent } from './register-first.component';

describe('RegisterFirstComponent', () => {
  let component: RegisterFirstComponent;
  let fixture: ComponentFixture<RegisterFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
