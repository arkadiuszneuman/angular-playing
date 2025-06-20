import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdAndParam } from './id-and-param';

describe('IdAndParam', () => {
  let component: IdAndParam;
  let fixture: ComponentFixture<IdAndParam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdAndParam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdAndParam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
