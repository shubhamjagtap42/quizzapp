import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(quizName: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getalldata()
  {
    return this.http.get(`${environment.url}/questions`)
  }

  postalldata(data:any)
  {
    return this.http.post(`${environment.url}/results`,data)
  }

  getanswerbyid()
  {
    return this.http.get(`${environment.url}/results`)
  }
 
}
