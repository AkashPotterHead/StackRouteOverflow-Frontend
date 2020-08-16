/*
@author : Manik Mudholkar
@desc : user services 
@lastModified : 15-8-2020
*/

import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//header value of a content type
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //url of the users resource
  usersUrl: string = 'http://localhost:3000/users';

  //injecting the dependancy of the service
  constructor(private http: HttpClient) {}

  /*
  @author : Manik
  @signature : getUsers
  @desc :getting users 
  @input parameters : nothing
  @output : Observable of User array
  */
  getUsers(): Observable<User[]> {
    console.log('hey from getUsers()');
    return this.http.get<User[]>(this.usersUrl);
  }

  /*
  @author : Manik
  @signature : addUser
  @desc :adding users 
  @input parameters : expect single User 
  @output : Observable of User 
  */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  /*
  @author : Manik
  @signature : updateUser
  @desc :updateing the user 
  @input parameters : expect Updated single User 
  @output : Observable of Updated single User 
  */
  updateUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user.id}`; //adding user id to the url
    return this.http.put<User>(url, user, httpOptions);
  }

  /*
  @author : Manik
  @signature : deleteUser
  @desc :deleteing the  user 
  @input parameters : expect post or an id
  @output : Observable of deleted single User  
  */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;

    const url = `${this.usersUrl}/${id}`; //adding user id to the url
    return this.http.delete<User>(url, httpOptions);
  }
}
