import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../Employees/employee.component';
import { HomeComponent } from '../home.component';
import { LoginComponent } from './login.component';
import { NotFoundPageComponent } from './notfoundpage.component';

const routing: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',      component: HomeComponent  },
    { path: 'employees', component: EmployeeListComponent  },
    { path: 'login',     component: LoginComponent  },
    { path: '**',        component: NotFoundPageComponent }
];

export const appRoutes = RouterModule.forRoot(routing);