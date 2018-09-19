import {Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {QuestionComponent} from './question/question.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'questions', component: QuestionComponent },
  { path: '**', redirectTo: '' },
];
