/*
@author : Manik Mudholkar
@desc : Posts services 
@lastModified : 15-8-2020
*/

import { Injectable } from '@angular/core';
import { Post } from '../../Models/Post';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NotExpr } from '@angular/compiler';

//header value of a content type
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class PostService {
	//url of the posts resource
	postsUrl: string = 'http://localhost:3000/posts';

	posts: Array<Post>;

	//creating instance of behavior subject
	subject: BehaviorSubject<Array<Post>>;

	//fetch the posts from server and store it in posts aray
	fetchPostsFromServer() {
		this.http.get<Post[]>(this.postsUrl).subscribe((data) => {
			this.posts = data;
			this.subject.next(this.posts); //telling behavior subject that this will be the current value
		});
	}

	//injecting the dependancy of the service
	constructor(private http: HttpClient) {
		this.posts = [];
		this.subject = new BehaviorSubject(this.posts);
		this.fetchPostsFromServer();
	}
	/*
  @author : Manik
  @signature : getPosts
  @desc :getting posts 
  @input parameters : nothing
  @output : Observable of Post array
  */
	getPosts(): BehaviorSubject<Array<Post>> {
		return this.subject;
	}

	/*
@author : Manik
@signature : getOnePost
@desc :getting a single  post 
@input parameters : expect post or an id
@output : returning single post  
*/
	getOnePost(postId: number): Post {
		const post = this.posts.find((post) => post.id === postId);
		return Object.assign({}, post);
	}

	/*
@author : Manik
@signature : addPost
@desc :adding Post 
@input parameters : expect single Post 
@output : Observable of Post 
*/
	addPost(post: Post): Observable<Post> {
		return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
			tap((newPost) => {
				this.posts.push(newPost); // before sending data add the new Post to array
				this.subject.next(this.posts); // also notify the subject
			})
		);
	}

	/*
@author : Manik
@signature : updatePost
@desc :updateing the post 
@input parameters : expect Updated single post 
@output : Observable of Updated single post 
*/
	updatePost(post: Post): Observable<Post> {
		const url = `${this.postsUrl}/${post.id}`; //adding post id to the url
		return this.http.put<Post>(url, post, httpOptions).pipe(
			tap((updatedPost) => {
				const oldUnupdatedPost = this.posts.find((post) => post.id === updatedPost.id); // before sending data add the new Post to array
				Object.assign(oldUnupdatedPost, updatedPost);
				this.subject.next(this.posts); // also notify the subject
			})
		);
	}

	/*
@author : Manik
@signature : deletePost
@desc :deleteing the  post 
@input parameters : expect post or an id
@output : Observable of deleted single post  
*/
	deletePost(deletePostId: number): void {
		const id = deletePostId;

		const url = `${this.postsUrl}/${id}`; //adding post id to the url
		this.http.delete<Post>(url, httpOptions).subscribe(
			(done) => {
				const index = this.posts
					.map((post) => {
						return post.id;
					})
					.indexOf(deletePostId); //get the index of deletePost from posts array
				this.posts.splice(index, 1); // delete object with that index from posts array
				this.subject.next(this.posts); // also notify the subject
			},
			(err) => {}
		);
	}
}
