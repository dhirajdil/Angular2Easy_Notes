import { Component, OnInit } from '@angular/core';
import { EasynotesdataService } from './../service/data/easynotesdata.service';
import {Router} from '@angular/router'


export class Notes{
          constructor(public id:number,public title:string,public content:string,public createdAt:Date,public updatedAt:Date) {}  

}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
todos:Notes[]
   

  constructor(private easydataservice:EasynotesdataService,private router:Router) { 
  
  
  }

  ngOnInit() {
  this.easydataservice.retriveAllData().subscribe(
  	response=>{
  	console.log(response)
 	//this.todos=response;
  	}
  	);
  }
  
}
