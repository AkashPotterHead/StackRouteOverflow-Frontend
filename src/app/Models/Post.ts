/*
@author : Manik Mudholkar
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
  Answers: [Answer];
  authorId: number;
  catagories: [Catagory];
  tags: [Tag];
  createdAt: Date;
  modifiedAt: Date;
  upvotes: number;
  downvotes: number;
}
