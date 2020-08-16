import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  loginForm=new FormGroup({

    useremail: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  signIn(){
    console.log(this.loginForm.value)
}
  ngOnInit() {}
}
