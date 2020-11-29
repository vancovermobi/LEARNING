import { Component, OnInit, DoCheck , AfterViewInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';
import { Route } from '@angular/compiler/src/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-EmployeeList',
    templateUrl: 'employee.component.html',
    styles:[`
        table { width: 100%; }
    `]
})

export class EmployeeListComponent implements OnInit, DoCheck {
    public EmployeesList : any [];
    public EmployeesUrlList : any [];
    public p: number = 1 ;
    public intemPerPage: number = 5 ;
    public keyword : string ;

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
   
    Search(){
        this.employeeService.Search(this.keyword).subscribe(response =>{
            this.EmployeesUrlList = response ;
        });
    }
    Delete(id){
        this.employeeService.Delete(id).subscribe(response =>{
                this.LoadData();
    });
    }
    ngDoCheck(){
        
    }
    
}
