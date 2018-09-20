import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import {QuestionComponent, QuestionDialog} from './question/question.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {TemplateService} from './template.service';
import {
  MatButtonModule, MatDialogModule, MatGridListModule, MatInputModule, MatProgressBarModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";
import { EndPageComponent } from './end-page/end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuestionComponent,
    QuestionDialog,
    EndPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    HttpModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [QuestionDialog],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
