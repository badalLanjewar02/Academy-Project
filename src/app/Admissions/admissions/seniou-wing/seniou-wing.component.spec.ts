import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniouWingComponent } from './seniou-wing.component';

describe('SeniouWingComponent', () => {
  let component: SeniouWingComponent;
  let fixture: ComponentFixture<SeniouWingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniouWingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniouWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
