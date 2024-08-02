import { Component, Input } from '@angular/core';
import { PostService } from '../Service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  // @Input() postLists!: string;
  postlist!: Array<any>;

  constructor(public postService : PostService){

    this.postlist = postService.postList;
     
  }

}
