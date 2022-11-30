import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
    adminUserid=""
  adminPassword=""

  constructor(private route:Router){}

  adminreadValues=()=>{
    let adminlogindata:any={
      adminUserid:this.adminUserid,
      adminPassword:this.adminPassword
    }

    console.log(adminlogindata)
    if (this.adminUserid=="admin" && this.adminPassword=="nestdigital") {
      this.route.navigate(["/viewcourse"])
      
    } else {
      alert("Invalid Userid/Password")
      this.adminUserid=""
      this.adminPassword=""
      
    }
  }
}
