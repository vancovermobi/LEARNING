import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';

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
import { LoginServices } from './Services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';


 import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MoviesComponent } from './movies/movies.component';
import { Movie } from './Models/movie';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent, TutorialComponent, EmployeeListComponent, HomeComponent, LoginComponent,
    NotFoundPageComponent , AddEmployeeComponent, EmployeeDetailComponent,EditEmployeeComponent,
    OverviewComponent, ProjectComponent, MaterialComponent, MoviesComponent, MovieDetailsComponent, 
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule , NgxPaginationModule, appRoutes, BrowserAnimationsModule,
    MatSliderModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule,
    MatTableModule, MatRadioModule, MatPaginatorModule,CommonModule, 
    
  ],
  providers: [ EmployeeService,LoginServices, CheckLoginGuard, Movie, MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
