import { Component, ViewChild, OnInit, DoCheck } from '@angular/core';
import { LoginServices } from './Services/login.service';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'LEARNING';
  public isLoggedIn : boolean ;
  @ViewChild(TutorialComponent)
    private tutorialComponent: TutorialComponent;
  
  constructor(private loginService: LoginServices){}
  ngOnInit(){
    this.isLoggedIn = this.loginService.IsLogged();
  }
  ngDoCheck(){
    this.isLoggedIn = this.loginService.IsLogged();
    console.log('Check isLogin : ' + this.isLoggedIn);
  }
  LogOut(){
     this.loginService.SetLogin(false);
  }
}

