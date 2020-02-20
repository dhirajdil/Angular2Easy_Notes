import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService} from './../service/authservice.service';
import {EasynotesdataService} from './../service/data/easynotesdata.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     username=''; 
     password='';
     errorMessage='Invalid Crenditial';
     invalidLogin=false;

  constructor(private router:Router,private authser: AuthserviceService,private eastdata:EasynotesdataService) { }

  ngOnInit() {
  }
    getWelcome(){
 	
 	this.router.navigate(['welcome']);
 	}
}


