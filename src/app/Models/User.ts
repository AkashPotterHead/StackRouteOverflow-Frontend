/*
@author : Manik Mudholkar
@desc : User class skeleton
@created on: 15-8-2020
@modified on: -
@modified by: -
*/

import { Answer } from './Answer';
import { Question } from './Question';

export interface User {
	id: number;
	name: string;
	city: string;
	country: string;
	email: string;
	designation: string;
	questions: Question[];
	answers: Answer[];
}
