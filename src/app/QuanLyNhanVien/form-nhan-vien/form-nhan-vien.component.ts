import { Component, OnInit } from '@angular/core';
import { NhanVienClass } from '../nhan-vien';

@Component({
  selector: 'app-form-nhan-vien',
  templateUrl: './form-nhan-vien.component.html',
  styleUrls: ['./form-nhan-vien.component.css']
})
export class FormNhanVienComponent implements OnInit {
  jobCategories = ["technology", "social", "sciences", "doctor"];
  newEmployee = new NhanVienClass(1, "Hoang", new Date(), this.jobCategories[0]);
  submitted = false ;

  constructor() { }

  ngOnInit(): void {
  }
  addNewEmployee(){
    this.newEmployee = new NhanVienClass(Math.floor(Date.now()), "", new Date(), "", "");
  }
  onSubmit(){
    this.submitted = true;
  }
}
