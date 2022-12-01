import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})


export class ViewCourseComponent {


  constructor(api:ApiService){
    api.fetchCourses().subscribe(
      (response)=>
      {
        this.loading= false
        console.log(response)
        this.coursedata=response
      }
    )
  }
coursedata:any=[]
loading:boolean=true
}
