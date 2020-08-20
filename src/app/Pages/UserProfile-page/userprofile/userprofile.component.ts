import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/UserService/user.service';
import { User } from 'src/app/Models/User';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private userService:UserService) { }
  userData: User;
  ngOnInit(): void {
    this.getData(1);
  }

  getData(id){
    console.log(this.userService.getOneUser(id))
    
  }
}
