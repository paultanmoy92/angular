import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent {

  name: string = "";
  email: string = "";
  address: string = "";
  userDetails: Array<any>= [];


  onSubmit(){

 this.userDetails.push({name: this.name, email: this.email, address: this.address}) ;

  }

  deletepost(i: number){
    this.userDetails.splice(i, 1);
  }

}
