import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Question} from './question';
import { Choice } from './choice';

@Injectable()
export class ApiserviceService {
  private _getQuestionsUrl = 'http://localhost:8000/api/questions/';
  private _postQuestionsUrl = 'http://localhost:8000/api/questions/';
  private _postUrl = 'http://localhost:8000/api/questions/';
  private _choiceUpdateUrl = 'http://localhost:8000/api/questions/choices/';
  private _choicePostUrl = 'http://localhost:8000/api/questions/choices/';
 
  constructor(private _http: Http) { }

  getQuestions(){
    return this._http.get(this._getQuestionsUrl)
    .map((response: Response) => response.json());
  }

  getQuestion(id: string){
    console.log(this._getQuestionsUrl + id)
    return this._http.get(this._getQuestionsUrl + id)
    .map((response: Response) => response.json());
  }

  patchChoice(id: string,el : Choice){
    console.log(this._choiceUpdateUrl + id)
    return this._http.put(this._choiceUpdateUrl + id,el)
    .map((response: Response) => response.json());
  }

  addQuestion(el : Question){
    return this._http.post(this._postQuestionsUrl,el)
    .map((response: Response) => response.json());
  }

  addChoice(el : Choice){
    return this._http.post(this._choicePostUrl,el)
    .map((response: Response) => response.json());
  }

}
