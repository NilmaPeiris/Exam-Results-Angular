import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Grade} from '../models/grade.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  constructor(
    private http: HttpClient
  ) { }
  getMarks(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/marks');
  }
  getMaxMarks(): Observable<any> {
    return  this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/marks/max');
  }
}
