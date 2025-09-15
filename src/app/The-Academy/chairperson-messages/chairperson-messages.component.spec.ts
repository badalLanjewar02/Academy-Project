import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairpersonMessagesComponent } from './chairperson-messages.component';

describe('ChairpersonMessagesComponent', () => {
  let component: ChairpersonMessagesComponent;
  let fixture: ComponentFixture<ChairpersonMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairpersonMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairpersonMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
