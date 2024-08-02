import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-routing';
  
  constructor(private router: Router){}

  ngOnInit(){
    const obsTest$ = new Observable( observable => {
      observable.next('Return 1 From Observable')
      observable.next('Return 2 From Observable')

      setTimeout( ()=> {
        observable.next('Return From TimeOut Observable')
      }, 2000)
      observable.next('Return 3 From Observable')
      
    }).subscribe(value => {
      console.log(value);
      
    });

    obsTest$.unsubscribe();

    const osbTest = function() {
      return 'Return Form Function';

    }
      const returnData =  osbTest();
      console.log(returnData);
  }
  
  onSubmit(){

    //this.router.navigate(['/posts']);
    // this.router.navigate(['/post', 1 , 'postTitle']);
    this.router.navigate(['/posts'], { queryParams: {page: 1, order: 'newest'}});

  }

 
}
