import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent {


  constructor(private user:UserService){}

  Questions:any
  resultarray:any[]=[]
  myarray:any[]=[]
  myanswers:any[]=[]
  selectedCategory:any

  isvisible = false

  showquestions()
  {
    this.isvisible = true
  
    this.displaydata();

   }

   displaydata()
   {

    this.user.getanswerbyid().subscribe((data:any)=>
    {

      console.log(data);
      this.resultarray =data
      
      // this.resultarray = data
      // console.log(this.resultarray);
      

    })
   }

}
