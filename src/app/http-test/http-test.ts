import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post-service';
import Post from '../models/Post';

@Component({
  selector: 'app-http-test',
  imports: [CommonModule],
  templateUrl: './http-test.html',
  styleUrl: './http-test.scss'
})
export class HttpTest implements OnInit {
  private postService = inject(PostService);
  posts = signal<Post[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.loading.set(true);
    this.postService.getPosts().subscribe(v => {
      this.posts.set(v);
      setTimeout(() => {
        this.loading.set(false)
      }, 1500);
    });
  }

}
