import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingComponent } from './property-listing.component';

describe('PropertyListingComponent', () => {
  let component: PropertyListingComponent;
  let fixture: ComponentFixture<PropertyListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyListingComponent]
    });
    fixture = TestBed.createComponent(PropertyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
