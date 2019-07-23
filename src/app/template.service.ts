import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {

  constructor(private http: Http) { }

  getTemplate(suffix: string = null) {
    let templateUrl = './assets/template.json';
    if (suffix) {
      templateUrl = './assets/template_' + suffix + '.json';
    }
    return this.http
      .get(templateUrl)
      .map(res => res.json());
  }

}
