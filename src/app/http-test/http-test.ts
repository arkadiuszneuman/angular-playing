import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post-service';
import Post from '../models/Post';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-http-test',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './http-test.html',
  styleUrl: './http-test.scss'
})
export class HttpTest implements OnInit {
  private postService = inject(PostService);
  posts = signal<Post[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.loading.set(true);
    this.postService.getPosts().subscribe({
      next: (v) => this.posts.set(v),
      error: () => {
        console.error('Error fetching posts');
      },
      complete: () => {
        setTimeout(() => {
          this.loading.set(false)
        }, 1500);
      }
    });
  }

}
