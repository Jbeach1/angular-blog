import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL = 'https://unf.josecgomez.dev';
  constructor(private http: HttpClient) { }


  CreateNewPost(newPost: Post) {
    let token;
    if (localStorage.getItem('AuthToken') != null) {
      token = JSON.parse(localStorage.getItem('AuthToken')).token;
    }
    const headers = { 'Authorization': 'Bearer ' + token };
    return this.http.post<Post>(`${this.BASE_URL}/Posts`, newPost, { headers: headers });
  }


  GetPosts() {
    return this.http.get(`${this.BASE_URL}/Posts`);
  }

  deletePost(postId: string) {
    let token;
    if (localStorage.getItem('AuthToken') != null) {
      token = JSON.parse(localStorage.getItem('AuthToken')).token;
    }
    const headers = { 'Authorization': 'Bearer ' + token };
    return this.http.delete(`${this.BASE_URL}/Posts/${postId}`, { headers: headers })
  }

  editPost(post: Post, postId: string) {
    let token;
    if (localStorage.getItem('AuthToken') != null) {
      token = JSON.parse(localStorage.getItem('AuthToken')).token;
    }
    const headers = { 'Authorization': 'Bearer ' + token };
    return this.http.patch(`${this.BASE_URL}/Posts/${postId}`, post, { headers: headers });
  }
}
