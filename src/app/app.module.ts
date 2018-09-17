import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { QuestionComponent } from './question/question.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {TemplateService} from './template.service';
import {MatToolbarModule} from '@angular/material';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    HttpModule
  ],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
