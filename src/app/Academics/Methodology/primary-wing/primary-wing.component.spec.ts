import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryWingComponent } from './primary-wing.component';

describe('PrimaryWingComponent', () => {
  let component: PrimaryWingComponent;
  let fixture: ComponentFixture<PrimaryWingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryWingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
