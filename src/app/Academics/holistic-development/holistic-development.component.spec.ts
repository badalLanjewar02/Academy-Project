import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolisticDevelopmentComponent } from './holistic-development.component';

describe('HolisticDevelopmentComponent', () => {
  let component: HolisticDevelopmentComponent;
  let fixture: ComponentFixture<HolisticDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolisticDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolisticDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
