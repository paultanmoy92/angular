import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = "Post for World!"

  userName = '';


  constructor() { }

  ngOnInit(): void {
  }

  uetUppercaseName($event: any){
    this.userName.toUpperCase;
  }

}
