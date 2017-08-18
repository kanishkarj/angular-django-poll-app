import { Component, OnInit } from '@angular/core';
import { Question } from '../question'
import { ApiserviceService }from '../apiservice.service' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiserviceService]
})
export class HomeComponent implements OnInit {
  questions: Array<Question>;
  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    this._apiservice.getQuestions().subscribe(resVideoData => this.questions = resVideoData);
  }
  private hidenewQuestion = true;
  selectedQuestion: Question;

}
