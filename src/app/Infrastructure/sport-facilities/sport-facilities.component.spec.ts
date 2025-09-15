import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFacilitiesComponent } from './sport-facilities.component';

describe('SportFacilitiesComponent', () => {
  let component: SportFacilitiesComponent;
  let fixture: ComponentFixture<SportFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
