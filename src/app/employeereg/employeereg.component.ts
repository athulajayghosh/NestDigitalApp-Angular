import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeereg',
  templateUrl: './employeereg.component.html',
  styleUrls: ['./employeereg.component.css']
})
export class EmployeeregComponent {

  empId=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  pincode=""
  district=""
  state=""
  country=""
  mobieNo=""
  email=""
  parentName=""
  gender=""
  highestDegree=""
  yearOfExp=""
  DoJ=""
  username=""
  password=""
  confirmPassword=""
 constructor(private route:Router){}

  readEmpData=()=>{
    let empdata:any={
      empId:this.empId,
      firstName:this.firstName,
      lastName:this.lastName,
      houseNo:this.houseNo,
      houseName:this.houseName,
      streetName:this.streetName,
      pincode:this.pincode,
      district:this.district,
      state:this.state,
      country:this.country,
      mobieNo:this.mobieNo,
      email:this.email,
      parentName:this.parentName,
      gender:this.gender,
      highestDegree:this.highestDegree,
      yearOfExp:this.yearOfExp,
      DoJ:this.DoJ,
      username:this.username,
      password:this.password,
      confirmPassword:this.confirmPassword
    }

    
    if (this.password==this.confirmPassword) {
      alert("Registration Successful")
      console.log(empdata)
      
    } else {
      alert("Password & Confirm Password does't match , Try Again")
      this.password=""
      this.confirmPassword=""
      
    }
    
}
}
