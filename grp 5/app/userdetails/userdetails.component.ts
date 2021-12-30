import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdetails } from '../userdetails';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
  userdetails!:Userdetails[];
  constructor(private createaccService:UserdetailsService,private https:HttpClient) { }
  // onSubmit(data:Userdetails)
  // {
  //   this.https.get('http://localhost:8090/api/Getcreaaac',data).subscribe((result)=>console.warn("result",result));
  //   console.warn(data);
  // }
  ngOnInit(): void {
  this.createaccService.getAllUser().subscribe((data:Userdetails[])=>{
    console.log(data);
    this.userdetails=data;
  });

  }
  ondelete(data:Userdetails){
    this.https.post('http://localhost:8090/api/delete/'+`${data.id}`,data).subscribe((result)=>{console.log(result)})
    window.location.reload();
  }

 
}