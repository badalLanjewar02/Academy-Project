import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleWingComponent } from './middle-wing.component';

describe('MiddleWingComponent', () => {
  let component: MiddleWingComponent;
  let fixture: ComponentFixture<MiddleWingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleWingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
