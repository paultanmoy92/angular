import { Component, OnInit } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  formData = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
      console.log(this.formData);

    
  }

}
