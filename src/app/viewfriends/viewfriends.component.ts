import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent {
  
  constructor(api:ApiService){
    
    api.fetchfriends().subscribe(
      (response)=>{
        this.loading= false
        console.log(response)
        this.friendsdata=response;
      }
    )
  }

  friendsdata:any=[]
  loading:boolean=true
}
