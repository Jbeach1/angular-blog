import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/services/user.service';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { PostService } from '../auth/services/post.service';
import { Post } from '../auth/models/post.model';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postSvc: PostService, private authSvc: AuthGuardService, private router: Router, private activatedRoute: ActivatedRoute) { }
  title: string = '';
  content: string = '';
  headerImage: string = '';
  errorMsg: string = '';
  newPost: Post;
  ngOnInit(): void {
    this.newPost = new Post();
  }

  createPost() {
    this.newPost.content = this.content;
    this.newPost.title = this.title;
    this.newPost.headerImage = this.headerImage;
    this.postSvc.CreateNewPost(this.newPost).subscribe((returnedPost) => {
      this.errorMsg = '';
      this.router.navigate(['/home']);
    }, (error) => {
      this.errorMsg = error.error.messsage;
    })
  }

}