import { Component, OnInit, Input } from '@angular/core';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import jwt_decode from 'jwt-decode';
import { PostService } from '../auth/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string = "";
  @Input() postId: string = "";
  @Input() userId: string = "";
  @Input() content: string = "";
  @Input() createdDate: string = "";
  @Input() headerImage: string = "";
  @Input() lastUpdated: string = "";
  errorMsg: string = '';
  confirmation: boolean = false;
  constructor(private postSvc: PostService, private router: Router) { }

  userLoggedIn: boolean = false;

  ngOnInit(): void {
  }

  editPost() {
    if (this.getCurrentUser() == this.userId) {
      this.router.navigate(['/edit-post', { postId: this.postId }]);
    } else {
      window.alert("You cannot edit posts that are not your own!");
    }

  }

  deletePost() {
    if (this.getCurrentUser() == this.userId) {
      if (confirm("Are you sure you want to delete this post?")) {
        this.executeDelete();
      }
    } else {
      window.alert("You cannot delete posts that are not your own!");
    }
  }

  setDefaultHeaderImage() {
    this.headerImage = "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
  }

  getCurrentUser() {
    let token;
    let payload;
    if (localStorage.getItem('AuthToken') != null) {
      token = JSON.parse(localStorage.getItem('AuthToken')).token;
    } else {
      return false;
    }
    payload = this.decodeToken(token);
    return payload["UserData"]["userId"];
  }

  decodeToken(token: string) {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  executeDelete() {
    this.postSvc.deletePost(this.postId).subscribe((returnedPost) => {
      this.errorMsg = '';
      window.location.reload();
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    })
  }
}

