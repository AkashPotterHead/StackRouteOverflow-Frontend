/*
@author : Manik Mudholkar
@desc : Posts services 
@lastModified : 15-8-2020
*/

import { Injectable } from '@angular/core';
import { Post } from '../../Models/Post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//header value of a content type
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //url of the users resource
  postsUrl: string = 'http://localhost:3000/posts';

  //injecting the dependancy of the service
  constructor(private http: HttpClient) {}
  /*
  @author : Manik
  @signature : getUsers
  @desc :getting users 
  @input parameters : nothing
  @output : Observable of User array
  */
  getPosts(): Observable<Post[]> {
    console.log('hey from getPosts()');
    return this.http.get<Post[]>(this.postsUrl);
  }

  /*
@author : Manik
@signature : addPost
@desc :adding Post 
@input parameters : expect single Post 
@output : Observable of User 
*/
  addPost(user: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, user, httpOptions);
  }

  /*
@author : Manik
@signature : updatePost
@desc :updateing the post 
@input parameters : expect Updated single post 
@output : Observable of Updated single post 
*/
  updatePost(user: Post): Observable<Post> {
    const url = `${this.postsUrl}/${user.id}`; //adding post id to the url
    return this.http.put<Post>(url, user, httpOptions);
  }

  /*
@author : Manik
@signature : deletePost
@desc :deleteing the  post 
@input parameters : expect post or an id
@output : Observable of deleted single post  
*/
  deletePost(user: Post | number): Observable<Post> {
    const id = typeof user === 'number' ? user : user.id;

    const url = `${this.postsUrl}/${id}`; //adding post id to the url
    return this.http.delete<Post>(url, httpOptions);
  }
}
