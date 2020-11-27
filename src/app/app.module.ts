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
import { AddEmployeeComponent } from './Employees/employee-add.component';
import { EmployeeDetailComponent } from './Employees/employee-detail.component';
import { EditEmployeeComponent } from './Employees/employee-edit.component';
import { OverviewComponent } from './Employees/employee-overview.component';
import { ProjectComponent } from './Employees/employee-project.component';

 import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent, TutorialComponent, EmployeeListComponent, HomeComponent, LoginComponent,
    NotFoundPageComponent , AddEmployeeComponent, EmployeeDetailComponent,EditEmployeeComponent,
    OverviewComponent, ProjectComponent, 
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule , NgxPaginationModule, appRoutes,
    
  ],
  providers: [ EmployeeService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
