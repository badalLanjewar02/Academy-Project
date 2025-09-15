import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceCouncellingComponent } from './guidance-councelling.component';

describe('GuidanceCouncellingComponent', () => {
  let component: GuidanceCouncellingComponent;
  let fixture: ComponentFixture<GuidanceCouncellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceCouncellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceCouncellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
