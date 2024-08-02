import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  title: string = "";
  postdetails: string = "";
  imageUrl: string = "";
  viewMore: string = "";
  marked = false;
 

  onKeyup($event: any) {
    console.log(this.title);

  }

  titleEvent(event: any) {

    this.title = event.target.value;
  }
  postDetailsEvent(event: any) {
    this.postdetails = event.target.value;
  }

  imageUrlEvent(event: any) {
    this.imageUrl = event.target.value;
  }

  viewMoreEvent(event: any) {
    
    this.viewMore = event.target.value;
  }

  checkedEvent(e: any){
    //console.log(e.target.checked);
    this.marked =  e.target.checked;
    
    
    
  }

}
