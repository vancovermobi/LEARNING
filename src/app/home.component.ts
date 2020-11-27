import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-Home',
    template: `<h4>This is Home_component</h4>
        <img [src]="image" /><br>
        <input type="text" #output (keyup)="0" [placeholder]="'Enter your name'" /><span>&nbsp;&nbsp;</span>
        <button class="btn btn-warning btn-sm" (click)="GotoEmployee()" >Goto_Employees</button>
        <p>Output : {{ output.value }}</p>
    `
})

export class HomeComponent implements OnInit {
    public image = "https://bietmaytinh.com/wp-content/uploads/2019/12/game-hot-ran-san-moi-3D.png";
    
    constructor( private router:Router) { }

    ngOnInit() { }
    GotoEmployee(){
        this.router.navigate(['/employees']);
    }
}