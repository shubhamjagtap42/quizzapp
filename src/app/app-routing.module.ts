import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
// import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  // {path:'head',pathMatch:'full',component:HeaderComponent},
  {path:'login',pathMatch:'full',component:LoginComponent},
  {path:'quiz',component:QuizComponent},
  {path:'user',component:UserComponent},

  {path:'',loadChildren:() => AdminModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  LoginComponent,
  // HeaderComponent,
  QuizComponent,
  UserComponent,
  // AddquestionComponent,
  
]
