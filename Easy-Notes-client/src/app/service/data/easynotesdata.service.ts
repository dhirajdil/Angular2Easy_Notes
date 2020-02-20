import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EasynotesdataService {

  constructor(private http:HttpClient) { }
  
  retriveAllData(){
  	
  	return this.http.get('http://localhost:8080/api/notes');
  	
  	}
}
