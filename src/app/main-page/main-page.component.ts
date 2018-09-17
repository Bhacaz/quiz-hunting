import { Component, OnInit } from '@angular/core';
import {TemplateService} from '../template.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  mainPage: any = {};
  theme: any = {};

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getTemplate()
      .subscribe(res => {
        this.mainPage = res.mainPage;
        this.theme = res.theme;
      });
  }

}
