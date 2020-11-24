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
    }, (error) => {
      this.errorMsg = error.error.messsage;
    })
  }

  generatePosts() {
    this.postsArr.forEach(element => {
      let temp = new ReturnedPost();
      temp.postId = element['postId'];
      temp.createdDate = element['createdDate'];
      temp.createdDate = temp.createdDate.substring(0, 10);
      temp.title = element['title'];
      temp.content = element['content'];
      temp.userId = element['userId'];
      temp.headerImage = element['headerImage'];
      temp.lastUpdated = element['lastUpdated'];
      this.generatedPosts.push(temp);
    });
  }
}
