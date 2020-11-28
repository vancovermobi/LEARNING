import { Injectable , DoCheck } from '@angular/core';

@Injectable()

export class LoginServices implements DoCheck {
    public _isLoggedIn: boolean = false;
    public User = [
        {username: "admin", password: "123" },
        {username: "liem",  password: 123 },
        {username: "Liem",  password: 123 },
        {username: "DinhLiem",  password: 123 },
        {username: "susu",  password: 6612 },
    ]
    constructor() { 
        
     }
    CheckUser(userlogin: any){
        if(    this.User.find(x=> x.username === userlogin.username) 
            && this.User.find(x=> x.password === userlogin.password)
        ){
            console.log( 'find ok ');
            this._isLoggedIn = true ;
        }else {
            this._isLoggedIn = false ;
        }
        return this._isLoggedIn ;
    }
    IsLogged(): boolean{
        return this._isLoggedIn ;
    }
    SetLogin(setlogin: boolean){
        this._isLoggedIn = setlogin ;
    }
    ngDoCheck(){
       return this._isLoggedIn;
    }
}