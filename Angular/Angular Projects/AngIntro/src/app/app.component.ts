import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message coming from parent component';
  childOutput!: string;
  bool:boolean= true;
  userName!:string;
  message!:string;

  postArray: Array<string>= ['Post 1','Post 2','Post 3','Post 4','Post 5']
  postobjArray: Array<any> =[
  // { id: 1, postTitle: 'Post 1'},
  // { id: 2, postTitle: 'Post 2'},
  // { id: 3, postTitle: 'Post 3'},
  // { id: 4, postTitle: 'Post 4'},
  // { id: 5, postTitle: 'Post 5'},
  ]

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    // console.log(this.childComp);
    // this.message = this.childComp.childMessage;
  }

  reciveMessage($event: any){

    this.childOutput = $event;

  }

  onKeyup(){
    console.log(this.userName);
    
  }
  addpost(){
    this.postobjArray.push({id: 5, postTitle: 'Post 6'});
  }

  deletepost(index: number){
    this.postobjArray.splice(index, 1);
  }




}
