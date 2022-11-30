import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCourses =()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }

  addCourse = (courseDataToSend:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",courseDataToSend)
  }

  fetchfriends=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

  addfriends=(friendDataToSend:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",friendDataToSend)

  }
}
