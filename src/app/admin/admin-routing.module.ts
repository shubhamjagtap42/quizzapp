import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquestionComponent } from './addquestion/addquestion.component';

const routes: Routes = [
  {path:'question',component:AddquestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const RoutingComponent = [
  AddquestionComponent,
]
