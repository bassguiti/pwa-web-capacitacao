import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(newTask: any): Observable<any> {
    return this.http.post("http://www.mocky.io/v2/5d155bca0e00002c00a112ad",newTask);
  } 
}
