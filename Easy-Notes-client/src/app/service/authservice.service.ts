import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  
  authenticate(username,password){
     if(username==='in28minutes' && password==='dummy'){
     	return true;
     	}
  	}
}
