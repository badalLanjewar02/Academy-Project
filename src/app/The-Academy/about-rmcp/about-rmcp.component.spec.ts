import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRMCPComponent } from './about-rmcp.component';

describe('AboutRMCPComponent', () => {
  let component: AboutRMCPComponent;
  let fixture: ComponentFixture<AboutRMCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutRMCPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRMCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
