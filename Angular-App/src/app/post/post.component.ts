import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string = "";
  @Input() userId: string = "";
  @Input() content: string = "";
  @Input() createdDate: string = "";
  @Input() headerImage: string = "";
  @Input() lastUpdated: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  editPost() {
    console.log("editting");
  }

  deletePost() {
    console.log("deleting");
  }

}
