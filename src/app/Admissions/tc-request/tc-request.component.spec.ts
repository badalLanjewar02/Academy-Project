import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCRequestComponent } from './tc-request.component';

describe('TCRequestComponent', () => {
  let component: TCRequestComponent;
  let fixture: ComponentFixture<TCRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TCRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
