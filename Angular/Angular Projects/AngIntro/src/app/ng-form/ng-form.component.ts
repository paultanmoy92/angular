import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent {

  onsubmit(f:NgForm){

    console.log(f.value);
    
  }

  getValue(f: FormControl){
    console.log(f);
    
  }

}
