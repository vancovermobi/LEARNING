import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { LoginServices } from '../Services/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate{
    constructor(private loginService: LoginServices){}
    canActivate(){
        return this.loginService.IsLogged();
    }
}