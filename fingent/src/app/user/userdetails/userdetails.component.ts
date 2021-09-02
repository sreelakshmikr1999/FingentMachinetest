import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
p:number=1;
  constructor( public service: ServiceService) { }
users:any
  ngOnInit(): void {
  
  this.service.userDetails().subscribe((result:any)=>{
    this.users=result
    console.log(this.users);
  })
}
key ='id';
reverse:boolean=false;
sort(key:any){
  this.key=key;
  this.reverse=!this.reverse;
}

}
