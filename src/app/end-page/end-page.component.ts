import { Component, OnInit } from '@angular/core';
import {TemplateService} from "../template.service";

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {

  endPage: any = {};
  theme: any = {};

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getTemplate()
      .subscribe(res => {
        this.endPage = res.endPage;
        this.theme = res.theme;
      });
  }

}
