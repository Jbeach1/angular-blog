import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/services/user.service';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { PostService } from '../auth/services/post.service';
import { Post } from '../auth/models/post.model';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postSvc: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }
  title: string = '';
  content: string = '';
  headerImage: string = '';
  errorMsg: string = '';
  newPost: Post;
  postId: string = ""
  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
    this.newPost = new Post();
  }

  editPost() {
    this.newPost.content = this.content;
    this.newPost.title = this.title;
    this.newPost.headerImage = this.headerImage;
    this.postSvc.editPost(this.newPost, this.postId).subscribe((returnedPost) => {
      this.errorMsg = '';
      this.router.navigate(['/home']);
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    })
  }

}
