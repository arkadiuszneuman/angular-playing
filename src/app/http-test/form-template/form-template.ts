import { ChangeDetectorRef, Component, ElementRef, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post-service';
import Post from '../../models/Post';
import { FormsModule } from '@angular/forms';
import { TestValidationDirective } from '../../test-validation-directive';

@Component({
  selector: 'app-form-template',
  imports: [RouterLink, FormsModule, TestValidationDirective],
  templateUrl: './form-template.html',
  styleUrl: './form-template.scss'
})
export class FormTemplate implements OnInit {

  private postService = inject(PostService);
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef);

  id = input.required<number>()
  post = signal<{ loading: true } | { loading: false, post: Post }>({ loading: true })
  titleRef = viewChild<ElementRef<HTMLInputElement>>('titleRef');

  ngOnInit(): void {
    this.postService.getPost(this.id())
      .subscribe(x => {
        this.post.set({ loading: false, post: x });
        this.cdr.detectChanges();
        this.titleRef()?.nativeElement.focus();
      });

  }
  onSubmit() {
    const post = this.post()
    if (!post.loading) {
      this.postService.savePost(post.post).subscribe(_ => this.router.navigateByUrl(this.router.url.substring(0, this.router.url.lastIndexOf('/'))))
    }
  }
}
