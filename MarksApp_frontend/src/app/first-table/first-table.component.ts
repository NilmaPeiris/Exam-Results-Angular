import {Grade} from './../models/grade.model';
import {Component, OnInit} from '@angular/core';
import {FormControllService} from '../form-controll.service';
import {HttpClient} from '@angular/common/http';
import {MarkService} from '../services/mark.service';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.css']
})
export class FirstTableComponent implements OnInit {


  grades: Grade[] = this.formControllService.grades;

  constructor(private formControllService: FormControllService, private markService: MarkService) {
    this.grades = this.formControllService.grades;
  }

  ngOnInit(): void {
    this.markService.getMarks()
      .subscribe((postData) => {
        this.grades = postData.data;
      });


    this.formControllService.updatedgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  }
}
