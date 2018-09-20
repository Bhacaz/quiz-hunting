import {Component, Inject, OnInit} from '@angular/core';
import {TemplateService} from '../template.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

export interface DialogData {
  answerInput: string;
}

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
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              private router: Router) { }

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
    if (this.question.answer === this.inputAnswer) {
      this.questionIndex += 1;
      if (this.questionIndex === this.questions.length) {
        this.router.navigate([`end-page`]);
      }
      this.progress();
      this.question = this.questions[this.questionIndex];
      this.inputAnswer = '';

    } else if (this.inputAnswer) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionDialog, {
      width: '250px',
      data: {inputAnswer: this.inputAnswer},
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.inputAnswer = result;
      this.nextQuestion();
    });
  }

}

@Component({
  selector: 'question-dialog-app',
  templateUrl: 'question-dialog.html',
})
export class QuestionDialog {

  constructor(
    public dialogRef: MatDialogRef<QuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
