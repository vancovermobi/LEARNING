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

    constructor(public employeeService: EmployeeService ,
                //public activatedRoute: ActivatedRoute,
                public router:Router , 
                ) { }
    ngOnInit() { 
       this.EmployeesList = this.employeeService.Getlist();
       this.LoadData();
       //this.Pages();
    }
    // Load List Data tu Url
    LoadData(){
        this.employeeService.GetListUrl().subscribe((response: any) => {
            this.EmployeesUrlList = response ;
        },
        (error) => {console.log('System error API ' + error);}
        );
    }
    // lay phan trang
    // Pages(){
    //     this.activatedRouter.queryParams.subscribe(params => {
    //         this.currentPage = params['pageNumber'] || 1 ;
    //     });
    // }
}