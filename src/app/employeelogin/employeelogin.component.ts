import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  empUserid=""
  empPassword=""

  constructor(private route:Router){}

  readValues=()=>{
    let emplogindata:any={
      empUserid:this.empUserid,
      empPassword:this.empPassword
    }

    console.log(emplogindata)
    if (this.empUserid=="1122" && this.empPassword=="12345") {
      this.route.navigate(["/addcourse"])
      
    } else {
      alert("Invalid Userid/Password")
      this.empUserid=""
      this.empPassword=""
      
    }
  }


}
