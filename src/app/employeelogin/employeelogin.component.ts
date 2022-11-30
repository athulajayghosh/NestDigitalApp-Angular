import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  empUserid=""
  empPassword=""

  readValues=()=>{
    let emplogindata:any={
      empUserid:this.empUserid,
      empPassword:this.empPassword
    }

    console.log(emplogindata)
    if (this.empUserid=="1122" && this.empPassword=="12345") {
      
    } else {
      
    }
  }


}
