import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
    selector: 'Add_Employee',
    template: `
        <h4 [style.color]="'red'" >Add_Employees</h4>
    <form class="form-horizonal" #Add="ngForm" (ngSubmit)="AddNew(Add.value);" >
        <table class="table" >
            <tr>
                <td>ID : </td>
                <td name="id" ngModel ></td>
            </tr>
            <tr>
                <td>Name : </td>
                <td>
                    <input type="text" name="name" ngModel  />
                </td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>
                    <input type="text" name="age" ngModel />
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
        <button class="btn btn-success btn-sm" type="submit" >Add_new</button>
        <span>&nbsp;</span>
        <button class="btn btn-default btn-sm" [routerLink]="['/employees']" type="button" >Cancel</button>
    </form>    
    `
})

export class AddEmployeeComponent implements OnInit {
    public selected : any;
    
    constructor( public employeeService: EmployeeService,
                 public router: Router, ) { }

    ngOnInit() { }
    AddNew(data: any){
        console.log(data);
        this.employeeService.PostAdd(data).subscribe(response =>{
            this.router.navigate(['/employees']);
        });  
    }
    
}