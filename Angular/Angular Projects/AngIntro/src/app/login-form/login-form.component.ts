import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { noSpace } from '../validetors/custom.validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form: any;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      username: ['',  [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceVlidations
      ]],

      password: ['', Validators.required]
    })

  }

  get userName(){
    return this.form.get('username');
  }

  get passWord(){
    return this.form.get('password');
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
