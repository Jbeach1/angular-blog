import { Component, OnInit } from '@angular/core';
import { PostService } from '../auth/services/post.service';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { Router } from '@angular/router';
import alasql from 'alasql';
import { ReturnedPost } from '../returned-post.model';
import { generate } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  constructor(private postSvc: PostService, private authSvc: AuthGuardService, private router: Router) { }
  errorMsg = '';
  posts = false;
  postsArr: [];
  generatedPosts: ReturnedPost[] = [];
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postSvc.GetPosts().subscribe((returnedPosts) => {
      this.errorMsg = '';
      this.postsArr = alasql('SELECT * FROM ? ORDER BY lastUpdated desc', [returnedPosts]);
      this.generatePosts();
      if (this.generatedPosts.length < 1) {
        this.posts = false;
      } else {
        this.posts = true;
      }
    }, (error) => {
      this.errorMsg = error.error.messsage;
    })
  }

  generatePosts() {
    this.postsArr.forEach(element => {
      let post = new ReturnedPost();
      post.postId = element['postId'];
      post.createdDate = element['createdDate'];
      post.createdDate = post.createdDate.substring(0, 10);
      post.title = element['title'];
      post.content = element['content'];
      post.userId = element['userId'];
      post.headerImage = element['headerImage'];
      post.lastUpdated = element['lastUpdated'];
      this.generatedPosts.push(post);
    });
  }
}
