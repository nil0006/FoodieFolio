import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatagroyComponent } from './all-catagroy.component';

describe('AllCatagroyComponent', () => {
  let component: AllCatagroyComponent;
  let fixture: ComponentFixture<AllCatagroyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCatagroyComponent]
    });
    fixture = TestBed.createComponent(AllCatagroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
