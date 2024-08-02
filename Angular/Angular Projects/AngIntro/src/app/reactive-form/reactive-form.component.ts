import { Component } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: any;
  emailPatten: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactnoPattan: string = "[7-9]{1}[0-9]{9}";

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      contactdetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNo: ['', [
          Validators.required,
          Validators.pattern(this.contactnoPattan)
        ]]
      }),

      skills: fb.array([])

    })



    // this.form = new FormGroup({
    //   fullName: new FormControl('',[
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     // Validators.pattern(this.emailPatten)
    //     Validators.email
    //   ]),


    //   contactdetails: new FormGroup({
    //     address: new FormControl('',[Validators.required]),
    //     shippingAddress: new FormControl('',[Validators.required]),
    //     contactNo: new FormControl('',[
    //       Validators.required,
    //       Validators.pattern(this.contactnoPattan)
    //     ])
    //   }),

    //   skills: new FormArray([])

    // });
  }

  get FullName() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('contactdetails.address');
  }

  get ShippingAddress() {
    return this.form.get('contactdetails.shippingAddress');
  }
  get ContactNo() {
    return this.form.get('contactdetails.contactNo');
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);

  }

  addSkills(skills: HTMLInputElement) {

    this.Skills.push(
      new FormControl(skills.value)
    )
    skills.value = '';
    console.log(this.form.value);

  }

  removeSkills(index: any) {
    this.Skills.removeAt(index);
  }



}
