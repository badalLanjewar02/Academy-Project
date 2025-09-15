import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorWingComponent } from './senior-wing.component';

describe('SeniorWingComponent', () => {
  let component: SeniorWingComponent;
  let fixture: ComponentFixture<SeniorWingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorWingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
