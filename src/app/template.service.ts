import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {

  constructor(private http: Http) { }

  getTemplate() {
    return this.http
      .get('./assets/template.json')
      .map(res => res.json());
  }

}
