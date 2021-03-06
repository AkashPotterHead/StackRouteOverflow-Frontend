/*@author : Manik Mudholkar
@desc : Post class skeleton
@created on: 15-8-2020
@modified on: -
@modified by: -
*/

import { Question } from './Question';
import { Catagory } from './Catagory';
import { Tag } from './Tag';
import { Answer } from './Answer';

export class Post {
	id: number;
	question: Question;
	answers: Answer[];
	authorId: number;
	catagories: Catagory[];
	tags: Tag[];
	createdAt: string;
	modifiedAt: string;

}
