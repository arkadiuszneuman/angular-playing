import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTest } from './http-test';

describe('HttpTest', () => {
  let component: HttpTest;
  let fixture: ComponentFixture<HttpTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
