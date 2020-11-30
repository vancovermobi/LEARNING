import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../Employees/employee-add.component';
import { EmployeeDetailComponent } from '../Employees/employee-detail.component';
import { EditEmployeeComponent } from '../Employees/employee-edit.component';
import { OverviewComponent } from '../Employees/employee-overview.component';
import { ProjectComponent } from '../Employees/employee-project.component';
import { EmployeeListComponent } from '../Employees/employee.component';
import { CheckLoginGuard } from '../guards/check-login.guard';
import { HomeComponent } from '../home.component';
import { MaterialComponent } from '../material/material.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MoviesComponent } from '../movies/movies.component';
import { LoginComponent } from './login.component';
import { NotFoundPageComponent } from './notfoundpage.component';

const routing: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',          component: HomeComponent  },
    { path: 'employees',     component: EmployeeListComponent , canActivate: [CheckLoginGuard] },
    { path: 'employee-detail/:id',  component: EmployeeDetailComponent , children : [
        { path: 'overview', component: OverviewComponent },
        { path: 'project',  component: ProjectComponent },
    ] , canActivate: [CheckLoginGuard]},
    { path: 'employee-edit/:id',    component: EditEmployeeComponent , canActivate: [CheckLoginGuard] },
    { path: 'employee-add',         component: AddEmployeeComponent , canActivate: [CheckLoginGuard] },
    { path: 'material',             component: MaterialComponent },
    { path: 'movies',               component: MoviesComponent, },
    { path: 'login',     component: LoginComponent  },
    { path: '**',        component: NotFoundPageComponent }
];

export const appRoutes = RouterModule.forRoot(routing);