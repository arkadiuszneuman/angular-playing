import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components } from './components';

describe('Components', () => {
  let component: Components;
  let fixture: ComponentFixture<Components>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Components);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input works', async () => {
    const input1 = fixture.nativeElement.querySelector('#input1')
    const input2 = fixture.nativeElement.querySelector('#input2')

    input1.value = "Arek";
    input1.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    expect(input2.value).toBe('Arek')
  })
});
