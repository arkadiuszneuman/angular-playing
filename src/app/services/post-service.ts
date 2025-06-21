import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);

  public getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
