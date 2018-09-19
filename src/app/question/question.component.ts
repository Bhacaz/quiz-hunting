import { Component, OnInit } from '@angular/core';
import {TemplateService} from '../template.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionIndex = 0;
  questions: any = {};
  question: any = {};
  theme: any = {};
  progression = 0;
  inputAnswer: string = '';

  constructor(private templateService: TemplateService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.templateService.getTemplate()
      .subscribe(res => {
        this.questions = res.questions;
        this.question = this.questions[this.questionIndex];
        this.progress();
        this.theme = res.theme;
        console.log(this.question);
      });
  }

  nextQuestion() {
    console.log(this.inputAnswer);
    if(this.question.answer === this.inputAnswer) {
      this.questionIndex += 1;
      this.progress();
      this.question = this.questions[this.questionIndex];
    } else {
      this.openSnackBar();
    }
  }

  progress() {
    this.progression = (((this.questionIndex + 1) / this.questions.length) * 100) - 10;
  }

  openSnackBar() {
    this.snackBar.open('Réessayer', null,{
      duration: 1500,
    });
  }

}
