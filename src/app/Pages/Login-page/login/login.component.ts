import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm=new FormGroup({

    useremail: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  signIn(){
    console.log(this.loginForm.value)
}
  ngOnInit(): void {
  }

}
