import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../../Services/PostService/post.service';
import { Post } from '../../../Models/Post';
import { Answer } from 'src/app/Models/Answer';

@Component({
	selector: 'app-question-thread-taker',
	templateUrl: './question-thread-taker.component.html',
	styleUrls: [ './question-thread-taker.component.css' ]
})
export class QuestionThreadTakerComponent implements OnInit {
	post: Post = {
		id: 1,
		question: {
			questionId: 222,
			question: 'TestQuestion Hardcoded',
			authorId: 1
		},
		answers: [
			{
				answerId: 111,
				answer: "You don't need to use proxies to download this file. The code below will work like a charm:",
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			},
			{
				answerId: 222,
				answer: "You don't need to use proxies to download this file. The code below will work like a charm:",
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			},
			{
				answerId: 333,
				answer: "You don't need to use proxies to download this file. The code below will work like a charm:",
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			},
			{
				answerId: 444,
				answer: "You don't need to use proxies to download this file. The code below will work like a charm:",
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			},
			{
				answerId: 555,
				answer: "You don't need to use proxies to download this file. The code below will work like a charm:",
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			},
			{
				answerId: 666,
				answer: 'Answers test Answers test Answers test Answers test Answers test ',
				authorId: 5,
				likes: [ 1, 2, 3 ],
				likes_count: 3
			}
		],
		authorId: 444,
		catagories: [
			{
				catagoryId: 888,
				catagory: 'catagory test'
			}
		],
		tags: [
			{
				tagId: 6666,
				tag: 'tag Test'
			}
		],
		createdAt: '2020-01-22T17:33:03.787Z',
		modifiedAt: '2020-01-22T17:33:03.787Z'
	};
	answers: Answer[] = [];

	@Output() incomingPost: EventEmitter<Post> = new EventEmitter();

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getPosts().subscribe((data) => {
			this.post = data[0];
		});
	}
}
