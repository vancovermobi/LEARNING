import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../Services/login.service';

@Component({
    selector: 'loginComponent',
    template: ` <h4>User login</h4>
    <form  class="form-horizonal" #ngFormlogin="ngForm" (ngSubmit)="OnSubmit(ngFormlogin.value);">
        <label>Username :
            <input type="text" class="form-control" #name name="username" ngModel />
        </label><br>
        <label>Password :
            <input type="password" class="form-control" #password name="password" ngModel />
        </label><br>
        <button type="submit" class="btn btn-primary" >Login</button>
    </form>
    <hr>
    `
})

export class LoginComponent implements OnInit {
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