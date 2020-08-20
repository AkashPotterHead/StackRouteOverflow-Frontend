/*
@author : Manik Mudholkar
@desc : user services 
@lastModified : 15-8-2020
*/

import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { of } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

//header value of a content type
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class UserService {
	//url of the users resource
	usersUrl: string = 'http://localhost:3000/users';

	users: Array<User>;

	//creating instance of behavior subject
	subject: BehaviorSubject<Array<User>>;

	//fetch the posts from server and store it in posts aray
	fetchUsersFromServer() {
		return this.http.get<User[]>(this.usersUrl).subscribe((data) => {
			this.users = data;
			this.subject.next(this.users); //telling behavior subject that this will be the current value
		});
	}

	//injecting the dependancy of the service
	constructor(private http: HttpClient) {
		this.users = [];
		this.subject = new BehaviorSubject(this.users);
		this.fetchUsersFromServer(); //fetching the users and populating users array as soon as application is constructed
	}

	/*
  @author : Manik
  @signature : getUsers
  @desc :getting users 
  @input parameters : nothing
  @output : Observable of User array
  */
	getUsers(): BehaviorSubject<Array<User>> {
		return this.subject;
	}

	/*
  @author : Manik
  @signature : getOneUser
  @desc :getting the single user 
  @input parameters : expect an id
  @output : Observable of single User  
  */
	getOneUser(userId: number): User {
		const singleUser = this.users.find((user) => user.id === userId);
		console.log(this.users)
		console.log(singleUser);
		return Object.assign({}, singleUser);
	}

	/*
  @author : Manik
  @signature : addUser
  @desc :adding users 
  @input parameters : expect single User 
  @output : Observable of User 
  */
	addUser(user: User): Observable<User> {
		return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
			tap((newUser) => {
				this.users.push(newUser); // before sending data add the new User to array
				this.subject.next(this.users); // also notify the subject
			})
		);
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
		return this.http.put<User>(url, user, httpOptions).pipe(
			tap((updatedUser) => {
				const oldUnupdatedUser = this.users.find((user) => user.id === updatedUser.id); // before sending data add the new User to array
				Object.assign(oldUnupdatedUser, updatedUser);
				this.subject.next(this.users); // also notify the subject
			})
		);
	}

	/*
  @author : Manik
  @signature : deleteUser
  @desc :deleteing the  user 
  @input parameters : expect user or an id
  @output : Observable of deleted single User  
  */
	deleteUser(deleteUserId: number): void {
		const id = deleteUserId;

		const url = `${this.usersUrl}/${id}`; //adding user id to the url
		this.http.delete<User>(url, httpOptions).subscribe(
			(done) => {
				const index = this.users
					.map((user) => {
						return user.id;
					})
					.indexOf(deleteUserId); //get the index of deletePost from posts array
				this.users.splice(index, 1); // delete object with that index from posts array
				this.subject.next(this.users); // also notify the subject
			},
			(err) => {}
		);
	}
}
