import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { EmployeeService } from './Services/employee.service';
import { EmployeeListComponent } from './Employees/employee.component';
import { HomeComponent } from './home.component';
import { LoginComponent} from './Router/login.component';
import { NotFoundPageComponent } from './Router/notfoundpage.component';
import { appRoutes } from './Router/routing.routes';

 import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent, TutorialComponent, EmployeeListComponent, HomeComponent, LoginComponent,
    NotFoundPageComponent , 
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule , NgxPaginationModule, appRoutes,
    
  ],
  providers: [ EmployeeService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
