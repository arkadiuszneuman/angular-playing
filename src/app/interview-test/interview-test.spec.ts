import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTest } from './interview-test';

describe('InterviewTest', () => {
  let component: InterviewTest;
  let fixture: ComponentFixture<InterviewTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewTest]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InterviewTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change text color on button click', async () => {
    const mainElement = fixture.nativeElement as HTMLDivElement;
    const paragraph = mainElement.querySelector('p') as HTMLParagraphElement;
    const button = mainElement.querySelector('button') as HTMLButtonElement;

    expect(paragraph.classList.length).toBe(0)

    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(paragraph.classList.length).toBe(1)
    expect(paragraph.classList[0]).toBe('activated');
  });
});
