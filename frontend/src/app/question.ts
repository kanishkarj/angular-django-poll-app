import { Choice } from './choice';

export class Question {
    id: Number;
    name: string;
    question: string;
    date_created: string;
    choices: Choice[];
}
