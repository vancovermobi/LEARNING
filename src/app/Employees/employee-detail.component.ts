import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../Services/employee.service';

@Component({
    selector: 'Employee-Detail',
    template: `
        <h4 [style.color]="'red'" >Employees_Detail</h4>
        <table class="table" *ngIf="employee" >
            <tr>
                <td>ID</td>
                <td>{{ employee.id }}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{{ employee.name }}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{{ employee.age }}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>{{ employee.status }}</td>
            </tr>
        </table>
        <a class="btn btn-primary" [routerLink]="['overview']"  >Overview</a><span>&nbsp;</span>
        <a class="btn btn-primary" [routerLink]="['project']"  >Project</a><span>&nbsp;</span>
        <a class="btn btn-warning btn-sm" [routerLink]="['/employees']" type="button" >Go back</a><span>&nbsp;</span>
        <router-outlet></router-outlet>
    `
})

export class EmployeeDetailComponent implements OnInit , OnDestroy {
    public _id: number;
    public employee: any;
    public subcription: Subscription ;
    constructor( public employeeService: EmployeeService,
                 public router: Router,
                 public activeRouter: ActivatedRoute
                 ) { }

    ngOnInit() {
        this.subcription = this.activeRouter.params.subscribe(params => {
            this._id = params['id'] ;
            console.log( this._id);
        });
        this.employeeService.GetIdUrl(this._id).subscribe((data) =>{
            this.employee = data ;
        });
     }
    ngOnDestroy(){
        this.subcription.unsubscribe();
    }
}