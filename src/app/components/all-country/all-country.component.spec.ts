import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountryComponent } from './all-country.component';

describe('AllCountryComponent', () => {
  let component: AllCountryComponent;
  let fixture: ComponentFixture<AllCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCountryComponent]
    });
    fixture = TestBed.createComponent(AllCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
