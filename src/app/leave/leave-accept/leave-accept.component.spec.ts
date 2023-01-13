import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAcceptComponent } from './leave-accept.component';

describe('LeaveAcceptComponent', () => {
  let component: LeaveAcceptComponent;
  let fixture: ComponentFixture<LeaveAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
