import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyIntegrationComponent } from './technology-integration.component';

describe('TechnologyIntegrationComponent', () => {
  let component: TechnologyIntegrationComponent;
  let fixture: ComponentFixture<TechnologyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
