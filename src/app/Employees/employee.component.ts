import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-EmployeeList',
    templateUrl: 'employee.component.html'
})

export class EmployeeListComponent implements OnInit {
    public EmployeesList : any [];
    public EmployeesUrlList : any [];
    public currentPage: number = 1 ;
    public intemPerPage: number = 5 ;

    constructor(public employeeService: EmployeeService ,
                //public activatedRouter: ActivatedRoute,
                // public router:Router , 
                ) { }
    ngOnInit() { 
       this.EmployeesList = this.employeeService.Getlist();
        this.LoadData();
       
    }
    // Load List Data tu Url
    LoadData(){
        this.employeeService.GetListUrl().subscribe((response: any) => {
            this.EmployeesUrlList = response ;
        },
        (error) => {console.log('System error API ' + error);}
        );
    }
    
}