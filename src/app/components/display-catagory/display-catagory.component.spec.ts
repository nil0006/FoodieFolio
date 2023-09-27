import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCatagoryComponent } from './display-catagory.component';

describe('DisplayCatagoryComponent', () => {
  let component: DisplayCatagoryComponent;
  let fixture: ComponentFixture<DisplayCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCatagoryComponent]
    });
    fixture = TestBed.createComponent(DisplayCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
