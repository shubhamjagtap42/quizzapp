import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { findIndex } from 'rxjs';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  myarray:any[]=[];

  asparray:any[]=[];
  csharparray:any[]=[];
  resultarray:any[]=[];
  selectedvalue: any; 

  csharpvalues:boolean = false
  questionTypeId:any
  i: number = 0;

  value:boolean=false

  languages: string[] = ['Asp.Net',"csharp"];
  quizes: any;
  quizName: any;
  quiz :any;
  num = 0;
  stopTimer:any;
  number:any
  time = 0
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds=Math.floor((this.ctime % (100 * 60)) / 1000)
  minuts=Math.floor((this.ctime % (100 * 60 * 60)) / (100 * 60))
  formatted_sec : any = '00';
  formatted_min : any = '00'

  checked = false
  city:boolean=false
  selectedCategory:any

  constructor(private user:UserService){}

  ngOnInit(){
    
  }

  // ngOnInit():void{
  //   this.getquestions();
  // }
  myarray1:any[]=[]
  getquestions(){

    this.user.getalldata().subscribe((data:any)=>
    {
      console.log(data)
      this.myarray = data
    
 
    for(let i=0;i<this.myarray.length;i++)
    {
   
      if( this.myarray[i].questionTypeId==1){
      this.asparray.push(this.myarray[i])

        
      }else{
        
        this.csharparray.push(this.myarray[i])
      }
    }
  })

  // console.log(this.asparray);
  // console.log(this.csharparray);
  

    this.myarray = [];
// console.log(this.myarray,'data');

    if(this.selectedvalue == 'csharp')
    {
      this.myarray1= this.csharparray
      console.log(this.myarray1);
      
      this.user.getalldata().subscribe((data:any)=>
    {
      console.log(data)
      this.myarray = data
    })
    }
    else
    if(this.selectedvalue == 'Asp.Net')
    {
      this.myarray1= this.asparray
      console.log(this.myarray1);
      
      this.user.getalldata().subscribe((data:any)=>
    {
      console.log(data)
      this.myarray = data
    })
    }
    else
    {
      console.log("false");
      
    }

    

    this.timer();

  }

  getnext()
  {
  
    this.num++;

  }

  timer(){
    this.stopTimer = setInterval(()=>
    {
      this.time++;
      if(this.seconds < 59)
      {
        this.seconds++;
      }
      else
      {
        this.seconds = 0;
        this.minuts++;
      }
      this.formatted_sec = this.seconds <10? `0${this.seconds}` : `${this.seconds}`;
      this.formatted_min = this.minuts <10? `0${this.minuts}` : `${this.minuts}`;
    },1000)
  }

  loadquiz(num:any){
    // this.resultarray =[]
    // for(let i=0; i<this.myarray.length; i++)
    // {}

    
      // let qid = this.myarray[i].questionId
      let qid = this.myarray[num].id
      // let qname = this.myarray[this.num].name
      let qid1 = this.myarray[num].questionTypeId
      // let qid2 = this.myarray[num].option
      let ans = this.selectedCategory.name
      console.log(ans);
      
      let obj = { id:qid,questionTypeId:qid1,ans:ans}
      // console.log(obj);

      this.resultarray.push(obj)
    console.log(this.resultarray);
    
  }

  postquestions()
  {
   
      // this.resultarray =[]
      // // for(let i=0; i<this.myarray.length; i++)
      // // {}

      
      //   // let qid = this.myarray[i].questionId
      //   let qid = this.myarray[this.num].id
      //   // let qname = this.myarray[this.num].name
      //   let qid1 = this.myarray[this.num].questionTypeId
      //   // let qid2 = this.myarray[num].option
      //   let ans = this.selectedCategory.name
      //   let ans1 = this.selectedCategory.isAnswer
      //   console.log(ans);
        
      //   let obj = { id:qid,questionTypeId:qid1,ans:ans,ans1:ans1}
      //   // console.log(obj);

      //   this.resultarray.push(obj)

       this.user.postalldata(this.resultarray).subscribe((data:any)=>
    {
      this.resultarray = data
      // console.log(this.resultarray );
    })
  }
  
  
}

