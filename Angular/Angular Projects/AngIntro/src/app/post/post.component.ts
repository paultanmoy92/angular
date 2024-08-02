import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Service/post.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent {

  title:string = 'List Of Posts';
  childMessage: string = 'From Child Component'
  formPostList: string ='List coming from post-list component'
  outputChildMessage: string = 'Message Child Component Via Output'
  posts!: Array<any>;

  @Input() parentMessage!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

  constructor( private postService : PostService){
    // let postService = new PostService();
    this.posts = postService.postList;
    
  }

  addPost(){
     
    let addNewPost: Post ={
      id: 7,
      postTitle:"Post 7"
    }

    this.postService.addPost(addNewPost);

  }




}
