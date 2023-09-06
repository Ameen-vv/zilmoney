import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IUserModel } from '../models/userModel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }

  private baseUrl:string = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';

  getUser():Observable<IUserModel[]>{
    return this.http.get<IUserModel[]>(this.baseUrl);
  }  


}
