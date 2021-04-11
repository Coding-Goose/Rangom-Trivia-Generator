import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../game-screen/game-screen.component';

@Component({
  selector: 'app-boolean-question',
  templateUrl: './boolean-question.component.html',
  styleUrls: ['./boolean-question.component.scss']
})
export class BooleanQuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
