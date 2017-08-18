import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { Choice } from '../choice';
import { ApiserviceService }from '../apiservice.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  providers: [ApiserviceService]
})
export class VoteComponent implements OnInit {
  id: string;
  question : Question;
  private sub: any;
  constructor(private route: ActivatedRoute, 
    private _apiservice: ApiserviceService, 
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
        console.log(this.id);
       // In a real app: dispatch action to load the details here.
       this._apiservice.getQuestion(this.id).subscribe(resData => this.question = resData);
    });
    this._apiservice.getQuestion(this.id).subscribe(resData => this.question = resData);
  }

  onSelect(choice :Choice){
    console.log(choice);
    choice.votes = +choice.votes + 1;
    this._apiservice.patchChoice(choice.id.toString(), choice).
    subscribe(resNewVideo => {
      console.log(choice);
      this.router.navigate(['/']);
    });
  }
}
