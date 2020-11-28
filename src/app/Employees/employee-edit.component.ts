import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../Services/employee.service';

@Component({
    selector: 'Employee-Edit',
    template: `
        <h4 [style.color]="'red'" >Employees_Edit</h4>
    <form class="form-horizonal" #fedit="ngForm" *ngIf="employee" (ngSubmit)="SaveChange(fedit.value);" >
        <table class="table" *ngIf="employee" >
            <tr>
                <td>ID : </td>
                <td name="id" ngModel [(ngModel)]="employee.id" >{{ employee.id }}</td>
            </tr>
            <tr>
                <td>Name : </td>
                <td>
                    <input type="text" name="name" ngModel [(ngModel)]="employee.name" />
                </td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>
                    <input type="text" name="age" ngModel [(ngModel)]="employee.age" />
                </td>
            </tr>
            <tr>
                <td>Status : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;
                    <input type="radio" #true name="status" value="true" ngModel  
                    [(ngModel)]="!selected" class="form-check-input" />
                    <label for="true" class="radio-inline" > True &nbsp;</label>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input type="radio" #false name="status" ngModel value="false" 
                    [(ngModel)]="selected" class="form-check-input" >
                    <label for="false"class="radio-inline" >&nbsp;False</label>
                </td>
            </tr>
        </table>
        <button class="btn btn-primary btn-sm" type="submit" >Save_Change</button>
        <span>&nbsp;</span>
        <button class="btn btn-default btn-sm" [routerLink]="['/employees']" type="button" >Cancel</button>
    </form>    
    `
})

export class EditEmployeeComponent implements OnInit , OnDestroy {
    public selected : any;
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
            //console.log( this._id);
        });
        this.employeeService.GetIdUrl(this._id).subscribe((data) =>{
            this.employee = data ;
            this.selected = this.employee.status === 'true' ? 'true' : 'false';
        });
     }
    ngOnDestroy(){
        this.subcription.unsubscribe();
    }
    SaveChange(datachange){
        //console.log(datachange);
        this.employeeService.PutUpdate(this._id,datachange).subscribe(response => {
            //console.log(response);
            this.router.navigate(['/employees']);
        });     
    }
    
}