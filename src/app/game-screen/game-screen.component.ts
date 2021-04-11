import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


export type Question = {
  correct_answer: string,
  incorrect_answers: string[] | boolean[],
  question: string,
  type: 'multiple' | 'boolean'
};

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  questions: Question[];
  pointer: number;
  points = 0;
  displayEndScreen = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.points = 0;
    this.fetchQuestions();
  }

  private async fetchQuestions(): Promise<any> {
    const questionCount = this.route.snapshot.params.questions;
    const difficulty = this.route.snapshot.params.difficulty;
    const response: any = await this.http.get('https://opentdb.com/api.php?amount=' + questionCount + '&difficulty=' + difficulty.toLowerCase()).toPromise();
    this.questions = response.results;
    this.pointer = 0;
  }

  onBack(): void {
    this.router.navigateByUrl('');
  }

  onAnswer(correct: boolean): void {
    if (correct) {
      this.points++;
    }
    if ((this.pointer + 1) < this.questions.length) {
      this.pointer++;
    } else if ((this.pointer + 1) === this.questions.length) {
      this.displayEndScreen = true;
    }
  }

  goBack(): void {
    this.displayEndScreen = false;
    this.router.navigateByUrl('');
  }
}
