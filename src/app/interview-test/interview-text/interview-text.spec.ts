import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewText } from './interview-text';

describe('InterviewText', () => {
  let component: InterviewText;
  let fixture: ComponentFixture<InterviewText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
