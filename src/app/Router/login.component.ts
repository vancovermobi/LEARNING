import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../Services/login.service';

@Component({
    selector: 'loginComponent',
    template: ` <h4>User login</h4>
    <form  class="form-horizonal" #ngFormlogin="ngForm">
        <div class="example-container">
            <mat-form-field hintLabel="Max 20 characters" appearance="fill">
                <mat-label>Enter your name : </mat-label>
                <input matInput maxlength="20" placeholder="Ex. Nougat"
                type="text"  #name name="username" ngModel >
                <mat-hint align="end">{{name.value?.length || 0}}/20</mat-hint>
            </mat-form-field>

            <mat-form-field appearance="fill">
            <mat-label>Enter your password</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'" 
                       #password name="password" ngModel >
                <button mat-icon-button matSuffix (click)="hide = !hide" class="hiddenvisible"
                [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
            </mat-form-field>
        </div><br>
        <!-- <label>Username :
            <input type="text" class="form-control" #name name="username" ngModel />
      
        </label><br>
        <label>Password :
            <input type="password" class="form-control" #password name="password" ngModel />
        </label><br> -->
        <button type="submit" class="btn btn-primary" (click)="OnSubmit(ngFormlogin.value);">Login</button>
    </form>
    <hr>
    `,
    styles: [`
        .example-container { background-color: #454545 ; 
             box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
             color: #DF0029; font-size: 18px; }
        .mat-form-field + .mat-form-field {margin-left: 8px;background-color: #454545;}
        .example-right-align { text-align: right; }
        .mat-form-field-suffix, .hiddenvisible{    background-color: Transparent; background-repeat:no-repeat;
                                                    border: none;
                                                    cursor:pointer;
                                                    overflow: hidden;
                                                    outline:none;}
        input.example-right-align::-webkit-outer-spin-button,
        input.example-right-align::-webkit-inner-spin-button { display: none; }
        input.example-right-align { -moz-appearance: textfield; }
    `]
})

export class LoginComponent implements OnInit {
    hide = true;
    public checkuser : boolean ;
    constructor( private UserLogin: LoginServices, private router:Router) { }

    ngOnInit() { }
    OnSubmit(event:any){
        //console.log(event);
        this.checkuser = this.UserLogin.CheckUser(event);
        console.log(this.checkuser);
        if ( this.checkuser ){
            this.router.navigate(['employees']);
        }else{
            alert('User not found');
        }
    }
}