import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-pipe',
  templateUrl: './ng-pipe.component.html',
  styleUrls: ['./ng-pipe.component.css']
})
export class NgPipeComponent {

  title: string = "Angular Pipe";
  count: number = 234456;
  dcNumber: number = 2.37633;
  amount: number = 20000;
  today: Date = new Date;
  user: object = {
    'name': 'tanmoy',
    'email': 'paultanmoy21gmail.com'

  }

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
  ]

  userDetails = {
    name: "tanmoy",
    city: "Hyderabad",
    pin: "500084"
  }

  dummytext: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


}
