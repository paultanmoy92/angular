import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  postArray: Array<String> = ['Post1','Post2','Post3','Post4','Post5','Post6','Post7',]

  constructor() { }

  ngOnInit(): void {
  }

}
