import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formdata!:FormGroup



  ngOnInit()
{
  this.formdata = new FormGroup({
    username: new FormControl('',Validators.required)
  })
}


  submit(){

  }

}
