import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../game-screen/game-screen.component';

type Answer = {
  answer: string,
  correct: boolean
};

@Component({
  selector: 'app-fragen-question',
  templateUrl: './fragen-question.component.html',
  styleUrls: ['./fragen-question.component.scss']
})
export class FragenQuestionComponent implements OnInit, OnChanges {

  @Input() question: Question;
  @Output() answer: EventEmitter<boolean> = new EventEmitter<boolean>();

  answers: Answer[] = [];

  clicked: Answer = null;

  constructor() {
  }

  ngOnInit(): void {

  }

  getLabel(index: number): string {
    switch (index) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
    }
  }

  onAnswer(answer: Answer): void {
    if (!this.clicked) {
      this.clicked = answer;

      setTimeout(() => {
        this.clicked = null;
        this.answer.emit(answer.correct);
      }, 1500);
    }
  }

  onBooleanAnswer(answer: string): void {
    if (!this.clicked) {
      const correct = answer === this.question.correct_answer;
      this.clicked = {correct, answer};
      setTimeout(() => {
        this.clicked = null;
        this.answer.emit(correct);
      }, 1500);
    }
  }

  getBoolCssAnim(answer: string): string {
    if (this.clicked) {
      if (this.clicked.correct && answer === this.clicked.answer) {
        return 'true';
      } else if (!this.clicked.correct && answer !== this.clicked.answer) {
        return 'true';
      } else if (this.clicked.correct && answer !== this.clicked.answer) {
        return '';
      } else {
        return 'wrong';
      }
    } else {
      return '';
    }
  }


  getCssAnim(answer: Answer): string {

    if (this.clicked) {
      if (this.clicked.correct && this.clicked.answer === answer.answer) {
        return 'true';
      } else if (!this.clicked.correct && this.clicked.answer === answer.answer) {
        return 'wrong';
      } else if (answer.correct && !this.clicked.correct) {
        return 'true';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  /**
   * Shuffles array in place. ES6 version
   */
  shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.answers = [];
    this.answers.push({
      answer: this.question.correct_answer,
      correct: true
    });
    // @ts-ignore
    const arr = this.question.incorrect_answers.map(el => ({answer: el, correct: false}));
    this.answers.push(...arr);
    this.answers = this.shuffle(this.answers);
    console.log(this.answers);
  }
}

