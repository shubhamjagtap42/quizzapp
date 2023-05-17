import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HeaderComponent } from './header/header.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './user/user.component';
// import { AddquestionComponent } from './admin/addquestion/addquestion.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    RoutingComponent,
    HeaderComponent,
    UserComponent,
    // AddquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    RadioButtonModule,
    AdminModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
