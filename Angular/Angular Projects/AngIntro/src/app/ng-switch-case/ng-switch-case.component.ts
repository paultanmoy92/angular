import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent {

  stepForm: string = 'Something Else';

  onClick(status: any){
    //console.log();
    this.stepForm = status;
   
  }

}
