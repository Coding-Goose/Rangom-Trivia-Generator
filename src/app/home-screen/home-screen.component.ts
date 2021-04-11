import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

  constructor(private router: Router) {
  }

  title = 'trivia-generator';

  numberOfQuestion = 10;

  difficulties = ['EASY', 'MEDIUM', 'HARD'];

  difficulty = 'EASY';

  onPlay(): void {
    this.router.navigateByUrl('game/' + this.numberOfQuestion + '/' + this.difficulty);
  }
}
