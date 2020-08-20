import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  loginForm=new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required),
    designation: new FormControl('',Validators.required),
    useremail: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required)
  })

  signIn(){
    console.log(this.loginForm.value)
}
  ngOnInit(): void {
  }

}
