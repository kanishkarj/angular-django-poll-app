import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Choice } from '../choice';
import { ApiserviceService }from '../apiservice.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ApiserviceService]
})

export class CreateComponent implements OnInit {
  question : Question;
  constructor(
    private _apiservice: ApiserviceService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.question = new Question;
    this.question.name="";
    this.question.question="";
    this.question.choices = new Array<Choice>();
  }
  
  addChoice(){
    var c = new Choice;
    c.name = "";
    c.votes = 0;
    this.question.choices.push(c);
    console.log(c)
  }

  submit(){
    
    console.log(this.question);
    this._apiservice.addQuestion(this.question).subscribe(resNewVideo => {
      this.question.id = resNewVideo.id;
      console.log(this.question);
      this.question.choices.forEach(choice => {
        choice.question = this.question.id;
        console.log(choice);
        this._apiservice.addChoice(choice).
        subscribe(resNewVideo => {
          console.log(resNewVideo);
        });
        this.router.navigate(['/']);
      });
    });
    
  }
}
//this.router.navigate(['/']);