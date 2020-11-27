import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'Children_Project',
    template: `<h4>Children_Project</h4>
        <!-- <img [src]="image" /><br> -->
        <input type="text" #output (keyup)="0" [placeholder]="'Enter your name'" /><span>&nbsp;&nbsp;</span>
        <button class="btn btn-warning btn-sm" (click)="GotoEmployee()" >Goto_Employees</button>
        <p>Output : {{ output.value }}</p>
    `
})

export class ProjectComponent implements OnInit {
    // public image = "https://i1-vnexpress.vnecdn.net/2020/11/27/MercedesGLR1-1606446917-5905-1606447010.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=MgAa-tn4qIMhJ9d94V2ioQ";
    
    constructor( private router:Router) { }

    ngOnInit() { }
    GotoEmployee(){
        this.router.navigate(['/employees']);
    }
}