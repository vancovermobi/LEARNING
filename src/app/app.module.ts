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

 import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent, TutorialComponent, EmployeeListComponent,
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule , NgxPaginationModule,
  ],
  providers: [ EmployeeService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
