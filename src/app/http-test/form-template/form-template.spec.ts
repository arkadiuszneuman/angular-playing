import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTemplate } from './form-template';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post-service';
import { defer, Observable } from 'rxjs';
import Post from '../../models/Post';

describe('FormTemplate', () => {
  let component: FormTemplate;
  let fixture: ComponentFixture<FormTemplate>;
  let getPostSpy: jasmine.Spy<(id: number) => Observable<Post>>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplate, RouterModule.forRoot([])],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormTemplate);
    const postService = TestBed.inject(PostService);
    getPostSpy = spyOn(postService, 'getPost').and.returnValue(asyncData<Post>({
      id: 2,
      title: 'Test Post',
      body: 'This is a test post body.',
      userId: 1
    }));

    fixture.componentRef.setInput('id', 2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data into the controls', () => {
    expect(fixture.nativeElement.querySelector('input[name="title"]').value).toBe('Test Post');
    expect(fixture.nativeElement.querySelector('input[name="body"]').value).toBe('This is a test post body.');
  });
});

export function asyncData<T>(data: T) {
  return defer(() => {
    console.log('asyncData called with:', data);
    return Promise.resolve(data);
  });
}