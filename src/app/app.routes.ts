import {Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {QuestionComponent} from './question/question.component';
import {EndPageComponent} from "./end-page/end-page.component";

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'questions/:index', component: QuestionComponent },
  { path: 'end-page', component: EndPageComponent },
  { path: '**', redirectTo: '' },
];
