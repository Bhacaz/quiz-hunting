import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TemplateService} from '../template.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionIndex: number;
  question: any = {};
  theme: any = {};
  progression: number = 0;

  constructor(private route: ActivatedRoute,
              private templateService: TemplateService,
              private router: Router) { }

  ngOnInit() {
    this.questionIndex = +this.route.snapshot.params.index;

    this.templateService.getTemplate()
      .subscribe(res => {
        this.question = res.questions[0];
        this.progression = (this.questionIndex + 1 / res.questions.length) * 100;
        this.theme = res.theme;
        console.log(this.question);
      });
  }

  nextQuestion() {
    console.log('hello');
    const newContext = this.questionIndex + 1;
    console.log(newContext);
    this.router.navigate(['questions', newContext]);
  }

}
