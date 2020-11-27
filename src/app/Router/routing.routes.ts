import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from '../Employees/employee-detail.component';
import { EditEmployeeComponent } from '../Employees/employee-edit.component';
import { OverviewComponent } from '../Employees/employee-overview.component';
import { ProjectComponent } from '../Employees/employee-project.component';
import { EmployeeListComponent } from '../Employees/employee.component';
import { HomeComponent } from '../home.component';
import { LoginComponent } from './login.component';
import { NotFoundPageComponent } from './notfoundpage.component';

const routing: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',      component: HomeComponent  },
    { path: 'employees', component: EmployeeListComponent  },
    { path: 'employee-detail/:id',  component: EmployeeDetailComponent , children : [
        { path: 'overview', component: OverviewComponent },
        { path: 'project',  component: ProjectComponent },
    ] },
    { path: 'employee-edit/:id',    component: EditEmployeeComponent  },
    { path: 'login',     component: LoginComponent  },
    { path: '**',        component: NotFoundPageComponent }
];

export const appRoutes = RouterModule.forRoot(routing);