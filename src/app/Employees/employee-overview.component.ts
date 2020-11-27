import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'Children_Overview',
    template: `<h4>Children_Overview</h4>
        <!-- <img [src]="image" /><br> -->
        <input type="text" #output (keyup)="0" [placeholder]="'Enter your name'" /><span>&nbsp;&nbsp;</span>
        <button class="btn btn-warning btn-sm" (click)="GotoEmployee()" >Goto_Employees</button>
        <p>Output : {{ output.value }}</p>
    `
})

export class OverviewComponent implements OnInit {
    // public image = "https://i1-vnexpress.vnecdn.net/2020/11/27/mercedesglb200puluong1694jpg-1-8557-5832-1606443689.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=PvS563QUjmf3wFKM-Xkx2Q";
    
    constructor( private router:Router) { }

    ngOnInit() { }
    GotoEmployee(){
        this.router.navigate(['/employees']);
    }
}